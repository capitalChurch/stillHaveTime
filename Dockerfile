FROM node:12.16.2 as build
WORKDIR /app
COPY . .

ENV PUBLIC_URL=/still-have-time

RUN npm install --silent
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx.conf

EXPOSE 80
