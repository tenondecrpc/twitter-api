# MongoDB
## Crear base de datos
use twitter-db
## Crear usuario en
db.createUser({ user: "twitter-user", pwd: "twitter-password", roles: ["dbOwner"] })
## Test de conexión
mongo -u twitter-user -p twitter-password 127.0.0.1:27017/twitter-db