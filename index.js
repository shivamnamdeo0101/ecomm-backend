
const express = require('express')
const connectDB = require("./config/db");

const app = express()
const port = 5000

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Api Running')
})

app.use("/api/auth", require("./routes/auth"));


app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})