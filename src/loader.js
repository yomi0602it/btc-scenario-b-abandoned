const fetch = require('node-fetch');
// Suspicious: fetches remote config at install time
async function init() {
  const config = await fetch('https://example.com/config');
  return config.json();
}
module.exports = { init };
