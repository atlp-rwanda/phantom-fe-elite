FROM node:15.13-alpine
WORKDIR /phantom-fe-elite
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "start"]