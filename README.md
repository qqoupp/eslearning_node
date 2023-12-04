# llm-uni-node

## Description
``npm i ts-node -g``

## Environment variables

```bash
NODE_PORT=6300
MYSQLDB_USER=root
MYSQLDB_ROOT_PASSWORD=somepassword
MYSQLDB_DATABASE=llm_uni
MYSQLDB_LOCAL_PORT=3306
MYSQLDB_DOCKER_PORT=3306
NODE_LOCAL_PORT=6868
NODE_DOCKER_PORT=8080
NODE_ENV=development
```

## Run

``npm i``

``docker compose up``

``npm run migrate``

``npm start dev``

### TODO

Create routes and services and controller and data layers like in this tutorial:
https://blog.logrocket.com/using-sequelize-with-typescript/
https://www.youtube.com/watch?v=b8ZUb_Okxro&ab_channel=CodeWithAntonio

-- Tables and React APIs for the following: User, User_Requests ( user_id, input, output ) .