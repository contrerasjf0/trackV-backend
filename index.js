const express = require('express');

const { tables } = require('./tools/db');
const { createFakeUsers } = require('./tools/schemaFactory');

const routerApi = require('./routes');


const app = express();

app.use(express.json());

const port = 3000;

createFakeUsers(8, tables.userMap);

routerApi(app);

app.listen(port, () =>{
  console.log('My port: ' + port);
});
