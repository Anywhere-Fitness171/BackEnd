# Front End

This part of the documentation is for reference to frontend developers. Below you will find the endpoints necessary to communicate with the backend. App has already been deployed, so it can be accessed remotely. Below you will find:

- [API Endpoints (Users)](https://github.com/Anywhere-Fitness171/BackEnd/blob/Richard-Rodriguez/documentation.md#api-endpoints-users)
  - Request body structure
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
	username: "rmjuarez1234",
	password: "test1234",
	email: "rmjuarez12@gmail.com",
	role : "admin"
}
```

- [POST] `/users/login` - For the login, you simply need the 2 fields below.

```js
{
	username: "rmjuarez1234",
	password: "Xx12Uchiha"
}
```

- [PUT] `/users/:id` - This is to update the user data. Make sure to use the structure below. All fields are required, except for the password. If there is no password, we will just use the one that the user already created

```js
{
	name: "Richard Rodriguez",
	username: "rmjuarez1234",
	password: "test5678", // This field is not required. If empty, we will use old password
	email: "rmjuarez12@gmail.com",
	role : "admin"
}
```

## API Endpoints (Classes)

WIP

### Request body structure

WIP
