FROM alpine:3.17.3

RUN echo "Installing necessary dependencies" && \
apk add --update alpine-sdk && apk add bash zip

#Change default shell 
SHELL ["bash", "/bin/sh"]

RUN echo "Installing JDK an Quarkus-CLI" && \
curl -Ls https://sh.jbang.dev | bash -s - trust add https://repo1.maven.org/maven2/io/quarkus/quarkus-cli/ && \
curl -Ls https://sh.jbang.dev | bash -s - app install --fresh --force quarkus@quarkusio

#Shell refresh (mandatory)
RUN source ~/.bashrc

WORKDIR /home

RUN quarkus create app com.edudev:quarkus-in-container:1.0

ENTRYPOINT ["cd quarkus-in-container/ && quarkus"]
CMD ["dev"] 


