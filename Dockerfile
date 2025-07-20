# PocketBase for KabulRentals
FROM alpine:latest

ARG PB_VERSION=0.26.1

RUN apk add --no-cache \
    unzip \
    ca-certificates

ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

COPY ./pb_migrations /pb/pb_migrations
COPY ./reset_admin.sh /pb/reset_admin.sh
RUN chmod +x /pb/reset_admin.sh

EXPOSE 8080

CMD ["/pb/reset_admin.sh"]