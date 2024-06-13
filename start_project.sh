#!/bin/bash

cd backend
docker-compose build
docker-compose up -d

if [ $? -ne 0 ]; then
	echo "Error executing Docker commands in the backend directory."
	exit 1
fi

cd ../frontend
npm install

if [ $? -ne 0 ]; then
	echo "Error executing npm install in the frontend directory."
	exit 1
fi

npm start
