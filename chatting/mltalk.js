// mltalk.js

const axios = require('axios');

const chatting = async (req, res) => {
  try {
    const { message } = req.body;
    console.log(message);

    const mlApiResponse = await axios.post('https://finals-g0nj.onrender.com/api/process_question', {
      question: "hiii",
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const mlApiResponseData = mlApiResponse.data;

    // Send the ML API response back to the client
    return res.json(mlApiResponseData);
  } catch (error) {
    // Handle errors
    console.log(1);
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  chatting
};
