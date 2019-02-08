const express = require('express');
const bodyParser = require('body-parser'); //for console.log(req.body) inside post requests

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let count = 0;

/* API CALLS */

app.post('/api/count/increment', (req, res) => {
  console.log(req.body);
  count = Math.max(1, count * 2);
  res.json({count: count})
});

app.listen(port, () => console.log(`Listening on port ${port}`));
