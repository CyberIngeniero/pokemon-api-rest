# Pokemon API Rest 

> This is a simple API Rest for Pokemon.
> The json file is getting from [jackkeck Github repository](https://github.com/jackkeck/pokemonDataSet).
> Licensed under the MIT license.

## Resume
This app is a basic API with detailed information of each Pokemon in the database, developed with Node.js and docker. The database is MongoDB in the docker container getting from [mongoDB docker image](https://hub.docker.com/_/mongo).


## Technical Details
- API Rest developed in Node.js and containerized with Dockers.
- The data is stored in a Mongodb persistent database.
- Mongodb is a Docker Image storage in dockerhub.


## Setup
1. Clone the repository in your computer.

To clone the repository in your computer, you can use the following command:

```
$ git clone https://github.com/cyberingeniero/pokemon-api-rest.git
$ cd pokemon-api-rest
```

2. Run docker image with mongo database

```
$ cd database
$ sudo docker run -d -p 21017:27017 --name pokemondb -v $pwd:/data/db mongo
```



### Install the dependencies.
1. Install Dockers.

This depend on your OS but it should be something like this:

```
$ sudo pacman -S docker
```

2. Starting the docker service

To start Docker daemon with `systemctl star`.

```
$ sudo systemctl start docker
```

and verify Docker daemon with

```
$ sudo systemctl status docker
```
To enable Docker daemon when you run your OS use `systemctl enable`.

```
$ sudo systemctl enable docker
```

3. Get the Mongodb docker image.

To get docker image of mongodb of dockerhub use

```
$ sudo docker pull mongo
```







