export default {
  checkAddress(address) {
    if (address.length === 34) {
      return address[0] == 't' || address[0] == 'T';
    }
    return false;
  }
}
