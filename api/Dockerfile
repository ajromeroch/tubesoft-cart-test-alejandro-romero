FROM node:alpine
WORKDIR /api
COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
#COPY ./server.js server.js
COPY . .
RUN ["npm", "install"]
#RUN ["node", "/src/db/seed.js"]
CMD ["npm", "start"]
EXPOSE 8080

#https://stackoverflow.com/questions/27068596/how-to-include-files-outside-of-dockers-build-context
#does db creates automatically in docker?