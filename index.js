const express = require('express');
const axios = require('axios');

const app = express();
const port = 5500;

const API_KEY = 'ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637';
const API_URL = 'https://dad-jokes.p.rapidapi.com/random/joke';

app.get('/random-joke', async (req, res) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
        'useQueryString': true
      }
    });
    const { setup, punchline } = response.data.body[0];
    const joke = `${setup} ${punchline}`;
    res.send(joke);
  } catch (error) {
    console.error(error);
    res.status(500).send('Oops! Something went wrong.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
