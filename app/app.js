// const { onDeckCreation } = require('./auth/events')
const {
  onStartWorkout,
  onShowSettings,
  onUpdateSettings,
  onChange,
  onRemoveElement
} = require('./workout/workout-events')
const { exercises, randomDeckNames, views, manageView, formReset } = require('./store')

$(() => {
  // start view listeners
  $(() => {
    $('#title').on('click', () => { manageView(views.deckView) })
    $('#vertical-title').on('click', () => { manageView(views.deckView) })
  })
  // deck view listeners
  $(() => {
    // form - create deck
    $('#deck').on('submit', onStartWorkout)
    // button - autofill the form to create a deck with exercises
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
    // button - show deck settings
    $('#deck-settings-button').on('click', onShowSettings)
  })

  // deck settings view listeners
  $(() => {
    // button - hide deck settings
    $('#close-settings').on('click', () => {
      $('#deck-settings-view').hide()
    })
    // form - submit deck settings
    $('#deck-settings').on('submit', onUpdateSettings)
    // on-change deck settings
    $('#deck-settings').on('change', onChange)
  })

  // workout view listeners
  $(() => {
    // complete card
    $('#workout-view').on('click', onRemoveElement)
    $('#workout-container').on('click', '#create-new-deck-button', () => {
      formReset()
      manageView(views.deckView)
    })
  })
})
