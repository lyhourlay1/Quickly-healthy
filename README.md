# Quickly-healthy
## Background and Overview
Quickly Healthy is a minimal viable product that serves as a proof of concept for 
application development, software engineering, and the user experience. These 
challenges are expressed in the following ideals:

### Auth-feature: Signup/Login as patient

| Feature       | Patient                                                                       | Doctor                           |
|---------------|-------------------------------------------------------------------------------|----------------------------------|
| User          | Sign-in Sign-up update insurance                                              | sign-in sign-up verify doctor id |
| Health Record | View, upload, delete, update                                                  | Create, delete, view, and update |
| Map API       | Locate doctors that accept the insurance and currently accepting new patients | Create location when sign up     |
| Appointment Checkin | View todo list, medications, etc. | Create todo list and customize medication | 
| Chat | Like Slack | Like Slack |

## Functionality and MVP

- [ ] User authorization with sign in and log out functions
- [ ] Create an account and make a patient profile
- [ ] Uploading, editing, and removing health records
- [ ] Interactive map to show location of nearby providers that accept user's insurance
- [ ] Add/edit/delete appointments
- [ ] In-app appointment check-in

### Bonus Features

- [ ] Daily journaling with timely spaced memories to reflect on progress over the course of weeks/months/years
- [ ] Interactive activity/progress monitoring with the user's physician(s)
- [ ] One-on-one chat feature between patient and physician

## WireFrames

![alt text](https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/wireframes/splash.jpg?raw=true)
![alt text](https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/wireframes/home.jpg?raw=true)
![alt text](https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/wireframes/profile_page.jpg?raw=true)

## Technologies and Technical Challenges

Frontend Technologies: React/Node.js and Google Maps API

Technical Challenges with Google Maps API:

* Fetching a new list of doctors that have offices within the view of the map as the user pans through the map
* Pinning each of the doctor's offices on the map
* The user should be able to drag the map around and scroll through it, without affecting or scrolling through the side-list of doctors (and vice-versa)

Technical Challenges with React/Node.js:

* Reading data from MongoDB and organizing for display
* Setting up the appropriate actions when making appointments and checking-in, without having actual users behaving as doctors
* Implementing enough doctor seeds to give useful feedback and realistic circumstances when using the application

###Backend: Node, Express, MongoDB

* Using Express from Node.js as our workframe and MonogDB as our database.
* MongoDB provides a scalable which is great for a quick coding developnent stage.
* MongoDB uses non-relational database which allows the developers to retrieve the 
data easily.
* NoSQL database provides benefits to developers like availbility, simple,
inexpensive to query, and flexible model. 

###MAP API

* We will be using MAP API from google to include the location of doctors and to
allow user to find the doctor by location. 



## Group Members and Work Breakdown
### Day 1
Emmett
* backend user auth/setup api

Lee
* front end user auth

Grayson
* front end user auth

Mauricio
* backend user auth/setup api

### Day 2
Emmett
* setup map api(backend)

Lee
* implement appointments/check in (backend)

Grayson
* start splash page and connect map to the front end

Mauricio
* setup health record (backend)
### Day 3
Emmett
* work on map (backend)

Lee
* implement appointments/check in (frontend)

Grayson
* work on frontend map

Mauricio
* finish health record (backend) and connect to frontend
### Day 4
Emmett
* complete backend map/test/debug

Lee
* complete backend map/test/debug

Grayson
* finish map on front end

Mauricio
* complete frontend health record and assist with finishing frontend map
### Day 5
* update readMe, deploy to heroku