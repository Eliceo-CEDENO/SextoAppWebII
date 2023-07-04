FROM node
COPY . /app
WORKDIR /app
RUN npm install --only=production
ENV PORT 8000
EXPOSE 8000
ENV MONGODB_CNN=mongodb://inversionistas-db:27017/mydatabase
ENTRYPOINT ["npm","start"]