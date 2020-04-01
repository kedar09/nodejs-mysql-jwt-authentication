# nodejs-mysql-jwt-authentication
Sign-Up/Sign-In using Node.js, MySql and JWT(JSON Web Token).

## JSON Web Token | JWT
```
   JSON Web Token (JWT) is a compact claims representation format intended for space constrained environments
such as HTTP Authorization headers and URI query parameters.
   A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two
parties).
```
**Quickstart**

[Get started in 5 minutes] [Quickstart](https://www.npmjs.com/package/jsonwebtoken).


Run this project by this command :

1. `npm install`
2. `npm start`
3. `localhost:3000`

**Creating database and table**

```
create database TEST;

use TEST;

create table auth(
    authId int primary key auto_increment,
    email varchar(30) unique,
    password varchar(250),
    displayName varchar(50,
    phoneNumber bigint
);
```

