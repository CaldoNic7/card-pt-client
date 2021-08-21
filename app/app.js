const authEvents = require('./auth/events')
const { manageView, formReset, views, exercises, randomDeckNames } = require('./store')

$(() => {
  // start view listeners
  $(() => {
    // Sign-In
    $('#sign-in').on('submit', authEvents.onSignIn)
    // goe to sign-up View
    $('#sign-up-link').on('click', () => {
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
      // clicks the menu icon to close it when the My Decks button is clicked
      $('.toggler').trigger('click')
      // hides everything except the change password view
      // manageView(views.changePasswordView)
      manageView(views.changePasswordView)
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
  // Change Password view listeners
  $(() => {
    // update password
    $('#change-password').on('submit', authEvents.onChangePassword)
  })

  // deck view listeners
  $(() => {
    // create deck
    $('#deck').on('submit', authEvents.onDeckCreation)
    // my decks button
    $('#go-to-my-decks').on('click', () => {
      authEvents.onIndexDecks()
    })
    $('#autofill').on('click', () => {
      $('#minutes').val(function (e, c) {
        c = ''
        return Math.floor(Math.random() * (91 - 30) + 30)
      })
      const array = []
      while (array.length < 4) {
        const exercise = exercises[Math.floor(Math.random() * exercises.length)]
        array.indexOf(exercise) === -1 && array.push(exercise)
      }
      $('#spadesExercise').val(array[0])
      $('#diamondsExercise').val(array[1])
      $('#clubsExercise').val(array[2])
      $('#heartsExercise').val(array[3])
      $('#deckName').val(randomDeckNames[Math.floor(Math.random() * randomDeckNames.length)])
    })

    // my decks view listeners
    $(() => {
    // edit target deck (will go back to deck view and load all of the data for that deck)
      $('#deck-container').on('click', '.deckNameButton', authEvents.onShowOneDeck)
      // delete target deck (will make new index api call)
      $('#deck-container').on('click', '#trashcan', authEvents.onDeleteDeckFromDecksView)
      // create a new deck button changes view to deck view.
      $('#deck-container').on('click', '#createNewDeckButton', () => {
        formReset()
        // hides everything except deck view
        manageView(views.deckView)
      })
    })

    // update deck view listeners
    $(() => {
      $('#update-deck-view').on('submit', '#deck', authEvents.onDeckUpdate)
      $('#update-deck-view').on('click', '.deckNameButton', authEvents.onShowOneDeck)
      $('#update-deck-view').on('click', '#deleteDeckButton', authEvents.onDeleteDeck)
      $('#update-deck-view').on('click', '#trashcan', authEvents.onDeleteDeckFromDecksView)
      $('#update-deck-view').on('click', '#go-to-my-decks-from-update', () => {
        authEvents.onIndexDecks()
      })
    })

    // empty view listeners
    $('#emptyView').on('click', '#createNewDeckButton', () => {
      formReset()
      manageView(views.deckView)
    })
    $('#emptyView').on('click', '#go-to-my-decks', () => {
      authEvents.onIndexDecks()
    })
  })
})
