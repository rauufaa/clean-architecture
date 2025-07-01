FROM docker.io/library/nginx:1.29
WORKDIR /nginxconf
COPY nginx-selfsigned.crt .
COPY nginx-selfsigned.key .
COPY nginx.conf ../etc/nginx/nginx.conf
