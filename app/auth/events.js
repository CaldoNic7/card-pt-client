const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')


// onSignUp
const onSignUp = function (e) {
  e.preventDefault()
  console.log('i am getting to the onSignup function')
  const data = getFormFields(this)
  // const password = data.credentials.password
  // $('#signInPassword').val(password)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(console.log('in catch for signUp'))
}
// onSignIn
const onSignIn = function (e) {
  e.preventDefault()
  const data = getFormFields(this)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(console.log('in catch for sign-in'))
}
// onSignOut
const onSignOut = function () {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(console.log('in catch for sign-out '))
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
