FROM golang

COPY . .

RUN go build main.go

EXPOSE 8080

ENTRYPOINT [ "./main" ]

RUN echo '\n\n The image was generated with success! =D\n\n'