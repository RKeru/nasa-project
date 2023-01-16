FROM node:18-bullseye-slim

WORKDIR /app

# Install git
RUN apt-get update && apt-get install -q -y \
    git

USER node

EXPOSE 8000