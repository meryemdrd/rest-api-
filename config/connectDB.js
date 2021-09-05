const mongoose=require("mongoose")
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose
      .connect(
        `mongodb+srv://meryem:mery0107@cluster0.xpc8e.mongodb.net/users`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then((result) => console.log(" data base connected succ"));
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
