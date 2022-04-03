const mongoose = require('mongoose');

const db = {
    
}
// mongoose.connect() tells mongoose which database we want to connect to 
// link is local MongoDB server's database (since this will not be deployed)
mongoose.connect(`mongodb://localhost:27017/SNAPI`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// use this to log mongo queries being executed
mongoose.set(`debug`, true);


module.exports = db;