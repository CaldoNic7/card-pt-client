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

const onSignOutSuccess = function () {
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

const onChangePasswordSuccess = function () {
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

const onIndexDecksSuccess = function (response) {
  store.decks = response.decks
  const decks = store.decks
  console.log(decks)

  let decksHtml = ''

  decks.forEach(deck => {
    if (store.user._id === deck.owner) {
      decksHtml += `
      <div class="deck">
        <style>
            h1 {
                background: none!important;
                border: none;
                padding: 2!important;
                color: black;
                text-decoration: underline;
                cursor: pointer;
                font-size: 18px;
              }
          </style>
          <div class="deckNameContainer">
            <h1><button style="text-transform:uppercase" type="button" class="deckNameButton" data-id=${deck._id}>${deck.name}</button><button type="button" class="deleteDeckFromDecksViewButton" data-id=${deck._id}>Delete Deck</button></h1>
          </div>
          <div class="diamondsContainer">
            <p style="text-transform:uppercase"><strong>DIAMONDS: </strong> ${deck.exercises[0]}</p>
          </div>
          <div class="heartsContainer">
            <p style="text-transform:uppercase"><strong>HEARTS: </strong> ${deck.exercises[1]}</p>
          </div>
          <div class="clubsContainer">
            <p style="text-transform:uppercase"><strong>CLUBS: </strong> ${deck.exercises[2]}</p>
          </div>
          <div class="spadesContainer">
            <p style="text-transform:uppercase"><strong>SPADES: </strong> ${deck.exercises[3]}<p>
          </div>
          <div class="timerContainer">
            <p style="text-transform:uppercase"><strong>TIMER: </strong> ${deck.timer}</p>
          </div>
      </div>
    `
    }
  })

  $('#my-decks-view').html(decksHtml)

  $('.toggler').trigger('click')
  formReset()
  manageView(views.myDecksView)
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.indexDecks)
}

const onShowDeckSuccess = function (response) {
  store.deck = response.deck
  const deckHtml = `
    <div class="deck">
        <form class="deckUpdate form-control">
          <div class="deckNameContainer">
            <button type="button">Deck Name</button>
            <input type="text" name="deck[name]" value="${store.deck.name}" required>
          </div><br>
          <div class="diamondsContainer">
          <button type="button">Diamonds</button>
          <input type="text" name="deck[exercises[]" value="${store.deck.exercises[0]}" required>
          </div><br>
          <div class="heartsContainer">
          <button type="button">Hearts</button>
          <input  type="text" name="deck[exercises[]" value="${store.deck.exercises[1]}" required>
          </div><br>
          <div class="clubsContainer">
          <button type="button">Clubs</button>
          <input type="text" name="deck[exercises[]" value="${store.deck.exercises[2]}" required>
          </div><br>
          <div class="spadesContainer">
          <button type="button">Spades</button>
          <input type="text" name="deck[exercises[]" value="${store.deck.exercises[3]}" required>
          </div><br>
          <div class="timerContainer">
          <button type="button">Timer</button>
          <input type="text" name="deck[timer]" value="${store.deck.timer}">
          </div><br>
          <div class="submitButtonContainer">
          <input type="submit" value="Save Changes">
          <button type="button" class="deleteDeckButton" data-id=${store.deck._id}>Delete Deck</button>
          </div>
        </form>
      </div>
    `
  $('#update-deck-view').html(deckHtml)
  formReset()
  manageView(views.updateDeckView)
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.showDeck)
}

const onUpdateDeckSuccess = function () {
  setSuccessMessage(success.updateDeck)
}

const onDeleteDeckSuccess = function () {
  setSuccessMessage(success.deleteDeck)
  manageView(views.emptyView)
  $('.toggler').trigger('click')
}

const onDeleteDeckFromDecksViewSuccess = function (id) {
  const decks = store.decks
  decks.forEach(deck => {
    if (id === deck._id) {
      const removeDeck = decks.indexOf(deck)
      console.log(removeDeck)
      const removed = decks.splice(removeDeck, 1)
      store.removed = removed[0].name
      console.log(store.removed)
      console.log(decks)
    }
  })
  let decksHtml = ''

  decks.forEach((deck) => {
    if (store.user._id === deck.owner) {
      decksHtml += `
      <div class="deck">
        <style>
            h1 {
                background: none!important;
                border: none;
                padding: 2!important;
                color: black;
                text-decoration: underline;
                cursor: pointer;
                font-size: 18px;
              }
          </style>
          <div class="deckNameContainer">
            <h1><button style="text-transform:uppercase" type="button" class="deckNameButton" data-id=${deck._id}>${deck.name}</button><button type="button" class="deleteDeckFromDecksViewButton" data-id=${deck._id}>Delete Deck</button></h1>
          </div>
          <div class="diamondsContainer">
            <p style="text-transform:uppercase"><strong>DIAMONDS: </strong> ${deck.exercises[0]}</p>
          </div>
          <div class="heartsContainer">
            <p style="text-transform:uppercase"><strong>HEARTS: </strong> ${deck.exercises[1]}</p>
          </div>
          <div class="clubsContainer">
            <p style="text-transform:uppercase"><strong>CLUBS: </strong> ${deck.exercises[2]}</p>
          </div>
          <div class="spadesContainer">
            <p style="text-transform:uppercase"><strong>SPADES: </strong> ${deck.exercises[3]}<p>
          </div>
          <div class="timerContainer">
            <p style="text-transform:uppercase"><strong>TIMER: </strong> ${deck.timer}</p>
          </div>
      </div>
    `
    }
  })

  $('#my-decks-view').html(decksHtml)

  $('#failMessage').hide()
  $('#successMessage').text(`${store.removed}${success.deleteDeck2}`).show()
  setTimeout(() => {
    $('#successMessage').hide()
  }, 4500)
  // setSuccessMessage(success.decksViewDelete)
}

const onSignUpFail = function () {
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setFailMessage(fail.signUp)
}

const onSignInFail = function () {
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setFailMessage(fail.signIn)
}

const onSignOutFail = function () {
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setFailMessage(fail.signOut)
}

const onChangePasswordFail = function () {
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setFailMessage(fail.general)
}

const onCreateDeckFail = function () {
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setFailMessage(fail.deckSave)
}

const onIndexDecksFail = function () {
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setFailMessage(fail.indexDecks)
}

const onShowDeckFail = function () {
  setFailMessage(fail.showOneDeck)
}

const onUpdateDeckFail = function () {
  setFailMessage(fail.updateDeck)
}

const onDeleteDeckFail = function () {
  setFailMessage(fail.deleteDeck)
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onCreateDeckSuccess,
  onIndexDecksSuccess,
  onShowDeckSuccess,
  onUpdateDeckSuccess,
  onDeleteDeckSuccess,
  onDeleteDeckFromDecksViewSuccess,
  onSignUpFail,
  onSignInFail,
  onSignOutFail,
  onChangePasswordFail,
  onCreateDeckFail,
  onIndexDecksFail,
  onShowDeckFail,
  onUpdateDeckFail,
  onDeleteDeckFail
}
