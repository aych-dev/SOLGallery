const PORT = process.env.PORT || 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const url = `https://mainnet.helius-rpc.com/?api-key=${process.env.APIKEY}`;
    const { data } = await axios.post(url, {
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetsByOwner',
      params: {
        ownerAddress: req.query.solanaAddress,
        page: 1,
        limit: 1000,
      },
    });
    res.json(data.result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
