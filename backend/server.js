const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
const mongoConnection =require('./config/db')
const cookieParser = require('cookie-parser');
const path = require('path');

const index=require('./routes/index');
const UserRoute=require('./routes/UserRoute')
const RecipeRoute=require('./routes/RecipeRoute')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:5173', // ya jo bhi frontend ka URL ho
  credentials: true
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser());
app.use(express.static('public'));
mongoConnection(); // Connect to MongoDB
// Connect to MongoDB;

dotenv.config();

app.use('/', index);
app.use('/users', UserRoute);
app.use('/recipes', RecipeRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});