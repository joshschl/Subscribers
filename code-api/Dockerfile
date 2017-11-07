FROM node:8-alpine

EXPOSE 3000

WORKDIR /code
COPY package.json .

RUN npm install --quiet && npm cache clean --force

COPY . .

ENV DEBUG=sa-test:*
CMD npm start