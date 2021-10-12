const { exercises } = require('./../store')
const { endOfWorkoutCard } = require('./../dynamic_html')

const randomExercise = () => exercises[Math.floor(Math.random() * exercises.length)]

// container for assigning an exercise to a suit
const suits = [
  { suit: 'spades', exercise: '' },
  { suit: 'diamonds', exercise: '' },
  { suit: 'clubs', exercise: '' },
  { suit: 'hearts', exercise: '' }
]

// receives data from onStartWorkout and re-assigns the value of `suits.exercise` for the corresponding  `suits.suit`.
const suitsExercises = (data) => {
  data.deck.exercises.forEach((exercise, index) => {
    suits[index].exercise = exercise
  })
}

// used to generate the deck based on the settings selected.
const ranks = {
  numberCards: [2, 3, 4, 5, 6, 7, 8, 9, 10],
  faceCards: ['J', 'Q', 'K', 'A'],
  wildcards: ['rJoker', 'bJoker']
}

// container for adding or removing the numbers and letters that represent cards before they are assigned a suit before final deck is created.
let deck = []

let assembledDeck = []

// deckSize will be 1 (number cards only), 2 (full deck) or 3 (face cards only)
let deckSize = 2

// boolean where true includes jokers and false excludes jokers
let withJokers = false

// will equal 1 ,2 or 3 changes the number of cards in a deck. 1 'decks' worth of cards, 2 'decks' worth of cards etc...
let numOfDecks = 1

// aceVal will equal 15 or 20
let aceVal = 20

// will equal 1 (default), 2 or 3
let repMultiplier = 1

// boolean where true = [11,12,13] and false = 10
let faceVal = false

let cardCount
let repCount

const repsDefault = [
  { key: 2, value: 2 },
  { key: 3, value: 3 },
  { key: 4, value: 4 },
  { key: 5, value: 5 },
  { key: 6, value: 6 },
  { key: 7, value: 7 },
  { key: 8, value: 8 },
  { key: 9, value: 9 },
  { key: 10, value: 10 },
  { key: 'J', value: faceVal ? 11 : 10 },
  { key: 'Q', value: faceVal ? 12 : 10 },
  { key: 'K', value: faceVal ? 13 : 10 },
  { key: 'A', value: aceVal },
  { key: 'redJoker', value: Math.floor(Math.random() * (26 - 5) + 5) },
  { key: 'blackJoker', value: Math.floor(Math.random() * (26 - 5) + 5) }
]

const reps = [
  { key: 2, value: '' },
  { key: 3, value: '' },
  { key: 4, value: '' },
  { key: 5, value: '' },
  { key: 6, value: '' },
  { key: 7, value: '' },
  { key: 8, value: '' },
  { key: 9, value: '' },
  { key: 10, value: '' },
  { key: 'J', value: '' },
  { key: 'Q', value: '' },
  { key: 'K', value: '' },
  { key: 'A', value: '' },
  { key: 'redJoker', value: '' },
  { key: 'blackJoker', value: '' }
]

const updateSettings = (data) => {
  const { aceValue, deckQty, faceValue, jokers, multiplier } = data.settings
  deckSize = data.settings.deckSize
  withJokers = jokers
  numOfDecks = deckQty
  aceVal = aceValue
  repMultiplier = multiplier
  faceVal = faceValue
  $('#deck-settings-view').hide()
}
const changeSettings = (data) => {
  console.log(`start change settings values: deckSize-${deckSize}, withJokers-${withJokers}, numOfDecks-${numOfDecks}, aceVal-${aceVal}, faceVal-${faceVal}, repMultiplier-${repMultiplier}, cardCount-${cardCount}, repCount-${repCount}`)
  const name = data[0]
  const value = data[1]
  if (name === 'settings[deckSize]') {
    deckSize = value
  } else if (name === 'settings[jokers]') {
    withJokers = value
  } else if (name === 'settings[deckQty]') {
    numOfDecks = value
  } else if (name === 'settings[aceValue]') {
    console.log('aceValue is', value)
    aceVal = value
  } else if (name === 'settings[faceValue]') {
    console.log('faceValue is', value)
    faceVal = value
  } else if (name === 'settings[multiplier]') {
    console.log('multiplier is', value)
    repMultiplier = value
  }
  console.log(
      `end change settings values: deckSize-${deckSize}, withJokers-${withJokers}, numOfDecks-${numOfDecks}, aceVal-${aceVal}, faceVal-${faceVal}, repMultiplier-${repMultiplier}, cardCount-${cardCount}, repCount-${repCount}`
  )
}

// changes the size of the deck based on the values of deckSize, withJokers and numbOfDecks.
const changeDeckSize = () => {
  deck = []
  assembledDeck = []
  if (deckSize === 1 || deckSize === '1') {
    deck = ranks.numberCards
  } else if (deckSize === 2 || deckSize === '2') {
    ranks.numberCards.forEach(i => deck.push(i))
    ranks.faceCards.forEach(i => deck.push(i))
  } else {
    deck = ranks.faceCards
  }
}

// changes the repetition value for each card based on the values of aceVal, faceVal, and repMultiplier
const repSetter = () => {
  console.log('at start of repSetter', `reps:${reps}`)
  reps.forEach(obj => {
    const index = reps.indexOf(obj)
    obj.value = repsDefault[index].value * repMultiplier
  })
  console.log('at end of repSetter', `reps:${reps}`)
}

const checkCardCount = () => {
  console.log(
      `start checkCardCount values: deckSize-${deckSize}, withJokers-${withJokers}, numOfDecks-${numOfDecks}, aceVal-${aceVal}, faceVal-${faceVal}, repMultiplier-${repMultiplier}, cardCount-${cardCount}, repCount-${repCount}`
  )
  cardCount = 0
  changeDeckSize()
  cardCount = (deck.length * suits.length) * numOfDecks
  if (withJokers) {
    cardCount += (2 * numOfDecks)
  }
  $('#card-number').text(cardCount)
  console.log(
      `end checkCardCount values: deckSize-${deckSize}, withJokers-${withJokers}, numOfDecks-${numOfDecks}, aceVal-${aceVal}, faceVal-${faceVal}, repMultiplier-${repMultiplier}, cardCount-${cardCount}, repCount-${repCount}`
  )
}

const checkRepCount = () => {
  console.log(
    `start checkRepCount values: deckSize-${deckSize}, withJokers-${withJokers}, numOfDecks-${numOfDecks}, aceVal-${aceVal}, faceVal-${faceVal}, repMultiplier-${repMultiplier}, cardCount-${cardCount}, repCount-${repCount}`
  )
  repCount = 0
  repSetter()
  const jokerValue = (reps[13].value + reps[14].value) * numOfDecks
  if (deckSize === 1) {
    repCount = 0
    let i = 0
    let repsNumForSuit = 0
    while (i < 9) {
      repsNumForSuit += reps[i].value * numOfDecks
      i++
    }
    repCount += repsNumForSuit * 4
    if (withJokers) {
      repCount += jokerValue
      $('#joker-value').text(`Joker Value: ${jokerValue}`)
      $('#joker-value').show()
    } else {
      $('#joker-value').hide()
    }
    $('#reps-number').text(repCount)
  } else if (deckSize === 2) {
    repCount = 0
    let i = 0
    let repsNumForSuit = 0
    while (i < 13) {
      repsNumForSuit += reps[i].value * numOfDecks
      i++
    }
    repCount = repsNumForSuit * 4
    if (withJokers) {
      repCount += jokerValue
      $('#joker-value').text(`Joker Value: ${jokerValue}`)
      $('#joker-value').show()
    } else {
      $('#joker-value').hide()
    }
    $('#reps-number').text(repCount)
  } else {
    repCount = 0
    let i = 10
    let repsNumForSuit = 0
    while (i < 14) {
      repsNumForSuit += reps[i].value * numOfDecks
      i++
    }
    repCount += repsNumForSuit * 4
    if (withJokers) {
      repCount += jokerValue
      $('#joker-value').text(`Joker Value: ${jokerValue}`)
      $('#joker-value').show()
    } else { $('#joker-value').hide() }
    $('#reps-number').text(repCount)
  }
  console.log(
      `end checkRepCount values: deckSize-${deckSize}, withJokers-${withJokers}, numOfDecks-${numOfDecks}, aceVal-${aceVal}, faceVal-${faceVal}, repMultiplier-${repMultiplier}, cardCount-${cardCount}, repCount-${repCount}`
  )
}

const assembleDeck = () => {
  changeDeckSize()
  repSetter()
  let iterations = 0
  let repCount = 0
  while (iterations < numOfDecks) {
    suits.forEach(suit => {
      deck.forEach(value => {
        reps.forEach(index => {
          if (index.key === value) {
            repCount = index.value
          }
        })
        const card = { Value: value, Suit: suit.suit, Exercise: suit.exercise, Reps: repCount }
        assembledDeck.push(card)
      })
    })
    if (withJokers === true || withJokers === 'true') {
      ranks.wildcards.forEach(joker => {
        reps.forEach(index => {
          if (index.key === joker) {
            repCount = index.value
          }
        })
        const card = { Value: joker, Suit: 'wild', Exercise: randomExercise(), Reps: repCount }
        assembledDeck.push(card)
      })
    }
    iterations++
  }
  shuffle()
}

const shuffle = () => {
  // for 2000 turns switch the values of two random cards
  for (let i = 0; i < 2000; i++) {
    const location1 = Math.floor((Math.random() * assembledDeck.length))
    const location2 = Math.floor((Math.random() * assembledDeck.length))
    const tmp = assembledDeck[location1]

    assembledDeck[location1] = assembledDeck[location2]
    assembledDeck[location2] = tmp
  }
}

const cardIdArr = []

const renderDeck = () => {
  let cardHtml = ''

  assembledDeck.forEach((card, index) => {
    const val = card.Value
    const suit = card.Suit
    const exc = card.Exercise
    const reps = card.Reps
    const iteration = index
    const id = `${val}-of-${suit}-${iteration}`
    cardIdArr.push(id)

    let icon = '<span class="black">♠</span>'
    let colorClass = 'black'

    if (suit == 'diamonds') {
      icon = '<span class="red">♦</span>'
      colorClass = 'red'
    } else if (suit == 'clubs') {
      icon = '<span class="black">♣</span>'
      colorClass = 'black'
    } else if (suit == 'hearts') {
      icon = '<span class="red">♥</span>'
      colorClass = 'red'
    }

    cardHtml += `
      <div id="${val}-of-${suit}-${iteration}" class="${suit} black">
        <div class="top"><span class="A ${colorClass}">${val}</span>${icon}</div>
        <h3 class="topText ${colorClass}">${exc}</h3>
        <h1 class="centerIcon ${colorClass}">${icon}</h1>
        <h3 class="bottomText ${colorClass}">${reps} Reps</h3>
        <div class="bottom"><span class="A ${colorClass}">${val}</span>${icon}</div>
      </div>
  `
  })
  // console.log(cardHtml)
  $('#workout-container').html(cardHtml)
  console.log(assembledDeck)
}

const removeElement = () => {
  assembledDeck.pop()
  if (assembledDeck.length === 0) {
    $('#workout-container').html(endOfWorkoutCard)
  } else {
    renderDeck()
  }
}

module.exports = {
  suitsExercises,
  assembleDeck,
  updateSettings,
  renderDeck,
  removeElement,
  changeSettings,
  checkCardCount,
  checkRepCount,
  assembledDeck,
  repsDefault,
  reps
}
