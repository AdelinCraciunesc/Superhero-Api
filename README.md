# HUMBLE-SUPERHERO-API

The Humble Superhero API is an application that allows users to add and retrieve superheroes based on their humility score. The project consists of a NestJS backend and an optional React frontend.

[![My Skills](https://skillicons.dev/icons?i=ts,jest,nestjs,css,vite,react)](https://skillicons.dev)

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Collaboration](#colaboration-notes)
- [If i had more time](#if-i-had-more-time)

## Demo

![HUMBLE-SUPERHERO-API](assets/demo.png)

## Main Features

### 1. Post /superheroes
- Add a superhero with a name, superpower, and humility score (1-10).

### 2. Get /superheroes
- Retrieve superheroes sorted by humility score in descending order.

### 3. Validation
- Ensures humility scores are within the valid range.

### 4. Testing
- Includes Jest tests for key functionality.

### 5. Frontend
- A React UI to interact with the API in real-time.

## Technologies Used

- **Back-End**:
  - [NestJs]
  - [TypeScript]
  - [Jest]

- **Front-End**:
  - [React]
  - [StyledComponents]

- **Tools and Libraries**:
  - [Node.js]
  - [Vite]
  - [Npm]

## Installation & Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/AdelinCraciunesc/superhero
    ```

2. **Setup Backend:**

    ```bash
    cd superhero-api
    ```

3. **Install the required dependencies:**

    ```bash
    npm install
    ```

4. **Run Server:**

    ```bash
    npm run start:dev
    ```

5. **Frontend Setup:**

    ```bash
    cd ..
    cd humble-superhero-frontend
    ```

6. **Install the required dependecies:**

    ```bash
    npm install
    ```
7. **Start the frontend**

    ```bash
    npm run dev
    ```

    The app will be available at `http://localhost:5173/`.
    The api wiil be available at `http://localhost:3000/`

## API Usage
### Add a Superhero
#### Curl
    ```bash
    curl -X POST http://localhost:3000/superheroes \
    -H "Content-Type: application/json" \
    -d '{"name": "Spider-Man", "superpower": "Wall-crawling", "humilityScore": 9}'
    ```
#### Invoke-WebRequest(powershell)
    ```bash
    Invoke-WebRequest -Uri "http://localhost:3000/superheroes" -Method Post -Headers @{ "Content-Type" = "application/json" } -Body '{"name": "Spider-Man", "superpower": "Spider like powers", "humilityScore": 9}'
    ```

#### Get Superheroes
#### Curl
    ```bash
    curl -X GET http://localhost:3000/superheroes
    ```
#### Invoke-WebRequest(powershell)
    ```bash
    Invoke-WebRequest -Uri "http://localhost:3000/superheroes" -Method Get
    ```

## Colaboration Notes
If I worked in a team for this project I would propose:
1. Discuss API structure beforehand
2. Split tasks for a better development
3. Write Clear Messages and documentation
4. Using Git branches to avoid conflicts
5. Collaborating and helping each other

## If I had more time
1. Implement a database instead of an in-memory-array
2. Expand on the existing DTO for superheroes with more data such as achievements and photos
3. Add routes for editing and deleting a superhero
4. Improve the frontend UI with better styling and error handlign
5. Add user authentication and authorization
6. Expand test coverage so everything can work smoothly