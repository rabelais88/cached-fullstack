```sh
# for testing backend-only environment
docker stack deploy -c docker-compose.yaml ${PREFERRED_NAME}
docker stack rm ${PREFERRED_NAME} # shut down & clean up command
```