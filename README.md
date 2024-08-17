# API Documentation

This documentation provides an overview of the available routes and data models for the Cohort Tools API.

Throughout the project, you should use this documentation as a reference and a guide. Refer to it whenever you need information or more details on how to implement the routes or model your database.

<br>

## Routes

In this section, you will find detailed information about the different routes available in the API.
The API offers a variety of routes to work with *service* and *booking* documents. Each route is associated with a specific HTTP verb and URL, allowing you to perform CRUD (Create, Read, Update, and Delete) actions on the data.

<br>

#### Service routes

| HTTP verb | URL                         | Request body | Action                                 |
| --------- | --------------------------  | ------------ | -------------------------------------- |
| GET       | `/api/services`             | (empty)      | Returns all the services in JSON format |
| GET       | `/api/services/:serviceId`  | (empty)      | Returns the specified service by id     |
| POST      | `/api/services`             | JSON         | Creates a new cohort                   |
| PUT       | `/api/services/:serviceId`  | JSON         | Updates the specified cohort by id     |
| DELETE    | `/api/services/:serviceId`  | (empty)      | Deletes the specified cohort by id     |


<br>



#### Bookings routes

| HTTP verb | URL                                 | Request body | Action                                               |
| --------- | ----------------------------------- | ------------ | ---------------------------------------------------- |
| GET       | `/api/bookings`                     | (empty)      | Returns all the bookings in JSON format              |
| POST      | `/api/bookings`                     | JSON         | Creates a new booking                                |
| GET       | `/api/bookings/:bookingId`          | (empty)      | Returns the specified booking by id                  |
| PUT       | `/api/bookings/:bookingId`          | JSON         | Updates the specified booking by id                  |
| DEL       | `/api/bookings/:bookingId`          | (empty)      | Deletes the specified booking by id                  |
| GET       | `/api/bookings/services/:serviceId` | (empty)      | Returns the bookings asociated to a specific service |
| GET       | `/api/bookings/users/:userId`       | (empty)      | Returns the bookings asociated to a specific user    |


<br>

#### Service Model

<br>

#### Booking Model
| `measurements` | *`Object`*       | height, top size, bottom size and shoe size from the client. Required|
| `deadline`     | *`Date`*         | Date when the service is needed. Required            |
| `comment`      | *`String`*       | Estra info |
| `stylist`      | *`ObjectId`*     | Stylist who offers the service |
| `client`       | *`ObjectId`*     | Client who books the service|
| `service`      | *`ObjectId`*     | Service booked |
| `pack`         | *`String`*       | Choosen pack                     |


<br>

#### SService Model


<br>

