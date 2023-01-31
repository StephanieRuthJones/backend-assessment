# Backend Assessment

## Introduction

Welcome to the Backend Assessment!

This assessment requires you to build a Node.js Express MongoDB app using Axios. In this challenge, you will use the [Rick and Morty API](https://rickandmortyapi.com/documentation/) to build API endpoints and to combine data from the API. During this assessment, you will need to create simple and complex GET routes, error-handling middleware, a MongoDB database, as well as a login system with Authentication using JWT.

To complete this assessment, complete every task in Parts I through V of the challenge outlined below.

_Requirements to Pass_

- All routes must return the correct status code and data.
- All routes must return the correct status code and data.
- Routes must be created in the appropriate files within the `routes` folder.
- Controllers must be created in the appropriate files within the `controllers` folder.
- `async/await` and `try/catch` blocks must be used to make requests and handle errors rather than promise chaining.
- Errors must be handled and returned to the user.
- The MongoDB database must be set up correctly.
- The login system must be secured using JWT.
- Submit your github repo link with the `.env` file included.
- Your code must be clean and readable. It should follow the DRY principle.

_Important Note(s):_

- Use [axios](https://www.npmjs.com/package/axios) to make API requests.
- Save all sensitive passwords and keys to an `.env` file.
- Upon completing this challenge, submit your github repo link and the `.env` file.

_Tips:_

- Use [Postman](https://www.postman.com/downloads/) to test your API endpoints. Read [Postmant documentation] (https://learning.postman.com/docs/getting-started/introduction/) as needed.
- Use [axios documentation](https://www.npmjs.com/package/axios) as needed.
- Use [Express documentation](https://expressjs.com/en/4x/api.html) as needed.
- Use [Rick and Morty API](https://rickandmortyapi.com/documentation/) documentation as needed.
- Use [MongoDB](https://www.mongodb.com/docs/) documentation as needed.
- Download Compass to view your MongoDB database. [Download Compass](https://www.mongodb.com/try/download/compass)
- Use [Mongoose](https://mongoosejs.com/docs/guide.html) documentation as needed.
- Use [JWT](https://jwt.io/introduction) documentation as needed.
- Use [bcrypt](https://www.npmjs.com/package/bcrypt) documentation as needed.
- Use [dotenv](https://www.npmjs.com/package/dotenv) documentation as needed.
- Be sure to import and register routes in the `app.js` file as you create them.

### Part I - Setup Instructions

- [ ] Fork and clone this repository.
- [ ] Run `npm install` to download dependencies.
- [ ] Run `npm run server` to start the server w/ `nodemon`.
- [ ] Create a `.gitignore` file and add `node_modules` and `.env` to it.
- [ ] Create a `.env` file and add `PORT=3000` to it.
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

Commit to Github

- [ ] Commit your work to Github and push to your forked repository w/ a commit message that reads, `"Part I - Setup"`.

### Part II - API GET Routes: Return Rick and Morty Data

All routes in this section should be created in the `characterRoutes.js` file.

- [ ] Use `/characters` as the base path for all character routes

`/characters` Route:
Create a GET route in the `characterRoutes.js` file that:

- [ ] Returns an array of **Rick and Morty** characters.
- [ ] If the `catch` block is triggered, returns a `500` status and a JSON object with a `message` key assigned to a string that reads, `"Server error. Please try again later."`

`/characters/:id` Route:
Create a GET route in the `characterRoutes.js` file that:

- [ ] Returns a single **Rick and Morty** character object based on an ID parameter.
- [ ] If the `catch` block is triggered, it returns the error `status` and a JSON object with a `message` key assigned to the error `statusText`. Use [Axios Response Schema documentation](https://axios-http.com/docs/res_schema) as needed.

`/characters/status/:status` Route:
Create a GET route in the `characterRoutes.js` file that:

- [ ] Returns an array of **Rick and Morty** characters who are either alive or dead based on a `status` parameter.
  - [ ] The array of characters should be an array of name strings, sorted by first name in alphabetical order.
  - [ ] If the `status` parameter is not `alive` or `dead`, it returns a `404` status and a JSON object with a `message` key assigned to a string that reads, `"The status must be alive or dead."`
- [ ] If the `catch` block is triggered, it returns the error `status` and a JSON object with a `message` key assigned to the error message contained in the `axios` error response data. Use [Axios Response Schema documentation](https://axios-http.com/docs/res_schema) as needed.

Commit to Github

- [ ] Commit your work to Github and push to your forked repository w/ a commit message that reads, `"Part II - API GET Routes: Return Rick and Morty Data"`.

### Part III - Advanced Routes: Return Combined Data

`/characters/location/:location` Route:
Create a GET route in the `characterRoutes.js` file that:

- [ ] Returns an array of **Rick and Morty** character names in alphabetical order who are residents of the first returned location. If multiple locations match the parameter, only return the characters from the first location in the returned array.
- [ ] If the `catch` block is triggered, it returns the error `status` and a JSON object with a `message` key assigned to the error `statusText`. Use [Axios Response Schema documentation](https://axios-http.com/docs/res_schema) as needed.

Commit to Github

- [ ] Commit your work to Github and push to your forked repository w/ a commit message that reads, `"Part III - Advanced Routes: Return Combined Data"`.

### Part IV - Set up MongoDB and connect to your application

- [ ] Set up a MongoDB database
- [ ] Connect it to your application.
- [ ] Add MONGO_URI to your `.env` file
- [ ] Connect to your database
- [ ] Use the `dotenv` package to access your `.env` file.

Commit to Github

- [ ] Commit your work to Github and push to your forked repository w/ a commit message that reads, `"Part V - Set up MongoDB"`.

### Part V - Authentication

Create Authentication using JWT:

- [ ] Create a `register` route where users can sign up
  - [ ] All passwords should be hashed using `bcrypt` and salt rounds
  - [ ] Make sure that the user's email is unique
  - [ ] If the user's email is not unique, return a `400` status and a JSON object with a `message` key assigned to a string that reads, `"Email already exists."`
- [ ] Create a `login` route where users can sign in
- [ ] Create a `login` route that compares the hashed password to the password in the user request and returns a `JWT token`
- [ ] Create a `logout` route that invalidates the `JWT token`
- [ ] Create the `JWT token` using `jsonwebtoken`
- [ ] Create a middleware that checks for the `JWT token` and verifies it
- [ ] Create a `/me` route that returns the user's information based on the `JWT token`

Commit to Github

- [ ] Commit your work to Github and push to your forked repository w/ a commit message that reads, `"Part VI - Authentication"`.

### Part VI - Collection of Favorite Characters

**Note:** All functionality in this section should only be accessed by authenticated users.

- [ ] Implement `asyncHandler` to avoid `try/catch` blocks and to trigger error handling middleware
- [ ] Create a new collection in your database called `favorites`
- [ ] Create a `model` for your `favorites` collection in the `db.js` file with a schema that includes the following:
  - [ ] `name` - the character's name
  - [ ] `image` - the character's image URL
- [ ] Create a route that allows a user to add a character's `name` and `image` url as well as a `description` of why they added the character to their `favorites` collection
- [ ] Create a route that allows a user to `get` all of their `favorites`
- [ ] Create a route that allows a user to `remove` a character from their `favorites`
- [ ] Create a route that allows a user to `edit` their `description` of why they added the character to their list of `favorites`

Commit to Github

- [ ] Commit your work to Github and push to your repository w/ a commit message that reads, `"Part VII - Collection of Favorite Characters"`

### Part VII - Error Handling Middleware

Create an `errorHandler` function in the `errorMiddleware.js` file that:

- [ ] Responds with a `statusCode` and error `message`
- [ ] Returns the `stack` trace only if the environment is in `development`
- [ ] Implement the `errorHandler` function in your `app.js` file
