# Server endpoints

**NOTE:** For all endpoints below, the base URL is: `https://anywhere-fitness-171.herokuapp.com/`

| Method | Endpoint            | Description                                                                                                          |
| ------ | ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/users/register | Creates a `user` using the information sent inside the `body` of the request. The structure of the object should be: |

`{ "name": "Richard Rodriguez", "username": "rmjuarez1234", "password": "testing123", "email": "email@gmail.com", "role" : "client" }` |
| POST | /api/login | Use the credentials sent inside the `body` to authenticate the user. On successful login, create a new JWT with the user id as the subject and send it back to the client. If login fails, respond with the correct status code and the message: 'You shall not pass!' |
| GET | /api/users | If the user is logged in, respond with an array of all the users contained in the database. If the user is not logged in respond with the correct status code and the message: 'You shall not pass!'. |
