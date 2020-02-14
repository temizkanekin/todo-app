# build environment
FROM node:10.16-alpine as builder

# increase memory size
ENV NODE_OPTIONS=--max_old_space_size=8192

WORKDIR /usr/todo-app

# install yarn
RUN apk add --no-cache bash yarn \
    && yarn global add serve

COPY package.json yarn.lock /usr/todo-app/

RUN yarn

COPY . .

RUN yarn build

# runtime
FROM node:10.16-alpine

RUN apk add --no-cache bash yarn \
    && yarn global add serve

WORKDIR /app
COPY --from=builder /usr/todo-app/build build/
COPY --from=builder /usr/todo-app/startup.sh /
CMD /startup.sh
