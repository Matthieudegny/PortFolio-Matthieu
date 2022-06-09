FROM node:16
WORKDIR /portfolio_matthieu
COPY package.json /portfolio_matthieu
RUN npm install
COPY . /portfolio_matthieu
EXPOSE 3000
CMD ["npm", "start"]