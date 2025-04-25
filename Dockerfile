# Build Stage
FROM node:21-slim AS build

WORKDIR /app
COPY package*.json ./

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=false
RUN npm ci

COPY . .
RUN npm run build


# Production Stage
FROM node:21-slim AS deploy

WORKDIR /app

RUN apt-get update && apt-get install -y \
  wget \
  gnupg \
  fonts-liberation \
  libasound2 \
  libatk-bridge2.0-0 \
  libatk1.0-0 \
  libcups2 \
  libdbus-1-3 \
  libgdk-pixbuf2.0-0 \
  libnspr4 \
  libnss3 \
  libx11-xcb1 \
  libxcomposite1 \
  libxdamage1 \
  libxrandr2 \
  xdg-utils \
  libu2f-udev \
  libvulkan1 \
  libglu1-mesa \
  && rm -rf /var/lib/apt/lists/*

COPY --from=build /app ./

ENV NODE_ENV=production
ENV PORT=3020

ENV PUPPETEER_EXECUTABLE_PATH=/app/node_modules/puppeteer/.local-chromium/linux-*/chrome-linux/chrome

EXPOSE 3020

CMD ["npm", "start"]
