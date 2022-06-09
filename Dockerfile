FROM node:16
WORKDIR /portfolio_matthieu
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]