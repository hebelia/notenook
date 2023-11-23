#!/bin/bash

# Function to check if a command exists
command_exists () {
    type "$1" &> /dev/null ;
}

# Check for Node.js
if command_exists node
then
    echo "Node.js found"
else
    echo "Node.js not installed. Please install Node.js to continue."
    exit 1
fi

# Check for npm
if command_exists npm
then
    echo "npm found"
else
    echo "npm not installed. Please install npm to continue."
    exit 1
fi

# Navigate to backend directory and install dependencies
cd backend
npm install

# Start the backend server
node index.js &

# Navigate to frontend directory and install dependencies
cd ../frontend
npm install

# Start the frontend server
npm run dev &

echo "Application started successfully."