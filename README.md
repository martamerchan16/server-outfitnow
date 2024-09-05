# API Documentation

Overview of the available routes and data models for the Outfit Now API.
Throughout the project, we have used this documentation as a reference and guide.

<br>

## Routes

These are the different routes available in our API. 
The API offers a variety of routes to work with service, users, and booking documents. Each route is associated with a specific HTTP verb and URL, allowing us to perform CRUD actions on the data.
<br>

#### Services routes

| HTTP verb | URL                         | Action                                  |
| --------- | --------------------------  | --------------------------------------  |
| GET       | `/api/services`             | Returns all the services in JSON format |
| GET       | `/api/services/:serviceId`  | Returns the specified service by id     |
| GET       | `/api/services/search`      | Returns all the services filter by title|
| POST      | `/api/services`             | Creates a new service                    |
| PUT       | `/api/services/:serviceId`  | Updates the specified services by id      |
| DELETE    | `/api/services/:serviceId`  | Deletes the specified services by id      |


<br>


#### Bookings routes

| HTTP verb | URL                                  | Action                                               |
| --------- | -----------------------------------  | ---------------------------------------------------- |
| GET       | `/api/bookings`                      | Returns all the bookings in JSON format              |
| GET       | `/api/bookings/:bookingId`           | Returns the specified booking by id                  |
| GET       | `/api/bookings/services/:serviceId`  | Returns the bookings asociated to a specific service |
| GET       | `/api/bookings/users/:userId`        | Returns the bookings asociated to a specific user    |
| GET       | `/api/bookings/services/bookingsData`| Returns the number of bookings asociated to a service|
| POST      | `/api/bookings`                      | Creates a new booking                                |
| PUT       | `/api/bookings/:bookingId`           | Updates the specified booking by id                  |
| DEL       | `/api/bookings/:bookingId`           | Deletes the specified booking by id                  |


<br>

#### Users routes

| HTTP verb | URL                              | Action                                                        |
| --------- | -------------------------------- | ------------------------------------------------------------- |
| GET       | `/api/users`                     | Returns all the users in JSON format                          |
| GET       | `/api/users/role/:role`          | Returns all the users by role in JSON format                  |
| GET       | `/api/users/:userId`             | Returns the specified user by id                              |
| GET       | `/api/users/stylist/:userId`     | Returns the specified stylist data                            |
| GET       | `/api/users/services/:serviceId` | Returns the stylists(users) asociated to a specific service |
| PUT       | `/api/users/:userId`             | Updates the specified user by id                              |
| DEL       | `/api/users/:userId`             | Deletes the specified user by id                              |

<br>

#### Auth routes

| HTTP verb | URL                    | Action                                               |
| --------- | -----------------------| ---------------------------------------------------- |
| POST      | `/api/auth/signup`     | To signup                            |
| POST      | `/api/auth/login`      | To login                             |
| GET       | `/api/auth/verify`     | Verifyies the user data              |

<br>

## Models
Check out the different models we created for Outfit Now.
<br>

#### User Model

| Field          | Data Type            | Description
|----------------|----------------------|---------------------------------- |
| `email`        | *`String`*           | Email adress                      |
| `password`     | *`String`*           | User's password                   |                              
| `userName`     | *`String`*           | User's name                       |
| `phone`        | *`String`*           | Phone                             |
| `avatar`       | *`String`*           | Avatar image                      |
| `styles`       | *`Array of objects`* | List of favorite styles           |
| `gallery`      | *`Array of strings`* | Previous work images              |
| `aboutMe`      | *`String`*           | Brif description                  |
| `role`         | *`String`*           | User, stylist or admin            |
| `services`     | *`Array of objects`* | Services provided by stylists     |
| `location`     | *`String`*           | User's location                   |




<br>

#### Service Model

| Field          | Data Type            | Description                                               |
|----------------|----------------------|-----------------------------------------------------------|
| `title`        | *`String`*           | Name of the service
| `images`       | *`Array of objects`* | Gallery of the service used in its details page
| `coverImage`   | *`String`*           | Cover image used at the service card
| `packs`        | *`Nested objects`*   | basic, premium, glam. Each one contains the following fields: price, description, outfitsIncluded, homeService, and minimumNotice.


<br>

#### Booking Model
| Field          | Data Type        | Description                                                          |
|----------------|------------------|----------------------------------------------------------------------|
| `measurements` | *`Object`*       | height, top size, bottom size and shoe size from the client. Required|
| `deadline`     | *`Date`*         | Date when the service is needed. Required                            |
| `comment`      | *`String`*       | Extra info                                                           |     
| `stylist`      | *`ObjectId`*     | Stylist who offers the service                                       |
| `client`       | *`ObjectId`*     | Client who books the service                                         |
| `service`      | *`ObjectId`*     | Service booked                                                       |
| `pack`         | *`String`*       | Choosen pack                                                         |



