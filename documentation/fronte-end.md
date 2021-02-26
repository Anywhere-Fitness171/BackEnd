# Front End

This part of the documentation is for reference to frontend developers. Below you will find the endpoints necessary to communicate with the backend. App has already been deployed, so it can be accessed remotely. Below you will find:

- [API Endpoints (Users)](https://github.com/Anywhere-Fitness171/BackEnd/blob/Richard-Rodriguez/documentation.md#api-endpoints-users)
  - [Request body structure](https://github.com/Anywhere-Fitness171/BackEnd/blob/Richard-Rodriguez/documentation.md#request-body-structure)
  - [Notes](https://github.com/Anywhere-Fitness171/BackEnd/blob/Richard-Rodriguez/documentation.md#notes)
- [API Endpoints (Classes)](https://github.com/Anywhere-Fitness171/BackEnd/blob/Richard-Rodriguez/documentation.md#api-endpoints-classes)
  - Request body structure

## API Endpoints (Users)

- **NOTE:** For all endpoints below, the base URL is: `https://anywhere-fitness-171.herokuapp.com/api`

| Method | Endpoint        | Description                                                                                                                                                                                                                                                                   |
| ------ | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /users/register | Creates a `user` using the information sent inside the `body` of the request. **NOTE:** Ensure to use only `client` or `instructor` on the role property.                                                                                                                     |
| POST   | /users/login    | Use the credentials sent inside the `body` to authenticate the user. On success, you will receive a response with a welcome message, user ID and, a token.                                                                                                                    |
| GET    | /users/:id      | **_You MUST send with an authorization header with the token!_** This endpoint is to get the data of a user. This is meant for frontend to be able to gather the data of the `logged in` user.                                                                                |
| PUT    | /users/:id      | **_You MUST send with an authorization header with the token!_** The main purpose for this endpoint is for users to be able to update any data from their profile. This could be name, email, password, etc. The `id` parameter **_SHOULD_** be the id of the logged in user. |
| DELETE | /users/:id      | **_You MUST send with an authorization header with the token!_** This endpoint is to delete a specific user. The `id` parameter **_SHOULD_** be the id of the logged in user.                                                                                                 |

### Request body structure

This is the expected object for the endpoints above(this is mostly for the login/registration/update)

- [POST] `/users/register` - For the registration, use the sample object below as reference on what the endpoint is expecting to receive. Currently, all the fields below are **_REQUIRED_**

```js
{
	name: "Richard Rodriguez",
	username: "rmjuarez1234", // Must be unique. Will throw an error if it already exists
	password: "test1234", // When creating, this must NOT be empty
	email: "email@gmail.com", // Must be unique. Will throw an error if it already exists
	role : "client" // For now, it MUST be either "client" or "instructor"
}
```

- [POST] `/users/login` - For the login, you simply need the 2 fields below.

```js
{
	username: "rmjuarez1234",
	password: "test1234"
}
```

- [PUT] `/users/:id` - This is to update the user data. Make sure to use the structure below. All fields are required, except for the password. If there is no password, we will just use the one that the user already created

```js
{
	name: "Richard Rodriguez",
	username: "rmjuarez1234", // Must be unique. Will throw an error if it already exists
	password: "test5678", // This field is not required. If empty, we will use old password
	email: "email2@gmail.com", // Must be unique. Will throw an error if it already exists
	role : "instructor" // For now, it MUST be either "client" or "instructor"
}
```

### Notes

- I have setup measures in the backend to ensure we have no duplicates. Please check the responses you get from the API, as I have specified messages so you can debug if needed(i.e. if there is no username on login you will get a responser: "Please provide a username and password!").
- The token provided by the backend has a lifetime of 1hr. After 1hr, the user will need to login again to get a new token
- Please make sure to do proper validation to forms, to ensure the data we are receiving is the correct one and not the wrong one(i.e. for emails, ensure is a valid email).

## API Endpoints (Classes)

- **NOTE:** For all endpoints below, the base URL is: `https://anywhere-fitness-171.herokuapp.com/api`

| Method | Endpoint               | Description                                                                                                                                                                                      |
| ------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| POST   | /classes               | Creates a new `class` using the information sent inside the `body` of the request. **NOTE:** Ensure to use only `instructors` are able to use this endpoint.                                     |
| GET    | /classes               | This will return an array of ALL available `classes`. The results will also include the instructor's name in the response                                                                        |
| GET    | /classes/:id           | This will return an specific class from all the `classes`. If the ID supplied brings no results, it will return a 404 error.                                                                     |
| GET    | /classes/:id/attendees | This will return an array of ALL attendees from a specific class(which is basically users with role `client` that have registered).                                                              |
| PUT    | /classes/:id           | **_You MUST send with an authorization header with the token!_** This endpoint is to edit a specific class. The user MUST be an `instructor`, and must be logged in before using this endpoint   |
| DELETE | /classes/:id           | **_You MUST send with an authorization header with the token!_** This endpoint is to delete a specific class. The user MUST be an `instructor`, and must be logged in before using this endpoint |

### Request body structure

WIP
