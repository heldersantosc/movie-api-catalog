FROM node:18.16.0-alpine3.17

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

EXPOSE 3000

CMD ["node", "src/server.js"]
