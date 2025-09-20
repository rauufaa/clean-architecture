# use the official Bun image
FROM docker.io/oven/bun:1.2 AS base
WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY package.json bun.lock ./

RUN bun install
COPY . .
RUN bunx prisma generate

EXPOSE 3000
CMD ["bun", "run", "app.js"]
