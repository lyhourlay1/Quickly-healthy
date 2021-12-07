## Appointments
Import from ```/frontend/util/appointment_util.js```

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
Import from ```/frontend/util/record_util.js```

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


## Doctors
Import from ```/frontend/util/doctors_util.js```

### Fetching All Doctors
API fetchDoctors gets all doctors from the database
```javascript
let doctors = await fetchDoctors();
console.log(doctors.data) // => Array[Doctor objects]
```

### Fetching Doctor by id
API fetchDoctor gets a doctor from the database, given the doctor id
```javascript
let id = "jkdkfsjal3421321"
let doctor = await fetchDoctor(id);
console.log(doctor.data) // => doctor object
```

### Create Doctors
API createDoctor creates a doctor in the database
```javascript

let doctor = await createDoctor({
    name: "Katie",
    license: "fjkldsajfkdj2331",
    location: "Choc Hospital",
    address: "1234 Ave Dr",
    schedule: {
        Sunday: {
            start: new Date('2021-12-05T08:00:00.000Z'),
            end: new Date('2021-12-05T15:00:00.000Z')
        },
        Monday: {
            start: new Date('2021-12-06T08:00:00.000Z'),
            end: new Date('2021-12-06T15:00:00.000Z')
        },
        Tuesday: {
            start: new Date('2021-12-07T08:00:00.000Z'),
            end: new Date('2021-12-07T15:00:00.000Z')
        },
        Wednesday: {
            start: new Date('2021-12-08T08:00:00.000Z'),
            end: new Date('2021-12-08T15:00:00.000Z')
        },
        Thursday: {
            start: new Date('2021-12-09T08:00:00.000Z'),
            end: new Date('2021-12-09T15:00:00.000Z')
        },
        Friday: {
            start: new Date('2021-12-10T08:00:00.000Z'),
            end: new Date('2021-12-10T15:00:00.000Z')
        },
        Saturday: {
            start: new Date('2021-12-11T08:00:00.000Z'),
            end: new Date('2021-12-11T15:00:00.000Z')
        }
    },
});
console.log(doctor.data) // => Doctor objects
```

### Update Doctor
API updateDoctor updates a doctor from the database, but returns the previous value
```javascript

let doctor = await updateDoctor({
    id: "232_doctorid_jkjs",    // needs the id passed in the body
    location: "Choc Hospital"   // changing location
});
console.log(doctor.data) // => Doctor objects
```


### Delete Doctor
API deleteDoctor deletes a doctor from the database, returns the doctor deleted
```javascript

let id: "kdjfs_appt_id_34123";
let doctor = await deleteDoctor(id);
console.log(doctor.data) // => Doctor objects
```