# Objective/Pitch

These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing.

While you could use several mobile apps to accomplish this, **AnywhereFitness** is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held.

Instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more. Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app.

- [Full Project Information](https://www.notion.so/Anywhere-Fitness-9ef83f1d877f44179b45cd26d14f1784).
- [Product Vision Document](https://docs.google.com/document/d/1y2I_qMRxRZgtcGxaS3he8SRFDaFmbiMuFIDOV_ZZkGY/edit)

# MVP

- [x] Setup server using Express
- [x] Create Data Model for users and classes
- [x] Create endpoints for `clients` and `instructors` to log in and register
- [x] Create CRUD endpoints for `classes`
- [ ] Setup endpoint to register users to a certain class
- [x] Setup Authorization to be used with JSON Web Tokens
- [x] Create proper middleware for validation and authentication

## Detailed tasks

### Create Data Model for users and classes

- [x] Design a Data Model for the data that will be stored in database
  - Table for `users`
  - Table for `classes`

### Create endpoints for `clients` and `instructors` to log in and register

- [x] Create necessary endpoints for `clients` and `instructors`
  - Login `POST` endpoint
  - Register `POST` endpoint
  - Get a specific user `GET` endpoint
  - User edit `PUT` endpoint
  - User Terminate `DELETE` endpoint
- [x] Ensure that the password is NOT plain text, but a secure hash
- [x] Follow the created Data Model for the user data. Main data includes:
  - `Name`
  - `Username`
  - `Email`
  - `Password`
  - `Role`

### Create CRUD endpoints for `classes`

- [x] Create necessary endpoints for `classes`
  - Create a new class `POST` endpoint
  - Get all classes `GET` endpoint
  - Get specific class `GET` endpoint
  - Edit a specific class `PUT` endpoint
  - Delete a class `DELETE` endpoint
- [x] Follow the created Data Model for the classes data. Main data includes
  - `Name`
  - `Type`
  - `Start time`
  - `Duration`
  - `Intensity level`
  - `Location`
  - `Current number of registered attendees`
  - `Max class size`

### Setup endpoint to register users to a certain class

- [x] Setup an endpoint that can retrieve ALL attendees from a `class`
- [x] Setup an endpoint that will get the total number of attendess from a `class`
- [ ] Setup an endpoint that will register a user to a specific class
- [ ] Setup a way for users to opt out of registration

### Setup Authorization to be used with JSON Web Tokens

- [x] Setup JSON Web Tokens
- [x] Create a function for the creation of the signature to generate token
- [x] Create a function to validate the token and compare the recieved client token with the backend signature token

### Create proper middleware for validation and authentication

- [x] Setup a middleware to authenticate that the data that comes from frontend is valid
  - Ensure that for users, `username`, `email`, and `password` are all required
  - Ensure that for classes, all fields are required.
- [x] Setup a middleware that ensures we get NO duplicate users
  - Check any `email` duplicates
  - Check any `username` duplicates
  - Check any `id` duplicates
- [x] Setup a middleware that ensures we get NO duplicate class ID
  - Check any `id` duplicates

# Stretch

### Users

- [ ] Add a way to upload images for a profile image for users
- [ ] Create a way to allow users to keep track of their activities

### Classes

- [ ] Allow a review system where users can leave a rating and review for a specific class
