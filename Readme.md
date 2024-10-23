# Rule Engine Application

This is a 3-tier rule engine application developed using React.js for the frontend, Node.js for the backend, and MySQL for the database. The application allows users to create conditional rules and evaluate user eligibility based on attributes like age, department, income, and experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create and store complex rules using a user-friendly interface.
- Evaluate user data against defined rules.
- Utilize an Abstract Syntax Tree (AST) to represent conditional rules.
- Dynamic rule creation, combination, and modification.
- Error handling for invalid rules and user data formats.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Other**: Mongoose (for MongoDB), Axios (for API requests)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MySQL (v5.7 or later)
- NPM (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd rule-engine-app
   ```

Navigate to the backend directory and install dependencies:

bash
Copy code
```cd backend
npm install```
Navigate to the frontend directory and install dependencies:

bash
Copy code
```cd ../frontend
npm install
```

Usage
## Start the backend server:

bash
Copy code
```cd backend
node server.js```

## Start the frontend application:

bash
Copy code
``` cd frontend
npm start ```
 
##  Open your web browser and navigate to http://localhost:3000.
