FROM node:lts-alpine AS base
FROM nginx:stable as runtime

# ----------------------------------------------------------------------
# install packages
# ----------------------------------------------------------------------

FROM base AS packages
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --silent --frozen-package-file

# ----------------------------------------------------------------------
# build the app
# ----------------------------------------------------------------------

FROM packages AS build
WORKDIR /app
COPY . .
RUN yarn build

# ----------------------------------------------------------------------
# serve the app
# ----------------------------------------------------------------------

FROM runtime
EXPOSE 80
WORKDIR /usr/share/nginx/html
COPY --from=build ./app/dist ./
COPY nginx.conf /etc/nginx/conf.d/default.conf

