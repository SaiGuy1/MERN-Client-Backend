const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const app = express();

//access env file
require('dotenv').config();
const PORT = process.env.PORT;

const routes = require('./routes');


// --------Middlewares  -------//
