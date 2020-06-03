# To-Do App

To-Do App created using the MEAN Stack (Mongo DB, Express.Js, Angular, Node.Js).

## How to test it:

Clone the repository and run:

1. Go to root folder (mean-todoapp/) and Run `yarn start` to start the mongoDB server in `http://localhost:3000/`

2. Go to frontend folder (mean-todoapp/frontend) and Run `ng serve` to start the dev server in `http://localhost:4200/`

## Description:

#### Front-End:

- Used [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7. to generate the project, component, models and services.

- Used [MaterializeCSS](https://materializecss.com/) to style the app.

- The `ToDo Component`contains the service & model to connect to the REST API created in the server side.

## Disclosure:

The app uses environment variables, loaded from the `.env` file [(dotEnv documentation)](https://www.npmjs.com/package/dotenv), usually this won't be in the git repository but I left it there for you to be able to connect to the mongoDB server.
