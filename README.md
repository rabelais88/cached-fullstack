```sh
# must build image prior to the run(refer to .yaml for the image name)

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

- each subdirectory consists separate docker-compose files for isolated dev/test.
