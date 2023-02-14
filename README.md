# SYSTEM OVERVIEW:

This is a system that allow the user to create and track his own tasks.

The application provide end-to-end CRUD functionalities to the user so, he can easily,
Create, Read, Update, adn Delete his own tasks.

It's built with many technologies and Javascript frameworks mainly using ReactJS, Typescript, and Node.js.

## MAIN FUNCTIONALITIES:

### Create Task (End to End)

The user can create his new own task.

### Get All Tasks (End to End)

At the "My tasks" page the user can find his all tasks.

### Delete Task (End to End)

User also has the ability to delete his own tasks.

### Edit Task (End to End)

User can edit any task that belongs to him.

### View The Task Details in a Modal (Frontend)

User can view the full task details in a modal by clicking on the task.

# MAIN DEPENDENCIES:

The system has many dependencies in both side the frontend and the backend.

## FRONTEND DEPENDENCIES:

- ReactJS

- Typescript

- Redux

- React Hook Form

- React Router Dom

- SASS (CSS Pre-processor)

- Material UI

## BACKEND DEPENDENCIES

- Node.js

- Express

- Cors

- Mongoose

- Bcryptjs

- Json Web Token

## DATABASE:

- Mongo DB

## DEV DEPENDENCIES:

- Nodemon

- Concurrently

# MAIN COMMANDS & SCRIPTS

## INSTALLATION COMMANDS

To run this app,
you can clone it and install the dependencies by openning your terminal and running this commands in order.

### npm i

### cd frontend && npm i

### cd .. && cd frontend && npm i

#### NOTE!:

Before runnig the app locally, you have to create your own .env file in the backend root directory.
Basically you can open the .env-keep text file and create same variables on it in your new .env file
and each env varaible should be assigned to your preffered values.

## RUNNING SCRIPTS

### npm run start:dev

The you can run both sides backend and frontend by this command.

### npm run start:client

If you wanna just run the frontend you can run this command.

### npm run start:server

If you wanna just run the backend you can run this command.
