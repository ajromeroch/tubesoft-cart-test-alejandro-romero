FROM node:alpine
WORKDIR /src
COPY ../package.json package.json
COPY ../package-lock.json package-lock.json
COPY . .
RUN ["npm", "install"]
RUN ["npm", "seed"]
CMD ["npm", "run", "server"]
EXPOSE 8080