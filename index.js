const express = require("express")
const cors = require("cors")
const db = require("./models")


const app = express()

const corsOption = {
    origin : "*"
}


// middleware
app.use(cors(corsOption))
app.use(express.json())

// connect DB
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
// db.mongoose.createConnection(db.url, mongooseConfig).then(()=>{
//     console.log("database connected");
// }).catch(err => {
//     console.log(`gagal connect ${err.message}`);
//     process.exit();
// })

db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = db.mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log('Connected to MongoDB using Mongoose connect method!')
});

// db.mongoose.createConnection(db.url).asPromise().then(()=>console.log('connect database')).catch(err => {console.log(`gagal connect ${err.massage}`); process.exit()})

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`listen port ${PORT}`);
})