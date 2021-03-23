require('dotenv').config()

const express = require('express');
const cors = require('cors');

const routes = require('./routes')

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes()
    }

    // middlewares() {
    //     this.server.use((req, res, next) => {
    //         res.header("Access-Control-Allow-Origin", "*");
    //         // res.header("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Authorization");
    //         res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    //         this.server.use(cors());
    //         next();
    //     });
    //     this.server.use(express.json());
    //     this.server.use('/uploads',express.static('uploads'))
    // }
    
    middlewares() {
        this.server.use(cors());
        this.server.use(express.json());
        this.server.use('/uploads',express.static('uploads'))
    }

    routes() {
        this.server.use(routes);
    }
}

const app = new App;

module.exports = app.server;