# Social_Network_APP

## Description
```md
This project is a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. 
```

## User Story
```md
- AS A social media startup
- I WANT an API for my social network that uses a NoSQL database
- SO THAT my website can handle large amounts of unstructured data
```

## Table of Contents

- [Introduction](#introduction)
- [Technology](#technology)
- [Usage](#usage)
- [Tests](#tests)
- [Future](#future)
- [Contact](#credits)
- [License](#license)

## Introduction
```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user's friend list
```

## Technology
[![Express](https://img.shields.io/badge/Framework-Express-80ff00?style=plastic&logo=Express&logoWidth=10)](https://expressjs.com/)
[![Mongoose](https://img.shields.io/badge/ORM-Mongoose-80ff00?style=plastic&logo=Mongoose&logoWidth=10)](https://mongoosejs.com/)
[![Insomnia](https://img.shields.io/badge/Tool-Insomnia-80ff00?style=plastic&logo=Insomnia&logoWidth=10)](https://insomnia.rest/)

## Usage
- [Github Repo](https://github.com/dcruzel/Social_Network_APP)
- [Video](https://drive.google.com/file/d/1M5GpFcCCI9ItRLYUhkrOgnN-A8JSinh7/view?usp=sharing)

## Tests
- Insomnia was used to test the following API Endpoints

#### **User Routes**
- GET `/api/users` - Get all users
- GET `/api/users/:id` - Get a single user by ID
- POST `/api/users` - Create a new user
- PUT `/api/users/:id` - Update a user by ID
- DELETE `/api/users/:id` - Delete a user by ID

#### **Thought Routes**
- GET `/api/thoughts` - Get all thoughts
- GET `/api/thoughts/:id` - Get a single thought by ID
- POST `/api/thoughts` - Create a new thought
- PUT `/api/thoughts/:id` - Update a thought by ID
- DELETE `/api/thoughts/:id` - Delete a thought by ID

#### **Friend Routes**
- POST `/api/users/:userId/friends/:friendId` - Add a friend
- DELETE `/api/users/:userId/friends/:friendId` - Remove a friend

#### **Reaction Routes**
- POST `/api/thoughts/:thoughtId/reactions` - Add a reaction
- DELETE `/api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction

## Future
- Implement a the front-end portion of the interface to enhance the back-end server
- Add more user customization

## Contact

Elizabeth D'Cruz
- [Github Profile](https://github.com/dcruzel)
- [Email](Liz.c.dcruz@gmail.com)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

