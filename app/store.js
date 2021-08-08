const store = {
}

// accepts on jquery element to hide and one to show
const hideAndShow = (e1, e2) => {
  e1.hide()
  e2.show()
}

const views = {
  startView: $('#start-view'),
  signUpView: $('#sign-up-view'),
  deckView: $('#deck-view'),
  changePasswordView: $('#change-password-view'),
  myDecksView: $('#my-decks-view'),
  workoutsView: $('#workouts-view')
}

//  hides all views and accepts a single jquery element to show. Also resets all form fields
const manageView = (viewToShow) => {
  views.startView.hide()
  views.signUpView.hide()
  views.deckView.hide()
  views.changePasswordView.hide()
  views.myDecksView.hide()
  views.workoutsView.hide()
  viewToShow.show()
}

// toggles menu items between show and hide to be the opposite of whatever it is now.
const manageMenuView = () => {
  $('#signInFromMenu').toggle()
  $('#signUpFromMenu').toggle()
  $('#changePasswordButton').toggle()
  $('#myDecks').toggle()
  $('#newDeckButton').toggle()
  $('#signOut').toggle()
}

// reset forms
const formReset = () => $('.form-control').trigger('reset')

module.exports = {
  store,
  hideAndShow,
  manageView,
  manageMenuView,
  formReset,
  views
}
