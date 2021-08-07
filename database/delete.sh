echo ' => Delete database'
docker exec -i shared-timer-database psql -h localhost -U default default < ./migrationScripts/dropDatabase.sql