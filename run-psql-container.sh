# run PostgreSQL database on 172.17.0.1:5432
sudo docker run \
  --name psql-db \
  -e POSTGRES_PASSWORD=secret-password \
  -p 172.17.0.1:5432:5432 \
  -d postgres