decks: Array(32)
0:
createdAt: "2021-08-05T20:01:16.382Z"
exercises: (4) ["Push-Up", "Decline Push-Up", "Negative Push-Up", "Spiderman Push-Up"]
name: "Welcome to the Push-Up Club"
owner: "610c32d88d8d301de318c01e"
personalRecord: []
timer: 45
updatedAt: "2021-08-05T21:04:06.586Z"
__v: 0
_id: "610c438c45e9de208b6fdd3f"

1:
createdAt: "2021-08-05T20:16:46.706Z"
exercises: (4) ["Push Up", "Squat", "v-Up", "Burpee"]
name: "Queen of Hearts"
owner: "610c32d88d8d301de318c01e"
personalRecord: []
timer: 35
updatedAt: "2021-08-05T20:16:46.706Z"
__v: 0
_id: "610c472ed3f47f2246e8e987"


// create update form for each indexed deck
 let decksHtml = ''

  decks.forEach(deck => {
    decksHtml += `
      <div class="deck">
        <form class="form-control">
          <button type="button">Deck Name</button>
          <input  class="collapse" type="text" name="deck[exercise[]" value="${deck.name}" required>

          <button type="button">Diamonds</button>
          <input type="text" name="deck[exercises[]" value="${deck.exercises[0]}" required>

          <button type="button">Hearts</button>
          <input  type="text" name="deck[exercises[]" value="${deck.exercises[1]}" required>

          <button type="button">Clubs</button>
          <input type="text" name="deck[exercises[]" value="${deck.exercises[2]}" required>

          <button type="button">Spades</button>
          <input type="text" name="deck[exercises[]" value="${deck.exercises[3]}" required>

          <button type="button">Timer</button>
          <input type="text" name="deck[timer]" value="${deck.timer}" required>

          <input type="submit" value="Save Changes">

        </form>
      </div>
    `
  })
