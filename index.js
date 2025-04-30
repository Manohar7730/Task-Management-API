const express = require('express');

const app = express();

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);

})

app.get('/', (req, res) => {
    res.send('Task Manager API is running...');
  });
  
  module.exports = app;