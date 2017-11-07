FROM node:8-alpine

EXPOSE 3000

WORKDIR /code
COPY code/package.json .

RUN npm install --quiet && npm cache clean --force

COPY code /code

ENV DEBUG=sa-test:*
CMD npm start