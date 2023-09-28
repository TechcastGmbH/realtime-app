# Simple Realtime App Test

## Objective

Create a simple realtime app using Node.js for the server. The app should allow users
to send messages to each other using a simple chat interface. Admins should be able to
publish push messages to all users, and unpublish them again. The app is a very basic
version of what we use for our live-streaming events.

New users on the site should be able to see all push messages that have been published 
and the last 10 chat messages.

Use any Node.js libraries you like, but try to keep the number of dependencies low.

Here's what the finished app could look like:

![App sample](https://raw.githubusercontent.com/TechcastGmbH/realtime-app/main/demo.gif)

As you can see, there are chat messages and push messages sent between two browser windows.
Also, one window is reloaded to show that the messages are persisted.

Further requirements:

- We suggest you use socket.io for the realtime communication, but you can use any library you like
- Data can be held in memory, storing it in a database is optional
- The node.js app should also serve the client files from the frontend folder,
  so running `npm start` should start the server and serve the frontend (after an optional build step)
- You can use any frontend framework you like, or just use the provided html templates with jQuery
  from the frontend folder.
- The frontend can load libraries from a CDN, like the template in the frontend folder does
- Please comment your code where appropriate and commit often with meaningful commit messages

## Optional Bonus Objectives

- Use typescript for the server
- Protect the "admin" page and write access to the push messages api with a login
- Option for users to load more chat messages
- Provide a REST API endpoint to download the chat messages

## Submission

Please submit your solution as a zip file or a link to a git repository.
