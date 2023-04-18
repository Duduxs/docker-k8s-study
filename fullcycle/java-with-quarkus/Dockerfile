FROM alpine:3.17.3

WORKDIR /home

RUN printf "\nInstalling zip, bash and curl libraries\n" && \
apk add zip && \
apk add curl && \
apk add bash && \
bash

RUN echo && \ 
echo "Installing sdkman library" && \
echo && \
apk add curl -s "https://get.sdkman.io" | bash && \
source "$HOME/.sdkman/bin/sdkman-init.sh"

RUN echo && \
echo "Installing Quarkus Latest CLI" && \
echo && \
sdk install quarkus && \
QUARKUS_VERSION="$(quarkus --version)" && \
export QUARKUS_VERSION && \
echo "Quarkus version installed $QUARKUS_VERSION"

RUN echo && \
echo "Installing JDK 17" && \
echo && \
sdk install java 17.0.5-zulu

RUN echo && \
echo "Creating quarkus project" && \
echo && \
quarkus create cli --description="project that uses a quarkus project inside a container" --name="quarkus-with-container" -o /home/quarkus-project --gradle --java=17 org.edudev:quarkus-with-container && \
cd quarkus-project/quarkus-with-container/ && \
quarkus ext add quarkus-rest-client

ENTRYPOINT quarkus
CMD dev

