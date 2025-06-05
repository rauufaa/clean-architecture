# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:latest AS base
WORKDIR /app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json /temp/dev/
RUN cd /temp/dev && bun install

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json /temp/prod/
RUN cd /temp/prod && bun install --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/prod/node_modules node_modules
COPY . .


FROM base AS release
RUN apt-get update -y && apt-get install -y openssl
RUN apt-get install -y iputils-ping
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /app .
COPY --from=prerelease /app/package.json .
ENV DATABASE_URL="postgresql://admin:secret@mydb:7777/netflix?schema=public"
RUN bunx prisma generate

# run the app
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "app.js" ]