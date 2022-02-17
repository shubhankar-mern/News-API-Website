const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const newsRouter = require('./src/routes/news');
const app = express();
const staticPath = path.join(__dirname, './public');
app.use(express.static(staticPath));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/', newsRouter);
//Your API key is: ca73a18f0fee4491a7cb22b9979cb8fa
app.get('/', (req, res) => {
  res.send('This is root HOMEPAGE');
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started at ${port}`);
  }
});
