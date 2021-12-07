## Appointments

### Fetching All Appointments
API fetchAppointments gets all appointments from the database
```javascript
let appointments = await fetchAppointments();
console.log(appointments.data) // => Array[Appointment objects]
```

### Fetching Appointment by id
API fetchAppointment gets a appointment from the database, given the appointment id
```javascript
let id = "jkdkfsjal3421321"
let appointment = await fetchAppointment(id);
console.log(appointment.data) // => appointment object
```


### Fetch User Appointments
API fetchUserAppointments gets the appointments of a user from the database, given the user's id
```javascript
let user_id = "jkdkfsjal3421321"
let appointments = await fetchUserAppointments(user_id);
console.log(appointments.data) // => Array[Appointment objects]
```

### Create Appointments
API createAppointment creates an appointment in the database
```javascript

let appointment = await createAppointment({
    user: "232_userid_jkjs",
    date: new Date(),
    reason: "Toe jammed!"
});
console.log(appointment.data) // => Appointment objects
```

### Update Appointment
API updateAppointment updates an appointment from the database, but returns the previous value
```javascript

let appointment = await updateAppointment({
    user: "232_userid_jkjs", // same user id
    date: new Date('2022-10-12'), //different date
    reason: "Both toes jammed!" // different reason
});
console.log(appointment.data) // => Appointment objects
```


### Delete Appointment
API deleteAppointment deletes an appointment from the database, returns the appointment deleted
```javascript

let id: "kdjfs_appt_id_34123";
let appointment = await deleteAppointment(id);
console.log(appointment.data) // => Appointment objects
```


## Records

### Fetching All Records
API fetchRecords gets all records from the database
```javascript
let records = await fetchRecords();
console.log(records.data) // => Array[Record objects]
```

### Fetching Record by id
API fetchRecord gets a record from the database, given the record id
```javascript
let id = "jkdkfsjal3421321"
let record = await fetchRecord(id);
console.log(record.data) // => record object
```


### Fetch User Records
API fetchUserRecords gets the records of a user from the database, given the user's id
```javascript
let user_id = "jkdkfsjal3421321"
let records = await fetchUserRecords(user_id);
console.log(records.data) // => Array[Record objects]
```

### Create Records
API createRecord creates an record in the database
```javascript

let record = await createRecord({
    user: "232_userid_jkjs",
    date: new Date(),
    reason: "Toe jammed!"
});
console.log(record.data) // => Record objects
```

### Update Record
API updateRecord updates an record from the database, but returns the previous value
```javascript

let record = await updateRecord({
    user: "232_userid_jkjs",
    conditions: ["diabetes"],
    allergies: ["dogs"],
    diabetes: true
});
console.log(record.data) // => Record objects
```


### Delete Record
API deleteRecord deletes an record from the database, returns the record deleted
```javascript

let id: "kdjfs_appt_id_34123";
let record = await deleteRecord(id);
console.log(record.data) // => Record objects
```