```sh

# dev
docker stack deploy -c dev.docker-compose.yaml ${PREFERRED_NAME}
docker stack rm ${PREFERRED_NAME}

# stage
docker stack deploy -c stage.docker-compose.yaml ${PREFERRED_NAME}
docker stack rm ${PREFERRED_NAME}

# production
docker stack deploy -c docker-commpose.yaml ${PREFERRED_NAME}
docker stack rm ${PREFERRED_NAME}
```

- please refer to each subdirectory for more info on individual test environment