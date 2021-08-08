FROM postgres
ENV POSTGRES_USER bernat
ENV POSTGRES_PASSWORD bernatpassword
ENV POSTGRES_DB sharedtimer
COPY ./init.sql /docker-entrypoint-initdb.d/
