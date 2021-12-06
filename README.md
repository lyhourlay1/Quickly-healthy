# Quickly-healthy

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
