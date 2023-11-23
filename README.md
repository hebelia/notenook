# Note Taking App

## Prerequisites

- Node.js (v20.9.0)
- npm (v10.2.4)
- PostgreSQL (v14 or higher)
- pgAdmin 4 (v7.5 or higher)

## Set up .env file on the backend folder

- Create a file named `.env` in the root of the backend folder and paste this with your PostgreSQL credentials:
  ```
  DB_USER= -> your postgres username
  DB_PASSWORD= -> your postgres password
  DB_HOST= localhost
  PORT=3001
  ```

## Create a database on postgreSQL

### Database name: notenook

### Database owner: postgres

## Setup and Running the Application

- Clone the repository:

  ```bash
  git clone https://github.com/ensolvers-github-challenges/LiaRomeu-deb573
  ```

- Make the start script executable:

  ```
  chmod +x start_app.sh
  ```

- Run the application:
  ```
  ./start_app.sh
  ```

## Technologies Used

- Backend: Node.js, Express, Sequelize, PostgreSQL.
- Frontend: React, Redux, Ant Design.
