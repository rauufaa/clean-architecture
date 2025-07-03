FROM docker.io/library/haproxy:2.3
COPY haproxy.cfg /usr/local/etc/haproxy/haproxy.cfg
RUN mkdir -p /usr/local/etc/haproxy/ssl
COPY haproxy.pem /usr/local/etc/haproxy/ssl/
