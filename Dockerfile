FROM node:alpine

WORKDIR /src

COPY ./package.json package.json

RUN npm install --verbose

COPY . .

EXPOSE 3000

CMD ["npm", "start"]