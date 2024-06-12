FROM eclipse-temurin:17.0.8.1_1-jre-alpine

COPY build/libs/todo-app-0.0.1-SNAPSHOT.jar todo-app-0.0.1-SNAPSHOT.jar
COPY src/main/resources/application.yml application.yml
COPY src/main/resources/static static

ENTRYPOINT ["java", "-jar", "/todo-app-0.0.1-SNAPSHOT.jar"]
