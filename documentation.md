# Front End

## This part of the documentation is for reference to frontend developers

### API Endpoints

- **NOTE:** For all endpoints below, the base URL is: `https://anywhere-fitness-171.herokuapp.com/api`

| Method | Endpoint        | Description                                                                                                                                                                                                |
| ------ | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /users/register | Creates a `user` using the information sent inside the `body` of the request. **NOTE:** Ensure to use only `client` or `instructor` on the role property.                                                  |
| POST   | /users/login    | Use the credentials sent inside the `body` to authenticate the user. On success, you will receive a response with a welcome message, user ID and, a token.                                                 |
| GET    | /users/:id      | **You MUST send with an authorization header with the token!** This endpoint is to get the data of a user. This is meant for frontend to be able to gather the data of the `logged in` user.               |
| PUT    | /users/:id      | **You MUST send with an authorization header with the token!** The main purpose for this endpoint is for users to be able to update any data from their profile. This could be name, email, password, etc. |
| DELETE | /users/:id      | **You MUST send with an authorization header with the token!** This endpoint is to delete a specific user                                                                                                  |
