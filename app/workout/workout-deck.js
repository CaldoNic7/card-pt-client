const {
  suitsExercises,
  assembleDeck,
  renderDeck
} = require('./deck-size-and-values')

const generateDeck = (data) => {
  suitsExercises(data)
  assembleDeck()
  renderDeck()
}

module.exports = {
  generateDeck
}
