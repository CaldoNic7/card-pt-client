const config = require('./../config')
const { store } = require('./../store')

const signUp = function (data) {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut
}
