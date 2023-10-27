# SimpleChat-frontend
## Repository for Backend located at https://github.com/merrillhuang/SimpleChat-backend
### A chatroom application. Users are able to create an account authenticated with Spring Security and JWT (or use a guest account), join/create chat rooms and chat with other users. Frontend display of rooms and chats dynamically updated periodically through HTTP requests to backend database.

## Tools and Technologies
### Wireframe.cc - wireframes
### Visual Paradigm - ERD diagram
### https://icons.getbootstrap.com/ : For icons
### Angular: Frontend Framework
### Written in Typescript

## Dependencies
### Node.js - follow instructions to download and install at https://nodejs.org/en
### Angular CLI - follow instructions to download and install at https://angular.io/cli

## How to Run Program
### Download Repository
### In command line: Navigate to project directory /simplechat/simplechat
### Run npm install, then ng serve, navigate to http://localhost:4200/ in browser

## General Approach
### Using the Angular framework, I embedded a router outlet in the app's root page. The app opens on the landing page with a form for entering a username and password combo to either sign in (for an existing user), sign up (for new users), or continue as a Guest user (preset account already seeded in the database). The sign in sign up buttons, on click, will check if the username and password fields are not empty, then submit a Http request to back end to sign in or register a new user then sign in, respectively. The Guest button will submit a Http signin request using the preset credentials for the Guest account. If the Http request returns a sucessful response, the user is then redirected to the main page using an Angular router Link. The Main page consists of a list of available Chat Rooms that are pulled from the database. This list is dynamically refreshed every three seconds by sending a Http request to the backend for a list of all rooms stored in the database. There is a sign out button that will clear out the saved credentials and route the user back to the landing page when pressed. There is also a page navigation/display that is dynamically updated. The main page displays 5 Rooms at a time, so if there are more than 5 Rooms in the database, the Rooms will be paginated. The number of pages is dynamically calculated, and each page number dynamically routes to that page of Rooms. The left and right arrows navigate to the previous page and next page, respectively, and will not appear if the current page is the first page or last page, respectively. On clicking a room, the user will be routed to that specific Room's page dynamically. The Chatting page dynamically loads a list of Chats sent in each page by sending a Http request to the backend every three seconds. There is a form at the bottom of the page, which takes an input for a new message and sends a Http request to the backend to create a new Chat when pressed. Each Chat has edit and delete buttons next to it (which send put and delete requests to the backend), that are only functional if the Chat was created by the current user. Finally, the home button at the top of the page routes back to the Main page with the list of all Rooms.

## Unsolved Problems
### First priority for future plans is to deploy the entire projec. Linking the frontend to the backend API took longer than expected, so there wasn't time to style the frontend. There was also planned functionally for interactivity on certain buttons, which I hope to add in the future. A tricky problem that is only partially solved is how to re-route the user depending on the response of a Http request. In general, I didn't have time to figure out how to properly perform async await within the Angular framework.

## Helpful Links used to solve specific problems encountered during the project.
### https://www.tektutorialshub.com/angular/angular-http-post-example/ (how to add a body to http request)
### https://angular.io/api/common/http/HttpClient (for how to include headers in a http request)
### https://stackoverflow.com/questions/36753819/conditionally-add-routerlink-or-other-attribute-directives-to-an-element-in-angu
### https://www.itsolutionstuff.com/post/angular-setinterval-and-clearinterval-example-tutorialexample.html

