ARG NODE_VERSION=22.2.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

WORKDIR /

COPY . .

RUN npm install

RUN npx tsc -b

EXPOSE 4000

CMD node dist/index.js



