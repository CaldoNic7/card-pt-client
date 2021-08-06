const store = {
}

const hideAndShow = (e1, e2) => {
  e1.hide()
  e2.show()
}

const manageView = (elementToShow) => {
  $('#start-view').hide()
  $('#sign-up-view').hide()
  $('#deck-view').hide()
  $('#profile-view').hide()
  $('#myDecks-view').hide()
  $('#workouts-view').hide()
  elementToShow.show()
}

module.exports = {
  store,
  hideAndShow,
  manageView
}
