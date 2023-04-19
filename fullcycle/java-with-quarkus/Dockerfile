FROM debian:unstable-slim

SHELL ["/bin/bash", "-c"]

WORKDIR /home

RUN echo "Installing SDKMAN and its dependencies" && \
apt-get update && \
apt-get install curl bash zip unzip -y

RUN curl -s "https://get.sdkman.io" | bash

RUN source "$HOME/.sdkman/bin/sdkman-init.sh" && \
echo "Installing JDK 17" && \
sdk install java 17.0.5-zulu && \
echo "Installing Latest Quarkus CLI" && \
sdk install quarkus && \
QUARKUS_VERSION="$(quarkus --version)" && \
export QUARKUS_VERSION && \
echo "Quarkus version installed $QUARKUS_VERSION" && \
echo "Creating quarkus project" && \
quarkus create cli --description="project that uses a quarkus project inside a container" --name="quarkus-with-container" -o /home/quarkus-project --gradle --java=17 org.edudev:quarkus-with-container && \
ls && \
cd quarkus-project/quarkus-with-container/ && \
quarkus ext add quarkus-rest-client

ENTRYPOINT quarkus
CMD dev

