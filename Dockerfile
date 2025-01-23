FROM node:22.13.0

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3900

CMD ["npm", "run", "dev"]