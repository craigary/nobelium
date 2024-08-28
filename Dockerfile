FROM node:20-slim
RUN apt update && apt install python3 -y && apt clean && npm install -g pnpm
ARG NOTION_PAGE_ID
WORKDIR /app
COPY . .
RUN rm -rf node_modules
RUN pnpm install --frozen-lockfile && pnpm install sharp
RUN pnpm run build

ENV NODE_ENV=production

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["pnpm", "run", "start"]
