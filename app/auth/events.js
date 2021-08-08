const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// onSignUp
const onSignUp = function (e) {
  e.preventDefault()
  const data = getFormFields(this)
  // const password = data.credentials.password
  // $('#signInPassword').val(password)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFail)
}

// onSignIn
const onSignIn = function (e) {
  e.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFail)
}

// onSignOut
const onSignOut = function () {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFail)
}

// onSignOutButton
const onSignOutButton = function () {
  api.signOutWithButton()
    .then(ui.onSignOutButtonSuccess)
    .catch(ui.onSignOutFail)
}

// onChangePassword
const onChangePassword = function (e) {
  e.preventDefault()
  const data = getFormFields(this)
  console.log(data)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFail)
}

// onDeckCreation
const onDeckCreation = function (e) {
  e.preventDefault()
  const data = getFormFields(this)
  api
    .createDeck(data)
    .then(ui.onCreateDeckSuccess)
    .catch(ui.onCreateDeckFail)
}

const onIndexDecks = function () {
  api.IndexDecks()
    .then(ui.onIndexDecksSuccess)
    .catch(ui.onIndexDecksFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onSignOutButton,
  onChangePassword,
  onDeckCreation,
  onIndexDecks
}
