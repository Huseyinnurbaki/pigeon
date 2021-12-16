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
function NotifyTelegramChannel (body, url = readFromEnvironment('TELEGRAM_API_URL')) {
  return network.post(url, body)
}
function NotifyPrivateChannel (body, url = readFromEnvironment('PRIVATE_API_URL')) {
  return network.post(url, body)
}

module.exports = {
  NotifyGoogleChat,
  NotifySlackChannel,
  NotifyTelegramChannel,
  NotifyPrivateChannel
}
