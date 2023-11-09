const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(router);
app.use(express.static(path.join(__dirname, 'public/mockImages')));

app.listen(port, () => {
  console.log(`Server rolling on ${port}`);
});