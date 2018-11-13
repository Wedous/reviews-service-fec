FROM node:10

RUN mkdir -p /usr/src/app/reviews

WORKDIR /usr/src/app/reviews

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 8000

CMD [ "npm", "start"]