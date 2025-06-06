FROM docker.io/library/nginx:latest
WORKDIR /nginxconf
COPY nginx-selfsigned.crt .
COPY nginx-selfsigned.key .
COPY nginx.conf ../etc/nginx/nginx.conf
