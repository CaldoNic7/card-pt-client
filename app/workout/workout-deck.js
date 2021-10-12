const {
  suitsExercises,
  assembleDeck,
  renderDeck
} = require('./deck-size-and-values')

// receives data  from  onStartWorkout and passes it to suitsExercises to assign the selected exercise to the suit then runs the assembleDeck and renderDeck Functions
const generateDeck = (data) => {
  suitsExercises(data)
  assembleDeck()
  renderDeck()
}

module.exports = {
  generateDeck
}
