FROM node:16
WORKDIR /matthieu-degny-portfolio
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]