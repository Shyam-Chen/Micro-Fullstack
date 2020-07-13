const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('mod-express');
});

app.listen(3001, (err, address) => {
  if (err) throw err;
  console.log(`server listening on :3001`);
});
