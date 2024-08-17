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

#### Services routes

<hr>

<br>

## Models

<br>

#### Booking Model

| Field          | Data Type        | Description                                 |
|----------------|------------------|---------------------------------------------|
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

