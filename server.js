const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();


//access env file
require('dotenv').config();
const PORT = process.env.PORT;

const routes = require('./routes');


// --------Middlewares  -------//

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
app.use('api/v1/posts', routes.posts);


app.listen(PORT, () =>
  console.log(`Server connected at http://localhost:${PORT}`)
);



