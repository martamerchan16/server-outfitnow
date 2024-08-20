# API Documentation

This documentation provides an overview of the available routes and data models for the Cohort Tools API.

Throughout the project, you should use this documentation as a reference and a guide. Refer to it whenever you need information or more details on how to implement the routes or model your database.

<br>

## Routes

In this section, you will find detailed information about the different routes available in the API.
The API offers a variety of routes to work with *service* and *booking* documents. Each route is associated with a specific HTTP verb and URL, allowing you to perform CRUD (Create, Read, Update, and Delete) actions on the data.

<br>

#### Services routes

| HTTP verb | URL                         | Action                                  |
| --------- | --------------------------  | --------------------------------------  |
| GET       | `/api/services`             | Returns all the services in JSON format |
| GET       | `/api/services/:serviceId`  | Returns the specified service by id     |
| POST      | `/api/services`             | Creates a new cohort                    |
| PUT       | `/api/services/:serviceId`  | Updates the specified cohort by id      |
| DELETE    | `/api/services/:serviceId`  | Deletes the specified cohort by id      |
| GET       | `/api/services/search`      | Returns all the services filter by title|



<br>


#### Bookings routes

| HTTP verb | URL                                 | Action                                               |
| --------- | ----------------------------------- | ---------------------------------------------------- |
| GET       | `/api/bookings`                     | Returns all the bookings in JSON format              |
| POST      | `/api/bookings`                     | Creates a new booking                                |
| GET       | `/api/bookings/:bookingId`          | Returns the specified booking by id                  |
| PUT       | `/api/bookings/:bookingId`          | Updates the specified booking by id                  |
| DEL       | `/api/bookings/:bookingId`          | Deletes the specified booking by id                  |
| GET       | `/api/bookings/services/:serviceId` | Returns the bookings asociated to a specific service |
| GET       | `/api/bookings/users/:userId`       | Returns the bookings asociated to a specific user    |


<br>

#### Users routes

| HTTP verb | URL                              | Action                                                        |
| --------- | -------------------------------- | ------------------------------------------------------------- |
| GET       | `/api/users`                     | Returns all the users in JSON format                          |
| GET       | `/api/users/role/:role`          | Returns all the users by role in JSON format                  |
| GET       | `/api/users/:userId`             | Returns the specified user by id                              |
| PUT       | `/api/users/:userId`             | Updates the specified user by id                              |
| DEL       | `/api/users/:userId`             | Deletes the specified user by id                              |
| GET       | `/api/users/services/:serviceId` | Returns the stylists(users) asociated to a specific service |

<br>

#### Auth routes

| HTTP verb | URL                    | Action                                               |
| --------- | -----------------------| ---------------------------------------------------- |
| POST      | `/api/auth/signup`          | Returns all the bookings in JSON format         |
| POST      | `/api/auth/login`           | Creates a new booking                           |
| GET       | `/api/auth/verify`          | Returns the specified booking by id             |

<br>

#### User Model jabkcdb,sdhbv,jzdbsh,vHJSDG;vjUGSFgvk

| Field          | Data Type            | Description                    |
|----------------|----------------------|--------------------------------|
| `title`        | *`String`*           | Name of services. Required.    |
| `images`       | *`Array`* of Strings | Array of URL images. Required. |
| `packs`        | *`String`*           | Type of pack.                  |

<br>

#### Service Model

| Field          | Data Type            | Description                    |
|----------------|----------------------|--------------------------------|
| `title`        | *`String`*           | Name of services. Required.    |
| `images`       | *`Array`* of Strings | Array of URL images. Required. |
| `packs`        | *`String`*           | Type of pack.                  |

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



