FROM node:12-alpine
COPY ./package.json /home/node/app/package.json
WORKDIR /home/node/app
RUN yarn install
RUN wget https://raw.githubusercontent.com/eficode/wait-for/master/wait-for -O /home/node/wait-for
RUN sed 's/$PORT/$WAIT_PORT/g; s/PORT=/WAIT_PORT=/g; s/$HOST/$WAIT_HOST/g; s/HOST=/WAIT_HOST=/g' /home/node/wait-for > temp
RUN cat temp > /home/node/wait-for
RUN rm temp
RUN chmod 777 /home/node/wait-for
CMD /home/node/wait-for db-redis:6379 db-mongo:27017 -- yarn dev