//import express, deb, and routes
import express from 'express';
import db from './config/connection.js';
import routes from './routes/index.js';
//Declare the port and app using express
const PORT = 3001;
const app = express();
//Allow Express app to parse incoming request in URL of objects and arrays
app.use(express.urlencoded({ extended: true }));
//Allow Express aap to parse incoming request in json format
app.use(express.json());
//Allow Express app to create routes imported above
app.use(routes);
//The Express server only starts listening when it is successfully connected to db
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
