// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const { manageView, formReset, views } = require('./store')

$(() => {
  // start view listeners
  $(() => {
    // Sign-In
    $('#sign-in').on('submit', authEvents.onSignIn)
    // goe to sign-up View
    $('#sign-up-link').on('click', () => {
      console.log('sign-up-link clicked')
      formReset()
      manageView(views.signUpView)
    })
  })

  // sign-up view listeners
  $(() => {
    // sign-up
    $('#sign-up').on('submit', authEvents.onSignUp)
    // go to start view
    $('#sign-in-link').on('click', () => {
      formReset()
      manageView(views.startView)
    })
  })

  //  Nav menu view listeners
  $(() => {
    // go to sign-up view
    $('#signUpFromMenu').on('click', () => {
      formReset()
      // clicks the menu icon to close
      $('.toggler').trigger('click')
      // hides everything but sign-up view
      manageView(views.signUpView)
    })

    // go to start view
    $('#signInFromMenu').on('click', () => {
      formReset()
      // clicks the menu icon to close it
      $('.toggler').trigger('click')
      // hides everything but start view
      manageView(views.startView)
    })
    // sign-out
    $('#signOut').on('click', authEvents.onSignOut)

    // go to change password view
    $('#changePasswordButton').on('click', () => {
      formReset()
      // hides everything except the change password view
      // manageView(views.changePasswordView)
      console.log('button clicked')
      $('#change-password-view').toggle()
    })
    // go to my decks view
    $('#myDecks').on('click', authEvents.onIndexDecks)

    // goes to deck view to create a new deck
    $('#newDeckButton').on('click', () => {
      formReset()
      // hides everything except deck view
      manageView(views.deckView)
      // clicks the menu icon to close it when the My Decks button is clicked
      $('.toggler').trigger('click')
    })
  })

  // deck view listeners
  $(() => {
    // create deck
    $('#deck').on('submit', authEvents.onDeckCreation)
    // name button
    // diamond button
    // heart button
    // club button
    // spade button
    // 1/4 deck button
    // 1/2 deck button
    // 3/4 deck button
    // full deck button
    // update deck
  })

  // Change Password view listeners
  $(() => {
    // got to my decks view
    $('#my-decks-button').on('click', () => {
      formReset()
      manageView(views.myDecksView)
    })

    // go to workouts view
    // $('#workouts-button').on('click', () => {
    //   formReset()
    //   manageView(views.workoutsView)
    // })
    // sign-out
    $('#sign-out-button').on('click', authEvents.onSignOutButton)
    // update password
    $('#change-password').on('submit', authEvents.onChangePassword)
  })

  // my decks view listeners
  $(() => {
    // edit target deck (will go back to deck view and load all of the data for that deck)
    $('#my-decks-view').on('click', '.deckNameButton', authEvents.onShowOneDeck)
    // delete target deck (will make new index api call)
    $('#my-decks-view').on('click', '.deleteDeckFromDecksViewButton', authEvents.onDeleteDeckFromDecksView)
    // create a new deck button changes view to deck view.
    $('#my-decks-view').on('click', '#createNewDeckButton', () => {
      formReset()
      // hides everything except deck view
      manageView(views.deckView)
    })
    // update deck view listeners
    $(() => {
      $('#update-deck-view').on('submit', '.deckUpdate', authEvents.onDeckUpdate)
      // name button
      // diamond button
      // heart button
      // club button
      // spade button
      // 1/4 deck button
      // 1/2 deck button
      // 3/4 deck button
      // full deck button
      // delete deck button
      $('#update-deck-view').on('click', '.deleteDeckButton', authEvents.onDeleteDeck)
    })
  })
})
