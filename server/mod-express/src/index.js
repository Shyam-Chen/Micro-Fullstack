import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('mod-express');
});

app.listen(3002, () => {
  console.log('🚀  App: Bootstrap Succeeded');
  console.log(`🚀  Host: http://${'localhost'}:${'3002'}`);
});
