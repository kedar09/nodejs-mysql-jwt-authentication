# nodejs-mysql-jwt-authentication
Sign-Up/Sign-In using Node.js, MySql and JWT(JSON Web Token).


**Software prerequisites:**

1. Node.js
2. Joi
3. Mysql
4. JSON Web Token
5. Nodemailer
6. Swagger

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install express
```

## Quick Start

  The quickest way to get started with express is to utilize the executable [`express(1)`](https://github.com/expressjs/generator) to generate an application as shown below:

  Install the executable. The executable's major version will match Express's:

```bash
$ npm install -g express-generator@4
```

  Create the app:

```bash
$ express nodejs-mysql-jwt-authentication && cd nodejs-mysql-jwt-authentication
```

  Install dependencies:

```bash
$ npm install
```

  Start the server:

```bash
$ npm start
```

  View the website at: http://localhost:3000

## Joi

  [Joi](https://hapi.dev/tutorials/validation/?lang=en_US) is an object schema description language and validator for JavaScript objects. Joi allows you to create blueprints or schemas for JavaScript objects to ensure validation of key information. To get started with joi, you must first install and add it as a dependency to your project:

Installation is done using the npm install command:

```bash
$ npm install @hapi/joi
```
[joi-date](https://hapi.dev/module/joi-date/) extensions for advance date rules.  
```bash
$ npm install @hapi/joi-date
```

## MySql
This is a node.js driver for [mysql](https://github.com/mysqljs/mysql).

Installation is done using the npm install command:
```bash
$ npm install mysql
```


## JSON Web Token | JWT
   [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken) is a compact claims representation
format intended for space constrained environments such as HTTP Authorization headers and URI query 
parameters.
   A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web
(between two parties).
```bash
$ npm install jsonwebtoken
```

## Swagger
  [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) module allows you to serve auto-generated swagger-ui generated API docs from express, based on a swagger.json file. The result is living documentation for your API hosted from your API server via a route.  
```bash
$ npm install swagger-ui-express swagger-jsdoc
```

## NodeMailer
  [Nodemailer](https://nodemailer.com) is a module for Node.js applications to allow easy as cake email sending. 
 Send mail through Gmail [click here](https://nodemailer.com/usage/using-gmail/)
```bash
$ npm install nodemailer
```

## Folder Structure

```
nodejs-mysql-jwt-authentication
|
|
|____app
|    |____AuthComponent
|    |    |____auth.controller.js
|    |    |____auth.model.js
|    |    |____auth.utility.js
|    |    |____auth.validator.js
|    |
|    |____UserComponent
|         |____user.controller.js
|      	  |____user.model.js
|         |____user.utility.js
|         |____user.validator.js
|
|
|____bin
|    |____www
|
|
|____config
|    |____database.js
|    |____JWTPrivateKey.js
|    |____nodemailerDetails.js
|
|
|____node_modules 
|
|
|____public
|    |____stylesheets
|    |    |__style.css
|    |
|    |____index.html
|
|
|____routes
|    |____auth.js
|    |____users.js
|
|
|____app.js
|
|
|____package.json

```



**Creating database and table**

```
create database TEST;

use TEST;

create table users(
    userId int primary key auto_increment,
    email varchar(30) unique,
    password varchar(250),
    displayName varchar(50),
    phoneNumber bigint
);
```

