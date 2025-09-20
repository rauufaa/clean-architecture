
FROM docker.io/library/node:24.3 AS base
WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./

RUN npm install
COPY . .
RUN npx prisma generate

EXPOSE 3000
CMD ["node", "app.js"]
