const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema({
  name: { type: String, required: true },
  age: { type: Number },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, unique: true },
  password: { type: String, required: true },
});
module.exports=User=mongoose.model("user",userSchema);

