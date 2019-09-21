FROM mhart/alpine-node:12
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --prod

# Only copy over the node pieces we need from the above image

FROM mhart/alpine-node:slim-12

ARG USER
WORKDIR /app

COPY --from=0 /app .
COPY . .

RUN mkdir -p /var/log/node
RUN addgroup -g 10001 -S $USER && \
  adduser -u 10001 -S $USER -G $USER && \
  chown -R $USER:$USER /app && \
  chown -R $USER:$USER /var/log/node

USER $USER

EXPOSE 3000
CMD ["node", "src/bin/www"]