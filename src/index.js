const network = require('./network')

const missingArgument = () => console.log('Missing NotifyGoogleChat argument !')

async function NotifyGoogleChat (url = missingArgument, body = missingArgument) {
  return await network.post(url, body)
}

module.exports = {
  NotifyGoogleChat
}
