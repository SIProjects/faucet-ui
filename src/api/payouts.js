import axios from 'axios';

export default {
  async recent() {
    const res = axios.get('/api/v1/payouts/recent')
    return res.data
  }
}
