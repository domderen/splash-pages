# Builds application in production ready state inside docker container.
# WHAT: What is the purpose of the Dockerfile? It doesn't seem to be used anywhere.

FROM node:0.10

RUN mkdir -p /srv/app
WORKDIR /srv/app

COPY package.json /srv/app/
RUN npm install --production

COPY . /srv/app

EXPOSE 3000
CMD ["npm", "run-script", "run-production"]
