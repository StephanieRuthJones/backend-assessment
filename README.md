# Backend Assessment

## Introduction

Welcome to the Backend Assessment!

This assessment requires you to build a Node.js Express MongoDB app using Axios. In this challenge, you will use the [Rick and Morty API](https://rickandmortyapi.com/documentation/) to build API endpoints and to combine data from the API. During this assessment, you will need to create simple and complex GET routes, error-handling middleware, a MongoDB database, as well as a login system with Authentication using JWT.

To complete this assessment, complete every task in Parts I through V of the challenge outlined below.

_Requirements to Pass_

- All routes must return the correct status code and data.
- Your code must be clean and readable. It should follow the DRY principle.
- Errors must be handled and returned to the user.
- `try/catch` blocks must be used to make requests and handle errors rather than promise chaining.
- All routes must return the correct status code and data.
- Submit your github repo link with the `.env` file included.

_Important Note(s):_

- Use [axios](https://www.npmjs.com/package/axios) to make API requests.
- Routes must be created in the appropriate files within the `routes` folder.
- Controllers must be created in the appropriate files within the `controllers` folder.

_Tips:_

- Use [Postman](https://www.postman.com/downloads/) to test your API endpoints. Read [Postmant documentation] (https://learning.postman.com/docs/getting-started/introduction/) as needed.
- Use [axios documentation](https://www.npmjs.com/package/axios) as needed.
- Use [Express documentation](https://expressjs.com/en/4x/api.html) as needed.
- Use [Rick and Morty API](https://rickandmortyapi.com/documentation/) documentation as needed.
- Be sure to import and register routes in the `app.js` file as you create them.

### Part I - Setup Instructions

- [ ] Fork and clone this repository.
- [ ] Run `npm install` to download dependencies.
- [ ] Run `npm run server` to start the server w/ `nodemon`.
- [ ] Set up the `app.js` file:

  - [ ] Require the `express` module
  - [ ] Set up the `app` object
  - [ ] Set the `port` to `3000`
  - [ ] Set up the `app` object to use `express.json()` middleware to parse JSON bodies
  - [ ] Add a GET route to `/` that returns a `200` status and a JSON object with a `message` key assigned to a string that reads, `"Welcome to the Rick and Morty API!"`
  - [ ] Set up the server to listen on port `3000`.
  - [ ] Run your server with `npm run server`
  - [ ] Check that your server is running:
    - [ ] You should see your "Listening on port 3000" log in the terminal.
    - [ ] When you visit `http://localhost:3000/` in your browser, you should see a JSON object, `{message: "Welcome to the Rick and Morty API!"}`.

### Part II - API GET Routes: Return Rick and Morty Data

All routes in this section should be created in the `charactersRoutes.js` file.

- [ ] Use `/api` as the base path for all character routes

`/characters` Route:
Create a GET route in the `charactersRoutes.js` file that:

- [ ] Returns an array of **Rick and Morty** characters.
- [ ] If the `catch` block is triggered, returns a `500` status and a JSON object with a `message` key assigned to a string that reads, `"Server error. Please try again later."`

`/characters/:id` Route:
Create a GET route in the `charactersRoutes.js` file that:

- [ ] Returns a single **Rick and Morty** character object based on an ID parameter.
- [ ] If the `catch` block is triggered, it returns the error `status` and a JSON object with a `message` key assigned to the error `statusText`. Use [Axios Response Schema documentation](https://axios-http.com/docs/res_schema) as needed.

`/characters/status/:status` Route:
Create a GET route in the `charactersRoutes.js` file that:

- [ ] Returns an array of **Rick and Morty** characters who are either alive or dead based on a `status` parameter.
  - [ ] The `status` parameter should be case insensitive.
  - [ ] The array of characters should be an array of name strings, sorted by first name in alphabetical order.
- [ ] If the `catch` block is triggered, it returns the error `status` and a JSON object with a `message` key assigned to the error message contained in the `axios` error response data. Use [Axios Response Schema documentation](https://axios-http.com/docs/res_schema) as needed.

Commit to Github

- [ ] Commit your work to Github and push to your forked repository w/ a commit message that reads, "Part II - API GET Routes: Return Rick and Morty Data".

### Part III - Advanced Routes: Return Combined Data

`/characters/location/:location` Route:
Create a GET route in the `charactersRoutes.js` file that:

- [ ] Returns an array of **Rick and Morty** character names in alphabetical order who are residents of the first returned location. If multiple locations match the parameter, only return the characters from the first location in the returned array.
- [ ] If the `catch` block is triggered, it returns the error `status` and a JSON object with a `message` key assigned to the error `statusText`. Use [Axios Response Schema documentation](https://axios-http.com/docs/res_schema) as needed.

Commit to Github

- [ ] Commit your work to Github and push to your forked repository w/ a commit message that reads, "Part III - Advanced Routes: Return Combined Data".

### Part IV - Error Handling Middleware

- [ ] Create error handling middleware in the `errorHandler.js` file and implement it in the `app.js` file that meets the following requirements:
  - [ ] Logs the error message to the console.
  - [ ] Returns the error `status` and a JSON object with a `message` key assigned to the error `statusText`. Use [Axios Response Schema documentation](https://axios-http.com/docs/res_schema) as needed.
  - [ ] In the `errorHandler.js` file, create a `notFound` middleware that returns a `404` status and a JSON object with a `message` key assigned to a string that reads, `"Resource not found."`
- [ ] Refactor the `characters/location/:location` controllers to trigger error handling middleware in their `catch` blocks.

### Part V - Set up MongoDB and connect to your application

- [ ] Set up a MongoDB database
- [ ] Connect it to your application.
- [ ] Save all sensitive passwords and keys to a `.env` file.
- [ ] Put the `.env` file in your `.gitignore` file.

### Part VI - Authentication

- [ ] Create Authentication using JWT
- [ ] Create a login route that returns a JWT token
- [ ] Create a middleware that checks for the JWT token and verifies it
