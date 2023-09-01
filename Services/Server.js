const PORT = process.env.PORT || 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  let page = 1;
  let assetList = [];
  console.log(assetList);

  while (page) {
    try {
      const url = `https://rpc.helius.xyz/?api-key=${process.env.API_KEY}`;
      const { data } = await axios.post(url, {
        jsonrpc: '2.0',
        id: 'my-id',
        method: 'getAssetsByOwner',
        params: {
          ownerAddress: req.query.ownerAddress,
          page: page,
          limit: 1000,
        },
      });
      const { result } = await data;

      assetList.push(...result.items);

      if (result.total !== 1000) {
        page = false;
      } else {
        page++;
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error!!' });
    }
  }
  res.json(assetList);
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
