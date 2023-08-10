const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/amazon', async (req, res) => {
  try {
    const response = await axios.get('https://www.amazon.com');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching Amazon:', error);
    res.status(500).send('Error fetching Amazon');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
