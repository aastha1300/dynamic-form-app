const app = require('./app');

const PORT = process.env.PORT || 5001;
const express = require('express');




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
