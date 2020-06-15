# SymCheck
Symptom Checker - Designed for Torit Innovations Internship

Live Demo - https://symcheck.herokuapp.com/

## Installation
Download the repository. Then run -
```bash
npm install
```
Create a `.env` Environment Variable file and put the following data in it -
```env
PORT=80
DB_URL=<YOUR DB URL>
```
The Database URL is required and can be your local database url (Ex. `mongodb://localhost:27017/symcheck`).

## Data Upload
I have provided a data uploading scripts in the folder `app/v1/scripts/` and the given data in two separate CSV files. You can simply run the script to upload the data to your local or remote database.
```bash
node app/v1/scripts/import.js
```

## Execution
To start the server -
```bash
node index.js
```

## API Access
The API has 2 endpoints that can be accessed via. any application or API Client (like Postman or Insomnia).

- `GET | https://symcheck.herokuapp.com/v1/symptoms`
  
  **Description**: Returns a list of all symptoms in the database.
  
  **Response**: Array(Symptoms) \[format: `application/json`]

- `POST | https://symcheck.herokuapp.com/v1/diseases`
  
  **Accepts**: `application/json`
  
  **Parameters**: Array(Symptom IDs)
  
  **Description**: Returns a list of all conditions related to the given symptoms.
  
  **Response**: Array(Conditions) \[format: `application/json`]
