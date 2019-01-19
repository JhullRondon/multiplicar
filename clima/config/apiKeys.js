const keys = [
  'AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM',
  'AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ',
  'AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8',
  'AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA',
  'AIzaSyBkDYSVRVtQ6P2mf2Xrq0VBjps8GEcWsLU',
  'AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI',
  'AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y',
  'AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM',
  'AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY',
  'AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8'
];
const apiKey = () => {
  const randomIndex = Math.floor(Math.random() * keys.length);

  const key = keys[randomIndex];
  return key;
}

const weatherKey = () => {
  return '2b990c343306f19b987ee4c6445ad167';
}

module.exports = {
  apiKey,
  weatherKey
}