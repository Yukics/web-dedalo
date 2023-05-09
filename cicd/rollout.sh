#!/bin/bash
cd /docker/web-dedalo
docker build -t yuki/web-dedalo:latest -t yuki/web-dedalo:`date +%Y%m%d%H%M` .
docker-compose up -d --force-recreate

# TODO check if it works, if not rollback
#TODO cleanup old images