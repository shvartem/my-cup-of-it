const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const logger = require('morgan');
const testConnect = require('./db/testConnect');

const authRouter = require('./routes/auth.router');
const usersRouter = require('./routes/users.router');
const companiesRouter = require('./routes/companies.router');
const technologiesRouter = require('./routes/technologies.router');
const meetsRouter = require('./routes/meets.router');

const PORT = process.env.PORT ?? 5000;

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 1000 * 60 * 60 * 23,
    httpOnly: true,
  },
};

const app = express();
app.use(session(sessionConfig));

app.use(logger('dev'));
app.use(express.json());

app.use('/api', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/meets', meetsRouter);
app.use('/api/companies', companiesRouter);
app.use('/api/technologies', technologiesRouter);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  testConnect();
});
