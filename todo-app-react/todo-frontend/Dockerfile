FROM  node:alpine as development
WORKDIR /react-app
COPY ./package.json .
RUN npm install
COPY . .
CMD npm start