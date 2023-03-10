const express = require('express');
const cors = require('cors');
require('dotenv').config();

// connect to db fnc
const connectDB = require('./db/connectDB');

// routers
const todosRouter = require('./routes/todo');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/todos', todosRouter);

const start = async () => {
  try {
    const mongo_uri = process.env.MONGO_URI;

    await connectDB(mongo_uri);
    app.listen(PORT, () => {
      console.log(`server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
