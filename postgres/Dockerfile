FROM docker.io/library/postgres:alpine

ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=secret
ENV POSTGRES_DB=netflix

COPY netflix.sql /docker-entrypoint-initdb.d/
