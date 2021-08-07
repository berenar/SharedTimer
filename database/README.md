# SharedTimer-database

### Create and start the database in a docker container

```bash
cd database
chmod +x init.sh
bash init.sh
```

### Stop database container

```bash
docker stop shared-timer-database
```

### Start the database container

```bash
docker start shared-timer-database
```

### Drop the database

```bash
cd database
chmod +x init.sh
bash destroy.sh
```

### Delete Docker container

```bash


```

### Start a bash session

Uses [psql](https://www.postgresql.org/docs/13/app-psql.html)

```bash
docker exec -it shared-timer-database psql -h localhost -U default sharedtimer
```

### End a bash session

```psql
# exit
```
