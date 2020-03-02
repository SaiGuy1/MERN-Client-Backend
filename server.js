const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();
const cors = require('cors');


//access env file
require('dotenv').config();
const PORT = process.env.PORT;

const routes = require('./routes');


// --------Middlewares  -------//
const coresOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200 //legacy browser choke on status 204 
}
app.use(cors(coresOptions))

//BodyParser
app.use(bodyParser.json());


// ------------ Routes ---------------- //

app.get('/', (req, res) => {
  res.send('<h1>This is home</h1>')
})

app.get('/profile/:user', (req, res) => {
  res.send('<h1>This is Profile</h1>')
})

// Authorization Routes
app.use('/api/v1/auth', routes.auth);
// User Routes
app.use('/api/v1/users', routes.users);
// Post Routes
app.use('/api/v1/posts', routes.posts);
// Profile Routes
app.use('/api/v1/profile', routes.users);
app.use('/api/v1/location', routes.location);


app.listen(PORT, () =>
  console.log(`Server connected at http://localhost:${PORT}`)
);



