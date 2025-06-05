FROM postgres:latest

ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=secret
ENV POSTGRES_DB=mydb

COPY init.sql /docker-entrypoint-initdb.d/
