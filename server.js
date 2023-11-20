const express = require('express');

const path = require('path');


const app = express();
const port = 3000;
const session = require('express-session');
const Keycloak = require('keycloak-connect');

 const memoryStore = new session.MemoryStore();

 const kcConfig = {
    clientId: 'frontend',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080',
    realm: 'master',
    realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoI9pBNHkOKuucvPM0ICkvAk/x01KblcgjrYAWXuo/atQebYxCl1vAc8ATrlVQ84w+HZMAG64KmV4vCVTOXOLb5dSO8LIl1KQKmQCDu2Tdjvo6b0Gchn8mtadeNaDfsFSFUByM2kiSpFdb5rqREhtgI5Z7WITlqmAKfPppbNz1ULqpzHY5tsYKrxDQ5Vd2fRA1WLERV0Gb2vYmJuSTzJ8fVX4MJ3VCaWlQWGuhvl7etkEain7jGA91eZ8zgByk08nfsbHwm7YvZWpk0sE+2ZbytxlP9YaC9wlysgA36wC0C+Z+PtU7a1bvb8K0s6eMIIs09GunUcX9CI2JywWWnMdzQIDAQAB'
};

const keycloak = new Keycloak({ store: memoryStore }, kcConfig);


app.use(session({ secret: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoI9pBNHkOKuucvPM0ICkvAk', resave: false, saveUninitialized: true }));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'pages')));

app.use( keycloak.middleware() );

function extraSpecialHandler(req, res) {
    res.sendFile(path.join(__dirname, '/pages/index.html'));
  }
  
  app.use(session({ secret: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoI9pBNHkOKuucvPM0ICkvAk', resave: false, saveUninitialized: true }));
  app.use('/images', express.static(path.join(__dirname, 'images')));
  app.use('/js', express.static(path.join(__dirname, 'js')));
  app.use(express.static(path.join(__dirname, 'pages')));
  
  app.use(keycloak.middleware());
  
  // حماية مسار /index.html باستخدام دور "admin" واستخدام دالة extraSpecialHandler
  // app.get('/index.html', keycloak.protect('admin'), (req, res) => {
  //   console.log('User has access to /index.html');
  //   extraSpecialHandler(req, res);
  // });
  

  app.get('/index', (req, res) => {
    console.log('User has access to /index');
    res.sendFile(path.join(__dirname, '/pages/index.html'));
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  