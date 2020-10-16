import axios from 'axios';
export default {
  async submitAddress(address) {
    await axios.post('/api/v1/queue', { address }, {
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
