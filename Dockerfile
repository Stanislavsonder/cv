FROM node:24-slim AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM nginx:alpine AS deploy

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 3020
