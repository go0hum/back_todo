Project TODO Backend
=============

## Installation

Download and install Docker from the following URL:

[https://www.docker.com/](https://www.docker.com/)


Run the Docker command

```
docker-compose up -d
```

This will start the MongoDB container.

Install Node.js

I recommend using the version nvm v1.1.12

```
nvm install
```

Alternatively, you can use the following versions:

```
Node.js: v20.18.0
npm: v10.8.2
```

Install dependencies

After installing Node.js, run:

```
cd backend-todo // Skip this command if you're already in the folder
npm install
```

This will install all the required packages for the Node.js server.

Environment Configuration
Create a file named .env and include the following information:

```
DATABASE_URL=mongodb://root:rootpassword@mongodb:27017/tasks
FRONTEND_URL=http://localhost:5173
```

DATABASE_URL: Connection string for MongoDB.
FRONTEND_URL: The frontend URL that will have permission to make API requests.

Testing the API
If you need to test the API, you can use VSCode with the Thunder Client extension.
An image and a file (thunder-collection_tasks.json) are attached for import.

Steps for Testing
Navigate to the file src/server.ts and locate the following lines:

```
//app.use(cors(corsConfig));
//to
app.use(cors({ origin: "*"}))
```

Change this lines to disable CORS protection temporarily, allowing you to make requests directly from any source.

Note: Remember to re-enable CORS protection after testing.



