FROM node:10-alpine
LABEL "name"="Simple Express App"
LABEL "maintainer"="Atul Malaviya <xyz@qwerty.com>"
LABEL "version"="1.0.0"
EXPOSE 3000
RUN npm install
CMD ["npm", "run", "start"]
