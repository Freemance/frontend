# Install dependencies only when needed
FROM node:lts-alpine AS deps

WORKDIR /opt/app

COPY package.json yarn.lock ./

#ENV YARN_CACHE_FOLDER=/dev/shm/yarn_cache

ENV PORT 3000

RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
# `X_TAG` in my case (Git commit hash)

FROM node:lts-alpine AS builder

ENV NODE_ENV=production

WORKDIR /opt/app

COPY . .

COPY --from=deps /opt/app/node_modules ./node_modules

RUN yarn build

# Production image, copy all the files and run next
FROM node:lts-alpine AS runner

ARG X_TAG

WORKDIR /opt/app

ENV NODE_ENV=production

COPY --from=builder /opt/app/next.config.js ./

COPY --from=builder /opt/app/public ./public

COPY --from=builder /opt/app/.next ./.next

COPY --from=builder /opt/app/node_modules ./node_modules

CMD ["node_modules/.bin/next", "start"]
