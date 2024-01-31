FROM node:20.9.0
WORKDIR /saml
COPY package*.json ./
RUN npm install
EXPOSE 3000
COPY . .
CMD ["npm", "start"]