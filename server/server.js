const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const authRouter = require('./routes/auth.router');

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: new Date('Dec 31, 2021'),
    httpOnly: true,
  },
};

const app = express();
app.use(session(sessionConfig));

app.use(logger('dev'));
app.use(express.json());

app.use('/api', authRouter);

app.listen(4000, () => {
  console.log('server started');
});
