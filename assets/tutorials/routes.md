### `users`
- ```GET /api/users/:user_id``` - Fetches a user's information.
- ```POST /api/users``` - Sign up.
- ```PATCH /api/users/:user_id``` - Updates a user's information.
- ```POST /api/users/:id/image``` - Saves the profile image.
- ```POST /api/users/:id/files``` - Saves files.


### `session`
- ```POST /api/session``` - Login.
- ```DELETE /api/session``` - Logout.


### `appointments`
- ```GET /api/appointments``` - Fetches the appointments index.
- ```GET /api/appointments/:id``` - Fetches an appointment's information.
- ```GET /api/appointments/users/:user_id``` - Fetches all appointments by user id.
- ```POST /api/appointments/user/:user_id``` - Creates a new appointment by user id.
- ```PATCH /api/appointments/:id``` - Updates an appointment.
- ```DELETE /api/appointments/:id``` - Removes an appointment.


### `records`
- ```GET /api/records``` - Fetches the records index.
- ```GET /api/records/:id``` - Fetches a record's information.
- ```GET /api/records/users/:user_id``` - Fetches all records by user id.
- ```POST /api/records/user/:user_id``` - Creates a new record by user id.
- ```PATCH /api/records/:id/update``` - Updates a record.
- ```DELETE /api/records/:id/delete``` - Removes a record.


### `doctors`
- ```GET /api/doctors``` - Fetches the doctors index.
- ```GET /api/doctors/:id``` - Fetches a doctor's information.
- ```POST /api/doctors``` - Creates a new doctors.
- ```PATCH /api/doctors/:id``` - Updates a doctors.
- ```DELETE /api/doctors/:id``` - Removes a doctors.
- ```POST /api/doctors/:id/image``` - Saves the profile image.
- ```POST /api/doctors/:id/files``` - Saves files.

