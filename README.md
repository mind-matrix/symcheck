# symcheck
Symptom Checker - Designed for Torrit Innovations Internship

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
