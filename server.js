const express = require('express');
// const db = require('./config/connection');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// mongoose.connect() tells mongoose which database we want to connect to 
// link is local MongoDB server's database (since this will not be deployed)
mongoose.connect(`mongodb://localhost:27017/SNAPI`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// use this to log mongo queries being executed
mongoose.set(`debug`, true);

// db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server runnning on port ${PORT}!`);
    })
// })


