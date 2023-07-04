FROM node
COPY . /app
WORKDIR /app
RUN npm install --only=production
ENV PORT 7000
EXPOSE 7000
ENV MONGODB_CNN=mongodb://conceptos-db:27017/mydatabase
ENTRYPOINT ["npm","start"]