import express from 'express';
import cors from 'cors'
import morgan from 'morgan'
import connect from './database/connection.js';
import router from './router/route.js';

const app = express()

/** middlewares */
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by') //less hackers know about our stack

const port = 8080;

/** HTTP Get Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request")
});

/** api routes */
app.use('/api', router)

/** start server only when we have valid connection */

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server');
    }
}).catch(error => {
    console.log("Inavlid Database connection!");
})

