docker rm -f quarkus-in-alpine && docker rmi duduxs/quarkus-in-alpine:v1

echo "Now removing multistage build quarkus container and images"

docker rm --force quarkus-in-alpine-multistage-build && docker rmi duduxs/quarkus-in-alpine-multistage-build:v1


