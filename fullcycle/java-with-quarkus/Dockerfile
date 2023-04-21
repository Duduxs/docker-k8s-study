FROM alpine:3.17.3

RUN echo "Installing necessary dependencies" && \
apk add bash zip curl

#Change default shell sh to bash
SHELL ["/bin/bash", "-c"]

WORKDIR /home

RUN echo "Installing JDK an Quarkus-CLI" && \
curl -Ls https://sh.jbang.dev | bash -s - trust add https://repo1.maven.org/maven2/io/quarkus/quarkus-cli/ && \
curl -Ls https://sh.jbang.dev | bash -s - app install --fresh --force quarkus@quarkusio

RUN echo "Creating the app" && \
source ~/.bashrc && \
quarkus create app com.edudev:quarkus-in-container:1.0

WORKDIR quarkus-in-container/

ENTRYPOINT source ~/.bashrc && quarkus
CMD dev

EXPOSE 8080

