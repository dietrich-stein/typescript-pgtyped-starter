# syntax=docker/dockerfile:1

FROM keinos/sqlite3:latest

ARG PROJECT_OWNER
ENV PROJECT_OWNER=$PROJECT_OWNER

ARG PROJECT_EMAIL
ENV PROJECT_EMAIL=$PROJECT_EMAIL

ARG POCKETBASE_PORT
ENV POCKETBASE_PORT=$POCKETBASE_PORT

ARG POCKETBASE_VERSION=0.20.5

LABEL maintainer="${PROJECT_OWNER} <${PROJECT_EMAIL}>"

USER root

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

# doesn't actually expose the port, serves as documentation
EXPOSE $POCKETBASE_PORT

# "sh -c" is required here for variable expansion to work
CMD [ "sh", "-c", "/app/pocketbase/pocketbase serve --http=0.0.0.0:$POCKETBASE_PORT --dir=/app/data/pb_data --publicDir=/app/data/pb_public" ]