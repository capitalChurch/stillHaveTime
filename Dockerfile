FROM node:12.8 as build
WORKDIR /app
COPY . .

RUN npm install --silent
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html/

EXPOSE 80
