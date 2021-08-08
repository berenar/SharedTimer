# SharedTimer-database

### Build Docker container

```bash
docker build -t shared-timer-db-image .
```

### Run the container

```bash
docker run -d --name shared-timer-db-container -p 5432:5432 shared-timer-db-image
```

### Attach to the database

Uses [psql](https://www.postgresql.org/docs/13/app-psql.html)

```bash
docker exec -it testpostgres-container psql -h localhost -U bernat sharedtimer
```

### Exit the database

```psql
# exit
```

### Stop the container

```bash
docker stop testpostgres-container
```

### Delete the container

```bash
docker rm testpostgres-container
```
