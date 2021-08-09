const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const { store } = require('./../store')

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

// onIndexDecks
const onIndexDecks = function () {
  api.IndexDecks()
    .then(ui.onIndexDecksSuccess)
    .catch(ui.onIndexDecksFail)
}

// onShowOneDeck
const onShowOneDeck = function (e) {
  const showDeck = e.target
  const id = $(showDeck).data('id')

  api.showDeck(id)
    .then(ui.onShowDeckSuccess)
    .catch(ui.onShowDeckFail)
}

// onDeckUpdate
const onDeckUpdate = function (e) {
  e.preventDefault()
  const data = getFormFields(this)
  const id = store.deck._id

  api.updateDeck(id, data)
    .then(ui.onUpdateDeckSuccess)
    .catch(ui.onUpdateDeckFail)
}

// onDeleteDeck
const onDeleteDeck = function (e) {
  const deleteDeck = e.target
  const id = $(deleteDeck).data('id')
  api.deleteDeck(id)
    .then(ui.onDeleteDeckSuccess)
    .catch(ui.onDeleteDeckFail)
}
const onDeleteDeckFromDecksView = function (e) {
  const deleteDeck = e.target
  const id = $(deleteDeck).data('id')
  // ui.onDeleteDeckFromDecksViewSuccess(id)
  api.deleteDeck(id)
    .then(ui.onDeleteDeckFromDecksViewSuccess(id))
    .catch(ui.onDeleteDeckFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onSignOutButton,
  onChangePassword,
  onDeckCreation,
  onIndexDecks,
  onShowOneDeck,
  onDeckUpdate,
  onDeleteDeck,
  onDeleteDeckFromDecksView
}
