# nodejs-mysql-jwt-authentication
Sign-Up/Sign-In using Node.js, MySql and JWT(JSON Web Token).

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

