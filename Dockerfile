FROM node:18-slim

WORKDIR /app

COPY package.json .

RUN npm install || cat /root/.npm/_logs/*-debug.log

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
