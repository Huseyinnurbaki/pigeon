import { post } from '../network.js'

const missingArgument = () => console.log('Missing NotifyGoogleChat argument !')

async function NotifyGoogleChat (url = missingArgument, body = missingArgument) {
  return await post(url, body)
}

export default NotifyGoogleChat
