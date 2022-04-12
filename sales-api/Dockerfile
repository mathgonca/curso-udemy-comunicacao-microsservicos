FROM node:14

COPY package*.json ./
RUN yarn

COPY ./ ./
CMD ["node", "app.js"]
