FROM node:18-alpine

# Add curl for healthcheck
RUN apk add --no-cache curl \
  && addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app
COPY index.js .

USER appuser

EXPOSE 80
HEALTHCHECK CMD curl --fail http://localhost/ || exit 1

ENV NODE_ENV=production
CMD ["node", "index.js"]