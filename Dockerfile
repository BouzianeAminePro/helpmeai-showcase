# Builder
FROM node:latest AS builder

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build


# Deployer
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]