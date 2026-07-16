FROM node:22 AS build

WORKDIR /app

COPY package.json .

RUN npm install

COPY app.js .

FROM node:22-alpine

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000

CMD ["node", "app.js"]
