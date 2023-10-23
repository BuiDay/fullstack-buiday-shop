FROM node:18-alpine

WORKDIR /shop_app/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8002

CMD ["npm","run","start"]

