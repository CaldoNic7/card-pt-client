const { store, ownedDecks, createNewDeckDisabled } = require('./../store')
const { success, fail, setSuccessMessage, setFailMessage } = require('./../messages')

const onCreateDeckSuccess = function (response) {
  store.deck = response.deck
  ownedDecks.push(store.deck)

  createNewDeckDisabled()

  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.deckSave)
}

const onCreateDeckFail = function () {
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setFailMessage(fail.deckSave)
}

module.exports = {
  onCreateDeckSuccess,
  onCreateDeckFail
}
