FROM node:alpine

WORKDIR /app

COPY ./package.json package.json

RUN npm install --verbose

COPY . .

EXPOSE 3001

CMD ["npm", "start"]