# Website Builder

This project is a full-stack application for building and customizing websites. It features a frontend built with React, Redux for state management, and Tailwind CSS for styling. The backend is powered by Node.js, Express, and MongoDB for data storage.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Running Frontend](#running-frontend)
  - [Running Backend](#running-backend)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Configurable Navbar, Sidebar, Hero Section, and Footer
- Text editing and image upload functionality for custom logos and content
- Responsive design using Tailwind CSS
- State management with Redux
- Backend API with Express and MongoDB

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>= 14.x)
- npm (>= 6.x)
- MongoDB (either local instance or MongoDB Atlas)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/website-builder.git
   cd website-builder
   ```

## Install frontend dependencies:

```bash
cd frontend
npm install
```

## Install backend dependencies:

```bash
cd ../backend
npm install
```

## Set up environment variables:

```bash
MONGO_URI=mongodb+srv://yourusername:P%40ssw%3Ard%2F123@cluster0.mongodb.net/yourdbname?retryWrites=true&w=majority
PORT=5000
```

## Running the Application

Running Frontend
To start the frontend server, navigate to the root directory and run:

```bash
cd frontend
npm start
```

The frontend application will be available at http://localhost:9000.

Running Backend
To start the backend server, navigate to the backend directory and run:

```bash
cd backend
npm run dev
The backend API will be available at http://localhost:5000.
```

## API Endpoints

GET /api/config: Fetch configuration data
PUT /api/config/:id: Update configuration data

## Technologies Used

**Frontend:**

React
Redux
Tailwind CSS

**Backend:**

Node.js
Express
MongoDB
Mongoose

## Contributing

Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).

Make your changes and commit them (git commit -m 'Add some feature').

Push to the branch (git push origin feature-branch).

Create a new Pull Request.
