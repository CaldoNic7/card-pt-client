// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const { manageView } = require('./store')

$(() => {
  // start view listeners
  $(() => {
    // Sign-In
    $('#sign-in').on('submit', authEvents.onSignIn)
    // goe to sign-up View
    $('#sign-up-link').on('click', () => {
      manageView($('#sign-up-view'))
    })
  })

  // sign-up view listeners
  $(() => {
    // sign-up
    $('#sign-up').on('submit', authEvents.onSignUp)
    // go to start view
    $('#sign-in-link').on('click', () => {
      manageView($('#start-view'))
    })
  })

  //  Nav menu view listeners
  $(() => {
    // go to sign-up view
    $('#signUpFromMenu').on('click', () => {
      // clicks the menu icon to close it when the signUpFromMenu button is clicked
      $('.toggler').trigger('click')
      // hides everything but sign-up view
      manageView($('#sign-up-view'))
    })

    // go to start view
    $('#signInFromMenu').on('click', () => {
      // clicks the menu icon to close it when the signInFromMenu button is clicked
      $('.toggler').trigger('click')
      // hides everything but start view
      manageView($('#start-view'))
    })
    // sign-out
    $('#signOutFromMenu').on('click', authEvents.onSignOutFromMenu)

    // go to profile view
    $('#profileButton').on('click', () => {
      // hides everything except the profile view
      manageView($('#profile-view'))
      // clicks the menu icon to close it when the signInFromMenu button is clicked
      $('.toggler').trigger('click')
    })
    // go to my decks view
    $('#myDecksFromMenu').on('click', () => {
      // hides everything except the my decks view
      manageView($('#myDecks-view'))
      // clicks the menu icon to close it when the My Decks button is clicked
      $('.toggler').trigger('click')
    })

    // goes to deck view to create a new deck
    $('#newDeckButton').on('click', () => {
      // hides everything except deck view
      manageView($('#deck-view'))
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
  })

  // profile view listeners
  $(() => {
    // got to my decks view
    $('#my-decks-button').on('click', () => {
      manageView($('#myDecks-view'))
    })

    // go to workouts view
    $('#workouts-button').on('click', () => {
      manageView($('#workouts-view'))
    })
    // sign-out
    $('#sign-out-button').on('click', authEvents.onSignOutButton)
    // update password
    $('#change-password').on('submit', authEvents.onChangePassword)
  })

  // my decks view listeners
  $(() => {
    // edit target deck (will go back to deck view and load all of the data for that deck)
  })
})
