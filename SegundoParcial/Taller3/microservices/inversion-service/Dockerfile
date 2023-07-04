FROM node
COPY . /app
WORKDIR /app
RUN npm install --only=production
ENV PORT 6000
EXPOSE 6000
ENV MONGODB_CNN=mongodb://inversions-db:27017/mydatabase
ENTRYPOINT ["npm","start"]