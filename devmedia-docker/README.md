Para criar a imagem a partir do Dockerfile: docker build -t apache-image .
<br>

Para criar o container a partir da imagem: docker run --rm --name apache-container -d -p 8084:80 apache-image