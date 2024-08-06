const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello, Elastic Beanstalk! this is kundan anurags app');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
