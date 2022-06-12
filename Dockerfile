FROM node:13.12.0-alpine
WORKDIR /matthieu
COPY ./package.json .
RUN --mount=type=secret,id=GMAIL_USR \
    --mount=type=secret,id=PASSWORD \
    --mount=type=secret,id=PORT \
    export GMAIL_USR=${cat /run/secrets/GMAIL_USR} \
    export PASSWORD=${cat /run/secrets/PASSWORD} \
    export PORT=${cat /run/secrets/PORT} \
    npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]