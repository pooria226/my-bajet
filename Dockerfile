FROM node:alpine
#FROM 192.168.5.100/node:alpine

RUN mkdir -p /usr/src/app
ENV PORT 80

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

# Production use node instead of root
# USER node

RUN npm i --force

COPY . /usr/src/app

RUN npm run build

EXPOSE 80
CMD [ "npm", "start" ]