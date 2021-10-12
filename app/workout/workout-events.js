const getFormFields = require('./../../lib/get-form-fields')
const { generateDeck } = require('./workout-deck')
const { removeElement, updateSettings, changeSettings, checkCardCount, checkRepCount } = require('./deck-size-and-values')
const { manageView, views } = require('../store')

// when the user starts the workout onStartWorkout gets the data from the form and passes it to generateDeck and changes the view to workoutView
const onStartWorkout = function (e) {
  e.preventDefault()
  const data = getFormFields(this)
  generateDeck(data)
  manageView(views.workoutView)
}

// shows the settings view
const onShowSettings = () => {
  $('#deck-settings-view').show()
}

const onUpdateSettings = function (e) {
  e.preventDefault()
  const data = getFormFields(this)
  if (data.settings.jokers) {
    data.settings.jokers = 'true'
  } else {
    data.settings.jokers = 'false'
  }
  updateSettings(data)
}

// When changes are made to deck settings onChange gets the name and value of the setting that was changed and passes it to the changeSettings function, then it checks the current card count and rep count using the checkCardCount and checkRepCount functions
const onChange = function (e) {
  const element = e.target
  let name = element.name
  let value = element.value
  if (element.id === 'jokers') {
    name = element.name
    value = element.checked
  }
  const data = [name, value]
  changeSettings(data)
  checkCardCount()
  checkRepCount()
}

const onRemoveElement = () => {
  removeElement()
}

module.exports = {
  onStartWorkout,
  onShowSettings,
  onUpdateSettings,
  onChange,
  onRemoveElement
}
