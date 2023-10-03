const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user");

// import user from

const app = express();

const port = process.env.PORT || 5000;

// Connect to MongoDB Atlas
mongoose.connect(
  "mongodb+srv://ohaokey09:DrKIXjjHbtnLGtln@remindercluster.xwt3idy.mongodb.net/reminder?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Check for successful connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

// THE MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//
app.use("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // !CHECK IF USER EXIST
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error(`User with the email ${email}  already exist`);
  }

  // !HASH THE PASSWORD
  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);

  // !CREATE THE STUDENT
  const newUser = await User.create({
    name,
    email,
    password,
  });

  // await newUser.save();

  res.json(newUser);
});

app.use("/api/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const user = await User.findOne({ email });

  if (user && password === user.password) {
    res.status(201).json(user);
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
  // await newUser.save();
});

//
app.listen(port, () => {
  console.log(`server started on localhost:${port}`);
});
