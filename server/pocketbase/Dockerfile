# syntax=docker/dockerfile:1
FROM alpine:latest

ARG PROJECT_OWNER
ENV env_name=$PROJECT_OWNER

ARG PROJECT_EMAIL
ENV env_name $PROJECT_OWNER

ARG PROJECT_EMAIL
ENV env_name $PROJECT_EMAIL

ARG POCKETBASE_VERSION=0.20.5

LABEL "maintainer"="${PROJECT_OWNER} <${PROJECT_EMAIL}>"

RUN apk add --no-cache \
    ca-certificates \
    unzip \
    wget \
    zip \
    zlib-dev

ADD https://github.com/pocketbase/pocketbase/releases/download/v${POCKETBASE_VERSION}/pocketbase_${POCKETBASE_VERSION}_linux_amd64.zip /app/pocketbase/pocketbase.zip

RUN unzip /app/pocketbase/pocketbase.zip -d /app/pocketbase && \
    chmod +x /app/pocketbase/pocketbase && \
    rm /app/pocketbase/pocketbase.zip

EXPOSE ${POCKETBASE_PORT}

CMD [ "/app/pocketbase/pocketbase", "serve", "--http=0.0.0.0:${POCKETBASE_PORT}", "--dir=/app/data/pb_data", "--publicDir=/app/data/pb_public" ]