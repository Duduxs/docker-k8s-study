Rodar com o compose: docker-compose up (Sobe tanto o app em go qnt o nginx)
<br>
Rodar sem o compose: {
<br>
    docker build -t go-webserver . (Cria a img do go) <br>
    docker run --name nginx-service -d -p 8090:80 (roda o nginx na porta 8090)
<br>
}
<br>
Agora da um curl http://localhost:8080 p acessar o webserver em go
e curl http://localhost:8090 p acessar o nginx
