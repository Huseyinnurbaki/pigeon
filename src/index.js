const network = require('./network')

const missingArgument = () => console.log('Missing NotifyGoogleChat argument !')

function NotifyGoogleChat (url = missingArgument, body = missingArgument) {
  return network.post(url, body)
}

module.exports = {
  NotifyGoogleChat
}
