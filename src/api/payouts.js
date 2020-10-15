import axios from 'axios';

export default {
  async recent() {
    const res = await axios.get('/api/v1/payouts/recent')
    return res.data
  }
}
