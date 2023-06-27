docker build -t duduxs/quarkus-in-alpine:v1 . && docker run --name quarkus-in-alpine -d -p 8099:8500 -e PORT=8500 --network bridge --mount type=bind,source="$(pwd)/quarkus-greeting-resource",destination=/home/quarkus-in-container/src/main/java/com/edudev duduxs/quarkus-in-alpine:v1

echo "Now bulding multistage quarkus image"

docker build -t duduxs/quarkus-in-alpine-multistage-build:v1 . -f ./Dockerfile-with-multistage-building.prd && docker run --name quarkus-in-alpine-multistage-build -d -p 8098:8500 -e PORT=8500 --mount type=bind,source="$(pwd)/quarkus-greeting-resource",destination=/home/quarkus-in-container/src/main/java/com/edudev duduxs/quarkus-in-alpine-multistage-build:v1




