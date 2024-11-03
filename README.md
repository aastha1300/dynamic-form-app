# Dynamic Forms Application

## Description

The Dynamic Forms Application allows users to fill out forms and submit their data, which is then stored in a SQL database. Users can view their submitted entries and export the data to an Excel sheet with ease. This application is built using React for the frontend and Node.js for the backend, with a MySQL database for data storage.

## Features

- Form Submission: Users can submit their names, country codes, and phone numbers through a user-friendly interface.
- View Entries: Users can navigate to a dedicated page to view all submitted entries in a tabular format.
- Export to Excel: Users can export all form entries to an Excel sheet with a single click.

## Installation Steps

1. Clone the Repository

   `bash
   git clone https://github.com/your-username/dynamic-forms-app.git
   cd dynamic-form-app
   cd server
   npm install
   cd ../client
   npm install
   
Set Up the Database

Ensure you have MySQL installed and running.
Create a new database for the application.
Update the database connection settings in the server code to match your MySQL configuration.
Start the Server

Navigate to the server directory and start the server:

bash
Copy code
cd server
node server.js
Start the Client

Open a new terminal, navigate to the client directory, and start the React application:

bash
Copy code
cd client
npm start
The client will run on http://localhost:3000

Navigation
Form Page: Users can fill out the form to submit their data.
Data List Page: Users can view all entries submitted through the forms in a table format.
Export Button: this opetion you can see on ( http://localhost:3000/entries ) On the Data List Page, there is an "Export to Excel" button that allows users to download all entries as an Excel file.
   
