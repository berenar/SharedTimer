echo ' => Create a directory to persist the volume'
mkdir -p ${HOME}/postgres-data/

echo ' => Run containerised postgres'
# -v local path can't include special characters
docker run -d \
	--name shared-timer-database \
  -e POSTGRES_USER=default \
	-e POSTGRES_PASSWORD=default \
	-v ${HOME}/postgres-data/:/var/lib/postgresql/data \
  -p 5432:5432 \
  postgres

echo ' => Create Database'
docker exec -i shared-timer-database psql -h localhost -U default default < ./migrationScripts/createDatabase.sql

echo ' => Create Schema'
docker exec -i shared-timer-database psql -h localhost -U default sharedtimer < ./migrationScripts/createSchema.sql