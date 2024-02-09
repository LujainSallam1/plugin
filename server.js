const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const session = require('express-session');
const memoryStore = new session.MemoryStore();
const contextPath = '/samlconfig';

app.use(session({ secret: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoI9pBNHkOKuucvPM0ICkvAk', resave: false, saveUninitialized: true }));
app.use(`${contextPath}/images`, express.static(path.join(__dirname, 'images')));
app.use(`${contextPath}/js`, express.static(path.join(__dirname, 'js')));
app.use(`${contextPath}/pages`, express.static(path.join(__dirname, 'pages')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
