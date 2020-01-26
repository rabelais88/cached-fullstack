BACKEND_TAG="cached-backend-dev:latest"
FRONTEND_TAG="cached-frontend-dev:latest"
BACKEND_DOCKERFILE="dev.dockerfile"
FRONTEND_DOCKERFILE="dev.dockerfile"
CURRENT_DIR=$(pwd)
BACKEND_DIR="${CURRENT_DIR}/backend-express"
FRONTEND_DIR="${CURRENT_DIR}/frontend-next"
# backend operation
cd $BACKEND_DIR
docker build -f $BACKEND_DOCKERFILE -t $BACKEND_TAG $BACKEND_DIR
cd $CURRENT_DIR
# frontend operation
cd $FRONTEND_DIR
docker build -f $FRONTEND_DOCKERFILE -t $FRONTEND_TAG $FRONTEND_DIR
cd $CURRENT_DIR