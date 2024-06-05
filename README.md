# llm-uni-node

## Description
The BE for the ElevateStackLearning website.
To set it up, create a .env file, similar to the one provided then run the instructions provided.

## Environment variables

```bash
NODE_PORT=6300
MYSQLDB_USER=root
MYSQLDB_ROOT_PASSWORD=somepassword
MYSQLDB_DATABASE=llm_uni
MYSQLDB_LOCAL_PORT=3308
MYSQLDB_DOCKER_PORT=3306
NODE_LOCAL_PORT=6868
NODE_DOCKER_PORT=8080
NODE_ENV=development
OPENAI_API_KEY =
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=

```

## Run
``npm i ts-node -g``

``npm i``

``docker compose up``

``npm run migrate``

``npm start dev``

