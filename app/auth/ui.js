const { store, manageView, manageMenuView, formReset, views } = require('./../store')
const { success, fail, setSuccessMessage, setFailMessage } = require('./../messages')

const onSignUpSuccess = function (response) {
  store.email = response.user.email
  formReset()
  // hides everything but the start view.
  manageView(views.startView)
  $('#signInEmail').val(store.email)
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.signUp)
}

const onSignInSuccess = function (response) {
  store.user = response.user
  formReset()
  // on successful sign in hides sign-in and sign-up options and shows the rest.
  manageMenuView()
  // hides everything but the deck-view.
  manageView(views.deckView)
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.signIn)
}

const onSignOutFromMenuSuccess = function () {
  formReset()
  // click the menu icon to close it on successful sign-out
  $('.toggler').trigger('click')
  // on successful sign out shows sign-in and sing-up options and hides the rest.
  manageMenuView()
  // hides everything but the start view.
  manageView(views.startView)
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.signOut)
}
const onSignOutButtonSuccess = function () {
  formReset()
  // on successful sign out shows sign-in and sing-up options and hides the rest.
  manageMenuView()
  // hides everything but the start view.
  manageView(views.startView)
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.signOut)
}

const onChangePasswordSuccess = function (response) {
  formReset()
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.changePW)
}

const onCreateDeckSuccess = function (response) {
  store.deck = response.deck
  formReset()
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.deckSave)
}

const onIndexDecksFromMenuSuccess = function (response) {
  console.log(response)
  const decks = response.decks
  console.log(decks)

  let decksHtml = ''

  decks.forEach(deck => {
    decksHtml += `
      <div class="deck">
        <form class="form-control">
          <button type="button">Deck Name</button>
          <input  class="collapse" type="text" name="deck[exercise[]" value="${deck.name}" required>

          <button type="button">Diamonds</button>
          <input type="text" name="deck[exercises[]" value="${deck.exercises[0]}" required>

          <button type="button">Hearts</button>
          <input  type="text" name="deck[exercises[]" value="${deck.exercises[1]}" required>

          <button type="button">Clubs</button>
          <input type="text" name="deck[exercises[]" value="${deck.exercises[2]}" required>

          <button type="button">Spades</button>
          <input type="text" name="deck[exercises[]" value="${deck.exercises[3]}" required>

          <button type="button">Timer</button>
          <input type="text" name="deck[timer]" value="${deck.timer}" required>

          <input type="submit" value="Save Changes">

        </form>
      </div>
    `
  })

  $('#my-decks-view').html(decksHtml)

  $('.toggler').trigger('click')
  formReset()
  manageView(views.myDecksView)
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.indexDecks)
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

const onIndexDecksFail = function (response) {
  console.log(response)
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setFailMessage(fail.indexDecks)
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutFromMenuSuccess,
  onSignOutButtonSuccess,
  onChangePasswordSuccess,
  onCreateDeckSuccess,
  onIndexDecksFromMenuSuccess,
  onSignUpFail,
  onSignInFail,
  onSignOutFail,
  onChangePasswordFail,
  onCreateDeckFail,
  onIndexDecksFail
}
