FROM node:10-alpine
LABEL "name"="Simple Express App"
LABEL "maintainer"="Atul Malaviya <xyz@qwerty.com>"
LABEL "version"="1.0.0"
COPY . .
EXPOSE 3000
RUN npm install
RUN npm test
CMD ["npm", "run", "start"]
