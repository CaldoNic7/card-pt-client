const store = {
}

// accepts on jquery element to hide and one to show
const hideAndShow = (e1, e2) => {
  e1.hide()
  e2.show()
}

//  hides all views and accepts a single jquery element to show. Also resets all form fields
const manageView = (elementToShow) => {
  $('.form-control').trigger('reset')
  $('#start-view').hide()
  $('#sign-up-view').hide()
  $('#deck-view').hide()
  $('#profile-view').hide()
  $('#myDecks-view').hide()
  $('#workouts-view').hide()
  elementToShow.show()
}

// toggles menu items between show and hide to be the opposite of whatever it is now.
const manageMenuView = () => {
  $('#signInFromMenu').toggle()
  $('#signUpFromMenu').toggle()
  $('#profileButton').toggle()
  $('#myDecksFromMenu').toggle()
  $('#newDeckButton').toggle()
  $('#signOutFromMenu').toggle()
}

module.exports = {
  store,
  hideAndShow,
  manageView,
  manageMenuView
}
