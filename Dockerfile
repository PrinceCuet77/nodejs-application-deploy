FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]