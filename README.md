# apollo-graphql

Server: Node Express + Apollo graphql server
------
Install dependencies:
```
npm i --save express express-graphql graphql graphql-tools
```
```
npm install
```
Start server:
```
node server.js
```
Go to http://localhost:4000/graphql


Example graphql queries:

Get all users:
```
query {
  users {
    id
    name
    email
  }
}
```
Get only 5 users:
```
query {
  users(limit:5) {
    id
    name
  }
}
```
Get user with ID 4:
```
query {
  user(id:"4") {
    id
    name
    email
  }
}
```

Client: Angular + Apollo graphql client
------
Install dependencies:
```
npm install apollo-angular apollo-angular-link-http apollo-client apollo-cache-inmemory graphql-tag graphql --save
```
Start server:
```
ng serve
```
Go to http://localhost:4200/
Check the console log. You will see the query results there.
