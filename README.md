# A docker-nginx-vue-express-node-sqlite webapp

[![Project Status](http://www.repostatus.org/badges/latest/concept.svg)](http://www.repostatus.org/#concept)

A template for a web-app.

## About

This is a template of a web application consisting of a SEVN-stack (sqlite3-express.js-vue.js-node.js),
docker, and nginx.
The SEVN stack is used to build a multi-page web application using [Vue.js](https://vuejs.org/)
as JavaScript framework, [Express.js](https://expressjs.com/) and [Node.js](https://nodejs.org/en/) as web-framework,
and [SQLite3](https://www.sqlite.org/index.html) as embedded JSON database. [Nginx](https://www.nginx.com/) is used as a reverse-proxy in front of Express.js.
The entire app is [dockerized](https://www.docker.com/), such that building and running can be done easily with hardly any installation steps.

<img
  src="./_fig/screenshot.png?raw=true"
 alt="Drawing" style="width: 600px; border:2px solid black"
/>

## Installation

Download [Miniconda](https://docs.conda.io/en/latest/miniconda.html) first and install everything like this

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh

conda create -n web python=3.7
echo "source ~/miniconda3/bin/activate web" >> ~/.bashrc

source ~/miniconda3/bin/activate web
conda install -y nodejs docker-compose
```

Install [Docker](https://docs.docker.com/engine/install/ubuntu/).
Then build the containers using

```bash
docker-compose up -d nginx
```

This should work. Check it out using

```bash
curl localhost:80
curl localhost:4000
```

If something is returned, the installation worked out and your server runs on port 80.
You can rebuild everything using

```bash
docker-compose up --build
```

### Debugging

For debugging it makes sense to only build a container for the express app.
Instead of installing using `docker-compose`, use

```bash
docker build -t webapp:0.1.0 .
docker run --name webapp -d -p 4000:4000 webapp:0.1.0
```

Check it out using

```bash
curl localhost:4000
```

If this works, then the express container works fine.

## Usage

Run the express app using
```bash
docker start webapp
docker start nginx
```

Stop or remove using:

```bash
docker container stop webapp nginx
docker container rm webapp nginx
```

## Author

Simon Dirmeier <a href="mailto:simon.dirmeier @ web.de">simon.dirmeier @ web.de</a>
