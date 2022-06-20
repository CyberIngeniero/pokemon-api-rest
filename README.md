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


### Install the dependencies.
1. Install Dockers.

This depend on your OS but it should be something like this:

```
$ sudo pacman -S docker docker-compose
```

2. Enable and Starting the Docker daemon service

To start Docker daemon with `systemctl star`.

```
$ sudo systemctl enable docker
$ sudo systemctl start docker
```

## Setup
1. Clone the repository in your computer.

To clone the repository in your computer, you can use the following command:

```
$ git clone https://github.com/cyberingeniero/pokemon-api-rest.git
$ cd pokemon-api-rest
```

2. Run app in docker image with mongo database

```
$ docker-compose build
$ docker-compose up
```

## Run the app
To access to api, go to localhost:4000/pokemons

### Methods

For now there is only one method:

```
/pokemons/all
/pokemons/by-name/{name}
/pokemons/by-type/{type}
```





