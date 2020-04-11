# A docker-nginx-vue-express-node-sqlite webapp

[![Project Status](http://www.repostatus.org/badges/latest/concept.svg)](http://www.repostatus.org/#concept)

An empty web-app template.

## About

This is a barebone that I like to use for web-servers.
It uses skeleton on the front-end, nginx as a reverse-proxy,
Gunicorn as HTTP-server and Flask as web-framework.
All directories/files are empty I think, so you just need to fill them.
The entire stack is dockerized.

## Installation

Download [Minicoda](https://docs.conda.io/en/latest/miniconda.html) first and install everything like this

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh

conda create -n web python=3.7
echo "source ~/miniconda3/bin/activate  web" >> ~/.bashrc

source ~/miniconda3/bin/activate web
conda install -y nodejs
```

Setup [Docker](https://docs.docker.com/engine/install/ubuntu/) first.
Then build the containers using

```bash
conda install -y docker-compose
docker-compose up -d nginx
```

This should work. Check it out using

```bash
curl localhost:80
```

Stopping and remove everything with:

```bash
docker container stop webapp nginx
docker container rm webapp nginx
```

Start again using

```bash
docker-compose up -d nginx
```

You can also just build the Dockerfile and use your own server

```bash
docker build -t webapp:0.1.0 .
docker run --name webapp -d -p 4000:4000 webapp:0.1.0
```

Later to stop

```bash
docker stop webapp
```

## Author

Simon Dirmeier <a href="mailto:simon.dirmeier @ web.de">simon.dirmeier @ web.de</a>
