FROM node:21.7.3-alpine AS deps
RUN apk add --no-cache make gcc g++ python3 pkgconfig pixman-dev cairo-dev pango-dev libjpeg-turbo-dev
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches
RUN npm add -g pnpm && pnpm install

FROM node:21.7.3-alpine AS builder
ENV NOTION_PAGE_ID=
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm add -g pnpm && pnpm build

ENV NODE_ENV=production

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["pnpm", "start"]
