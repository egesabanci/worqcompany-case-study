# run the ExpressJS backend on 0.0.0.0:8080
# backend image can be found on Docker Hub
# (https://hub.docker.com/r/egesabanci/worqcompany-case-api)
sudo docker run \
  --name api \
  -p 8080:8080 \
  -d egesabanci/worqcompany-case-api