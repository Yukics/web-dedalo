FROM node as build

WORKDIR /app

COPY ./frontend/ /app/

RUN npm install && npm run build

FROM bitnami/nginx 

COPY --from=build /app/dist /app

COPY ./nginx/nginx.conf /opt/bitnami/nginx/conf/nginx.conf