const { store, manageView, manageMenuView } = require('./../store')
const { success, fail, setSuccessMessage, setFailMessage } = require('./../messages')

const onSignUpSuccess = function (response) {
  store.email = response.user.email
  // hides everything but the start view.
  manageView($('#start-view'))
  $('#signInEmail').val(store.email)
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.signUp)
}

const onSignInSuccess = function (response) {
  store.user = response.user
  // on successful sign in hides sign-in and sign-up options and shows the rest.
  manageMenuView()
  // hides everything but the deck-view.
  manageView($('#deck-view'))
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.signIn)
}

const onSignOutFromMenuSuccess = function () {
  // click the menu icon to close it on successful sign-out
  $('.toggler').trigger('click')
  // on successful sign out shows sign-in and sing-up options and hides the rest.
  manageMenuView()
  // hides everything but the start view.
  manageView($('#start-view'))
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.signOut)
}
const onSignOutButtonSuccess = function () {
  // on successful sign out shows sign-in and sing-up options and hides the rest.
  manageMenuView()
  // hides everything but the start view.
  manageView($('#start-view'))
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.signOut)
}

const onCreateDeckSuccess = function (response) {
  store.deck = response.deck
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.deckSave)
}

const onChangePasswordSuccess = function (response) {
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.changePW)
}

const onSignUpFail = function (response) {
  console.log(response)
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setFailMessage(fail.signUp)
}

const onSignInFail = function (response) {
  console.log(response)
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setFailMessage(fail.signIn)
}

const onSignOutFail = function (response) {
  console.log(response)
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setFailMessage(fail.signOut)
}
const onChangePasswordFail = function (response) {
  console.log(response)
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setFailMessage(fail.general)
}

const onCreateDeckFail = function (response) {
  console.log(response)
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setFailMessage(fail.deckSave)
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutFromMenuSuccess,
  onSignOutButtonSuccess,
  onCreateDeckSuccess,
  onChangePasswordSuccess,
  onSignUpFail,
  onSignInFail,
  onSignOutFail,
  onChangePasswordFail,
  onCreateDeckFail
}
