const axios = require('axios')

function post(url, body, config) {
  const headers = {
    'Content-Type': 'application/json',
    ...config
  }
  axios.post(url,
    body,
    headers
  ).then(function (response) {
    return response
  })
    .catch(function (error) {
      const errorMessage = 'Request failed with following exception: ' + error
      return errorMessage
    })
}

module.exports = {
  post
}
