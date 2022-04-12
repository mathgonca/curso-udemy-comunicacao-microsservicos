FROM adoptopenjdk/openjdk11:alpine

RUN apk --no-cache update && \
    apk --no-cache upgrade && \
    apk add --update tzdata && \
    rm -rf /var/cache/apk/*

RUN echo ${TZ} > /etc/timezone

ADD /target/product-api-0.0.1-SNAPSHOT.jar product-api.jar

ENTRYPOINT ["java","-jar","product-api.jar"]
