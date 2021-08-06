const { store, hideAndShow } = require('./../store')

const onSignUpSuccess = function (response) {
  console.log(response)
  console.log('sign-up success')
  store.email = response.user.email
  hideAndShow($('#sign-up-view'), $('#start-view'))
  $('.form-control').trigger('reset')
  $('#signInEmail').val(store.email)
}

const onSignInSuccess = function (response) {
  console.log(response)
  console.log('sign-in success')
  store.user = response.user
  console.log(`token is ${store.user.token}`)
  $('.form-control').trigger('reset')
  hideAndShow($('#start-view'), $('#deck-view'))
}

const onSignOutSuccess = function (response) {
  console.log(response)
  hideAndShow($('#deck-view'), $('#start-view'))
  console.log('sign-out success')
}

const onFailure = function (response) {
  console.log('something failed')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onFailure
}
