const axios = require('axios')

function isURLValid (str) {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator
  return !!pattern.test(str)
}

function post (url, body, config) {
  if (!isURLValid(url)) return
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
