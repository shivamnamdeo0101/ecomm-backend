const mongoose = require("mongoose");


const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/ecomm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;