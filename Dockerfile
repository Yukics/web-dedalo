FROM node as build

WORKDIR /app

COPY ./frontend/ /app/

RUN npm install && npm run pre-build && npm run build

FROM nginx 

COPY --from=build /app/dist /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf