const express = require('express');
const path = require('path');

app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
  return res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// run server
const port = process.env.PORT || 8008;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
