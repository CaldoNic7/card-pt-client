
const success = {
  signIn: 'Success! Now let\'s create a deck!',
  signOut: 'Thank\'s for using CARDio! Hope to see you back soon!',
  signUp: 'Success! Now sign in and create a deck!',
  changePW: 'Success! Password changed, be sure to remember it!',
  deckSave: 'Deck saved',
  indexDecks: 'Success! Here are your decks',
  showDeck: 'You may now edit this deck',
  updateDeck: 'Updates saved!',
  deleteDeck1: 'Deck deleted',
  deleteDeck2: ' deleted'
}

const fail = {
  general: 'Uh Oh! Something went wrong...',
  signUp: 'Sign-Up failed.',
  signIn: 'Sign-In failed.',
  signOut: 'sign-Out failed.',
  deckSave: 'Sorry, we were unable to save this deck',
  showOneDeck: 'Sorry, we can\'t show that deck right now',
  updateDeck: 'Sorry, we were unable to update that deck. ',
  deleteDeck: 'Delete Failed',
  noDecks: 'Sorry, you don\'t have any decks to show'
}

// chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage if it happens to be showing.
const setSuccessMessage = function (message) {
  $('#failMessage').hide()
  $('#successMessage').hide()
  $('#successMessage').text(message).show()
  hideMessage($('#successMessage'))
}
const hideMessage = (element) => {
  setTimeout(() => { element.hide() }, 3500)
}

// chooses the fail message to show via the parameter, updates, shows and sets a timeout on the #failMessage html element text, and hides the #successMessage if it happens to be showing.
const setFailMessage = function (message) {
  $('#successMessage').hide()
  $('#failMessage').hide()
  $('#failMessage').text(message).show()
  hideMessage($('#failMessage'))
}

module.exports = {
  success,
  fail,
  setSuccessMessage,
  setFailMessage
  // alertSuccess,
  // alertFail
}
