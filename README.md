# Backend Assessment

## Introduction

Welcome to the Node and Express Backend Assessment! In this challenge, you will be using the [x API]() to build API enpoints and to combine data from the API.

You will be creating routes and controllers in the appropriate folder/files.

<details>
<summary>What is a route?</summary>
A route in a Node Express app is a JavaScript object that defines the behavior of the server when an HTTP request is made to an endpoint.

Routes are defined using Express’s Router class and contain a path (URL) and HTTP method (GET, POST, PUT, etc.) as well as any additional middleware or callback functions that should be executed when the route is accessed.

Routes are used to create the application’s API and handle the logic for the application.

</details>

<details>
<summary>What is a controller?</summary>
A controller in a Node Express app is a JavaScript object that defines the behavior of the server when a request is made to an endpoint. Controllers are usually defined using Express’s Router class and contain a path (URL) and HTTP method (GET, POST, PUT, etc.) as well as any additional middleware or callback functions that should be executed when the controller is accessed. Controllers are used to process requests, handle business logic, and interact with models in order to return the appropriate response.
</details>

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
- Be sure to import and register routes in the `app.js` file as you create them.

### Setup Instructions

- [ ] Fork and clone this repository.
- [ ] Run `npm install` to download dependencies.
- [ ] Run `npm run server` to start the server w/ `nodemon`.
- [ ] Set up the `app.js` file:

  - [ ] Require the `express` module
  - [ ] Set up the `app` object
  - [ ] Set the `port` to `3000`
  - [ ] Set up the `app` object to use `express.json()` middleware
  - [ ] Set up the server to listen on port `3000`.

### Part I - Basic GET Routes

`/route` Route

- [ ] Create a GET `/route` route in the `definitionRoutes.js` file that returns a message defining what a route is

`/controller` Route

- [ ] Create a GET `/controller` route in the `definitionRoutes.js` file that returns a message defining what a controller is

`/root` Route

- [ ] Create a GET `/root` route in the `definitionRoutes.js` that returns the name of the root file that will execute when this application is started (i.e., the file responsible for setting up the server, loading the models and controllers, and defining any middleware or routes that the application will use).

### Part II - API GET Routes: Return Rick and Morty Data

`/characters` Route:
Create a GET route in the `charactersRoutes.js` file that:

- [ ] Returns all **Rick and Morty** characters.

`/characters/:id` Route:
Create a GET route in the `charactersRoutes.js` file that:

- [ ] Returns a single **Rick and Morty** character object based on an ID parameter.

`/characters/alive` Route:
Create a GET route in the `charactersRoutes.js` file that:

- [ ] Returns an array of **Rick and Morty** characters who are alive.

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
