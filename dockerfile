FROM node:18-alpine

WORKDIR /app

# copia los archivos package.json y package-lock.json (que contienen las dependencias)
COPY package*.json ./

RUN npm install 

#copiar todo
COPY . .

RUN npm run build

EXPOSE 4000

CMD [ "npm","run","preview" ]


