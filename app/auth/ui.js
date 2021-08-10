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
  $('#user-email').text(`EMAIL: ${store.user.email}`)
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
  const allDecks = response.decks
  const decks = []
  allDecks.forEach(deck => {
    if (store.user._id === deck.owner) {
      decks.push(deck)
    }
    store.decks = decks
  })

  let decksHtml = ''

  if (decks.length === 0) {
    decksHtml = `
      <div id="aceOfSpades" class="outline shadow rounded black">
        <div class="top"><span class="A">A</span><span>♠</span></div>
        <h2 id="noDecks" class="red">You haven't created a deck yet!</h2>
        <h1 id="noDeckSpade">♠</h1>
        <div id="createNewDeckButton" class="nav_link">Create A New Deck</div>
        <div class="bottom black"><span>A<span><span>♠</span></div>
      </div>
    `
  } else {
    decks.forEach(deck => {
      if (store.user._id === deck.owner) {
        decksHtml += `
      <div class="deck">
          <div class="deckNameContainer">
            <span class="editIcon">edit><button type="button" class="deckNameButton" data-id=${deck._id}>${deck.name}</button><button type="button" class="deleteDeckFromDecksViewButton" data-id=${deck._id}>Delete Deck</button></span>
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
    setSuccessMessage(success.indexDecks)
  }

  $('#my-decks-view').html(decksHtml)
  $('.toggler').trigger('click')
  formReset()
  manageView(views.myDecksView)
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
}

const onShowDeckSuccess = function (response) {
  store.deck = response.deck
  if (store.deck.timer === null) {
    store.deck.timer = ''
  }
  const deckHtml = `
    <div class="center deck">
        <h1>${store.deck.name}</h1>
        <form id="deck" class="deckUpdate form-control">
          <div class="txt_field">
            <input id="deckName" name="deck[name]" type="text" value="${store.deck.name}" required>
            <span class="line"></span>
            <label for="deckName" type="text">♠<span class="redIcon">♦</span>♣<span class="redIcon">♥</span> Deck
              Name:</label>
          </div>
          <div class="txt_field">
            <input name="deck[exercises[]" id="spadesExercise" type="text" value="${store.deck.exercises[0]}" required>
            <span class="line"></span>
            <label for="spade" type="text">♠ Exercise:</label>
          </div>
          <div class="txt_field">
            <input name="deck[exercises[]" id="diamondsExercise" type="text" value="${store.deck.exercises[1]}" required>
            <span class="line"></span>
            <label for="diamond" type="text"><span class="redIcon">♦</span>Exercise:</label>
          </div>
          <div class="txt_field">
            <input name="deck[exercises[]" id="clubsExercise" type="text" value="${store.deck.exercises[2]}" required>
            <span class="line"></span>
            <label for="club" type="text">♣ Exercise:</label>
          </div>
          <div class="txt_field">
            <input name="deck[exercises[]" id="heartsExercise" type="text" value="${store.deck.exercises[3]}" required>
            <span class="line"></span>
            <label for="heart" type="text"><span class="redIcon">♥</span>Exercise:</label>
          </div>
          <div class="txt_field">
            <input name="deck[timer]" id="minutes" type="text" value="${store.deck.timer}">
            <span class="line"></span>
            <label for="timer" type="text">Timer: minutes (ie. 65)</label>
          </div>
          <div class="pass">Back to My Decks?</div>
          <input type="submit" value="Save Deck">
          <div class="nav_link">
            Want to delete this deck? <span class="deleteDeckButton" data-id="${store.deck._id}">Delete Deck</span></div>
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
  let decks = store.decks
  let removedDeckName = ''
  decks.forEach(deck => {
    if (id === deck._id) {
      removedDeckName = deck.name
    }
  })
  const newDeck = []
  decks.forEach(deck => {
    if (id !== deck._id) {
      console.log('this is the deck that will be added to the new array', deck)
      newDeck.push(deck)
    }
    store.decks = newDeck
    decks = store.decks
  })

  let decksHtml = ''
  if (decks.length === 0) {
    decksHtml = `
      <div id="aceOfSpades" class="outline shadow rounded black">
        <div class="top"><span class="A">A</span><span>♠</span></div>
        <h2 id="noDecks" class="red">You haven't created a deck yet!</h2>
        <h1 id="noDeckSpade">♠</h1>
        <button id="createNewDeckButton" class="red">Create A New Deck</button>
        <div class="bottom black"><span>A<span><span>♠</span></div>
      </div>
    `
  } else {
    decks.forEach((deck) => {
      if (store.user._id === deck.owner) {
        decksHtml += `
      <div class="deck">
          <div class="deckNameContainer">
            <span class="editIcon">edit><button type="button" class="deckNameButton" data-id=${deck._id}>${deck.name}</button><button type="button" class="deleteDeckFromDecksViewButton" data-id=${deck._id}>Delete Deck</button></span>
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
  }

  $('#my-decks-view').html(decksHtml)

  $('#failMessage').hide()
  $('#successMessage').text(`${removedDeckName}${success.deleteDeck2}`).show()
  setTimeout(() => {
    $('#successMessage').hide()
  }, 4500)
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
