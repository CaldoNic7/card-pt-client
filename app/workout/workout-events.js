const getFormFields = require('./../../lib/get-form-fields')
const { generateDeck } = require('./workout-deck')
const { removeElement, updateSettings, changeSettings, checkCardCount, checkRepCount } = require('./deck-size-and-values')
const { manageView, views } = require('../store')

// onStartWorkout
const onStartWorkout = function (e) {
  e.preventDefault()
  const data = getFormFields(this)
  generateDeck(data)
  manageView(views.workoutView)
}

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
