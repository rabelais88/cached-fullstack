```sh
# for testing backend-only environment(with hot-reloading)
# build backend image before run
docker stack deploy -c docker-compose.yaml ${PREFERRED_NAME}
docker stack rm ${PREFERRED_NAME} # shut down & clean up command
```