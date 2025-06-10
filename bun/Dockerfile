# use the official Bun image
FROM oven/bun:latest AS base
WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY package.json bun.lockb ./
RUN bun install
RUN bunx prisma generate

COPY . .
EXPOSE 3000
CMD ["bun", "run", "app.js"]
