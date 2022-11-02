FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm rebuild esbuild

CMD ["npm","run","dev"]