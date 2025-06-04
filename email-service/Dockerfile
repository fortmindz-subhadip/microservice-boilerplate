FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4001

RUN npm install -g nodemon

CMD ["nodemon", "index.js"]
