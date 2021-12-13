const network = require('./network')
require('dotenv').config()

const readFromEnvironment = (value) => {
  return process.env[value]
}

function NotifyGoogleChat (body, url = readFromEnvironment('GOOGLE_CHAT_API_URL')) {
  return network.post(url, body)
}
function NotifySlackChannel (body, url = readFromEnvironment('SLACK_API_URL')) {
  return network.post(url, body)
}

NotifyGoogleChat({})
module.exports = {
  NotifyGoogleChat,
  NotifySlackChannel
}
