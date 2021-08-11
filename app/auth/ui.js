const { store, ownedDecks, manageView, manageMenuView, formReset, views } = require('./../store')
const { success, fail, setSuccessMessage, setFailMessage } = require('./../messages')
const { noDecksSpade } = require('./../dynamic_html')

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
  ownedDecks.length = 0
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
  ownedDecks.push(store.deck)
  formReset()
  // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
  setSuccessMessage(success.deckSave)
}

const onIndexDecksSuccess = function (response) {
  const allDecks = response.decks
  ownedDecks.length = 0
  allDecks.forEach(deck => {
    if (store.user._id === deck.owner) {
      ownedDecks.push(deck)
    }
  })
  ownedDecks.forEach(deck => {
  })

  let decksHtml = ''

  if (ownedDecks.length === 0) {
    decksHtml = `${noDecksSpade}`
    $('#deck-container').html(decksHtml)
  } else {
    let orderNumber = ownedDecks.length
    ownedDecks.forEach((deck) => {
      if (store.user._id === deck.owner) {
        decksHtml += `
      <div class="deck" style="order: ${orderNumber}">
            <h1><span class="editIcon">edit><button type="button" class="deckNameButton" data-id=${deck._id}>${deck.name}</button></span>
              <input type="image" src="public/delete_small.png" id="trashcan" class="trashcanButton" data-id="${deck._id}" style="cursor:pointer">
            </h1>
            <form>
              <div class="txt_field">
                <input name="deck[exercises[]" type="text" value="${deck.exercises[0]}" required disabled>
                <span class="line"></span>
                <label for="spade" type="text">♠</label>
              </div>
              <div class="txt_field">
                <input name="deck[exercises[]" type="text" value="${deck.exercises[1]}" required disabled>
                <span class="line"></span>
                <label for="diamond" type="text"><span class="redIcon">♦</span>Exercise:</label>
              </div>
              <div class="txt_field">
                <input name="deck[exercises[]" type="text" value="${deck.exercises[2]}" required disabled>
                <span class="line"></span>
                <label for="club" type="text">♣ Exercise:</label>
              </div>
              <div class="txt_field">
                <input name="deck[exercises[]" type="text" value="${deck.exercises[3]}"required disabled>
                <span class="line"></span>
                <label for="heart" type="text"><span class="redIcon">♥</span>Exercise:</label>
              </div>
              <div class="txt_field">
                <input name="deck[timer]" type="number" value="${deck.timer}" required disabled>
                <span class="line"></span>
                <label for="timer" type="text">Timer: minutes (ie. 65)</label>
              </div>
            </form>
      </div>
    `
      }
      orderNumber--
    })
    // chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage.
    setSuccessMessage(success.indexDecks)
    $('#deck-container').html(decksHtml)
  }

  document.getElementById('checkbox').checked === true ? $('.toggler').trigger('click') : console.log('is not checked')
  formReset()
  manageView(views.myDecksView)
}

const onShowDeckSuccess = function (response) {
  store.deck = response.deck
  if (store.deck.timer === null) {
    store.deck.timer = ''
  }
  const deckHtml = `
    <div class="center">
        <h1 id="showDeckName">${store.deck.name}</h1>
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
          <div id="go-to-my-decks-from-update" class="pass">Back to My Decks?</div>
          <input type="submit" value="Save Deck">
          <div class="nav_link">
            Want to delete this deck? <span id="deleteDeckButton" data-id="${store.deck._id}">Delete Deck</span></div>
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

const onUpdateDeckSuccess = function (data) {
  $('#showDeckName').text(data.deck.name)
  setSuccessMessage(success.updateDeck)
}

const onDeleteDeckSuccess = function () {
  setSuccessMessage(success.deleteDeck1)
  manageView(views.emptyView)
  $('.toggler').trigger('click')
}

const onDeleteDeckFromDecksViewSuccess = function (id) {
  let removedDeckName = ''
  ownedDecks.forEach((deck) => {
    if (id === deck._id) {
      removedDeckName = deck.name
    }
  })
  ownedDecks.forEach((deck) => {
    if (id === deck._id) {
      const removedDeckIndex = ownedDecks.indexOf(deck)
      ownedDecks.splice(removedDeckIndex, 1)
    }
  })

  let decksHtml = ''

  if (ownedDecks.length === 0) {
    decksHtml = `${noDecksSpade}`
    $('#deck-container').html(decksHtml)
  } else {
    const orderNumber = ownedDecks.length
    ownedDecks.forEach((deck) => {
      if (store.user._id === deck.owner) {
        decksHtml += `
      <div class="deck" style="order: ${orderNumber}">
            <h1><span class="editIcon">edit><button type="button" class="deckNameButton" data-id=${deck._id}>${deck.name}</button></span>
              <input type="image" src="public/delete_small.png" id="trashcan" class="trashcanButton" data-id="${deck._id}" style="cursor:pointer">
            </h1>
            <form>
              <div class="txt_field">
                <input name="deck[exercises[]" type="text" value="${deck.exercises[0]}" required disabled>
                <span class="line"></span>
                <label for="spade" type="text">♠</label>
              </div>
              <div class="txt_field">
                <input name="deck[exercises[]" type="text" value="${deck.exercises[1]}" required disabled>
                <span class="line"></span>
                <label for="diamond" type="text"><span class="redIcon">♦</span></label>
              </div>
              <div class="txt_field">
                <input name="deck[exercises[]" type="text" value="${deck.exercises[2]}" required disabled>
                <span class="line"></span>
                <label for="club" type="text">♣</label>
              </div>
              <div class="txt_field">
                <input name="deck[exercises[]" type="text" value="${deck.exercises[3]}"required disabled>
                <span class="line"></span>
                <label for="heart" type="text"><span class="redIcon">♥</span></label>
              </div>
              <div class="txt_field">
                <input name="deck[timer]" type="number" value="${deck.timer}" required disabled>
                <span class="line"></span>
                <label for="timer" type="text">Timer: minutes (ie. 65)</label>
              </div>
            </form>
      </div>
    `
      }
      $('#deck-container').html(decksHtml)
    })
  }

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
