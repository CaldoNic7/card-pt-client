
const success = {
  signIn: 'Success! You are now signed in!',
  signOut: 'Thank\'s for using CARDio!, you are now signed out',
  signUp: 'Thank\'s for joining! Now sign-in, create your deck and crush a workout!',
  changePW: 'Success! You\'re password has been updated',
  deckSave: 'Deck saved.'
}

const fail = {
  general: 'Uh Oh! Something went wrong. Please try again.',
  signUp: 'Sign-Up failed. Please try again.',
  signIn: 'Sign-In failed. Please try again',
  signOut: 'sign-Out failed. Please try again',
  deckSave: 'Could not save deck. Please check that you have filled out all required fields and try again'
}

// chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage if it happens to be showing.
const setSuccessMessage = function (message) {
  $('failMessage').hide()
  $('#successMessage').text(message).show()
  setTimeout(() => {
    $('#successMessage').hide()
  }, 4500)
}

// chooses the fail message to show via the parameter, updates, shows and sets a timeout on the #failMessage html element text, and hides the #successMessage if it happens to be showing.
const setFailMessage = function (message) {
  $('SuccessMessage').hide()
  $('#failMessage').text(message).show()
  setTimeout(() => { $('#failMessage').hide() }, 4500)
}

module.exports = {
  success,
  fail,
  setSuccessMessage,
  setFailMessage
}
