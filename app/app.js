// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const { manageView } = require('./store')

$(() => {
  // User Account Action listeners (form listeners)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#signOutButton').on('click', authEvents.onSignOut)

  // button listeners
  $('#sign-up-link').on('click', () => {
    console.log('sing-up-link button clicked')
    manageView($('#sign-up-view'))
  })
  $('#sign-in-link').on('click', () => {
    console.log('sing-in-link button clicked')
    manageView($('#start-view'))
  })
})
