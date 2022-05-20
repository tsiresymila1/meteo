FROM node:14.17-alpine

ENV NODE_ENV development
WORKDIR /app

COPY packege*.json .
RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]