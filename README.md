# Backend Assessment

## Introduction

Welcome to the Node and Express Backend Assessment!

In this challenge, you will be using the [Rick and Morty API](https://rickandmortyapi.com/documentation/) to build API endpoints and to combine data from the API. You will be creating routes and controllers in the appropriate folder/files as well as middleware to handle errors.

To complete this assessment, follow the setup instructions, then complete every task in Parts I through V of the challenge outlined below.

_Requirements to Pass_

- All routes must return the correct status code and data.
- Your code must be clean and readable. It should follow the DRY principle.
- Errors must be handled and returned to the user.
- `try/catch` blocks must be used to make requests and handle errors rather than promise chaining.

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

### Setup Instructions

- [ ] Fork and clone this repository.
- [ ] Run `npm install` to download dependencies.
- [ ] Run `npm run server` to start the server w/ `nodemon`.
- [ ] Set up the `app.js` file:

  - [ ] Require the `express` module
  - [ ] Set up the `app` object
  - [ ] Set the `port` to `3000`
  - [ ] Set up the `app` object to use `express.json()` middleware to parse JSON bodies
  - [ ] Use `/` as the base path for all definition routes
  - [ ] Use `/api` as the base path for all character routes
  - [ ] Set up the server to listen on port `3000`.

### Part I - Basic GET Routes

`/route` Route

- [ ] Create a GET `/route` route in the `definitionRoutes.js` file that responds with a `200 status` and returns a JSON object with a `message` key assigned to a string defining what a `route` is in the context of an API

`/controller` Route

- [ ] Create a GET `/controller` route in the `definitionRoutes.js` file that responds with a `200 status` and returns a JSON object with a `message` key assigned to a string defining what a `controller` is in the context of an API

`/root` Route

- [ ] Create a GET `/root` route in the `definitionRoutes.js` that responds with a `200 status` and returns a JSON object with a `message` key assigned to a string that is the name of the root file that will execute when this application is started (i.e., the file responsible for setting up the server, loading the models and controllers, and defining any middleware or routes that the application will use).

### Part II - API GET Routes: Return Rick and Morty Data

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

### Part III - Advanced Routes: Return Combined Data

`characters/:location` Route:
Create a GET route in the `charactersRoutes.js` file that:

- [ ] Returns an array of **Rick and Morty** characters who are residents of the specified location.
  - [ ] The `location` parameter should be case insensitive.
  - [ ] The array of characters should be an array of name strings, sorted by first name in alphabetical order.
- [ ] Returns an error message of `"Location not found"` if the location is not found.
- [ ] Returns an error message of `"No characters found"` if no characters are found for the specified location.

`characters/:episode` Route:
Create a GET route in the `charactersRoutes.js` file that:

- [ ] Returns an array of **Rick and Morty** characters who appear in the specified episode.
  - [ ] The `episode` parameter should be case insensitive.
  - [ ] The array of characters should be an array of name strings, sorted by first name in alphabetical order.
- [ ] Returns an error message of `"Episode not found"` if the episode is not found.
- [ ] Returns an error message of `"No characters found"` if no characters are found for the specified episode.
