# Back End

This documentation is for backend developers. Below I have detailed what type of functions I have added on the model files. If you want to make any changes, please be sure to run all tests once you are done to ensure that the original working app is fully functional. Below you will find:

- [App Structure](#)

## Main App Structure

Below you will find the current structure of the application. The model/router files are in their own directory, according to the data they gather.

- `api/` - This directory holds the main api files. This includes the routers, models(helpers), and server configuration
  - `classes/`
    - `classes-model.js`
    - `classes-router.js`
  - `config/`
    - `secrets.js` - This files just holds the secret phrase for the jsonwebtoken signature
  - `middleware/`
    - `checkDuplicateRecords.js`
    - `checkIfExists.js`
    - `getAttendees.js`
    - `restrictAccess.js`
    - `validateClassBody.js`
    - `validateUserBody.js`
  - `users/`
    - `users-model.js`
    - `users-router.js`
  - `server.js`
- `data/` - This directory holds the configuration for the database(using knex). It also holds knex migrations for database creation, as well as seeds for dummy data
  - `migrations/`
    - `20210224224553_db-schema.js`
  - `seeds/`
    - `00-cleanup.js`
    - `01-users.js`
    - `02-classes.js`
    - `03-instructors_classes.js`
    - `04-attendees.js`
  - `db-config.js` - Main configuration file for the database. Specifies what environment to use and configures knex
- `index.js` - Initializes the server. The server configuration gets imported from `api/server.js`
- `knexfile.js`
- `package-lock.json`
- `package.json`
- `README.md` - This readme file just itemizes the tasks needed to complete this app

## Database Structure

Below I am specifying the structure of the current database, as per the migrations file. I have listed the table, as well as rows.

- `users`
  - `id`
  - `name`
  - `email`
  - `password` - The password is hashed, not plain text
- `classes`
- `attendees`
- `instructors_classes`
