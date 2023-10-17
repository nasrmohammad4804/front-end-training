FROM amazoncorretto:17.0.8-alpine3.18
EXPOSE 8080
ARG JAR_FILE=./target/todo-backend-0.0.1-SNAPSHOT.jar

ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]