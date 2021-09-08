
const noDecksSpade = `<div id="aceOfSpades" class="spades outline shadow rounded black">
        <div class="top"><span class="A">A</span><span>♠</span></div>
        <h2 class="topText red">You haven't created a deck yet!</h2>
        <h1 class="centerIcon">♠</h1>
        <div id="nav-buttons" class="navButtons">
          <div id="createNewDeckButton" class="nav_link">Create A New Deck</div>
        </div>
        <div class="bottom black"><span>A<span><span>♠</span></div>
      </div>`

const nothingHereClub = `<div id="aceOfClubs" class=" clubs outline shadow rounded black">
        <div class="top"><span class="A">A</span><span>♣</span></div>
        <h2 class="topText red">Nothing to See Here!</h2>
        <h1 class="centerIcon">♣</h1>
        <div id="nav-buttons" class="navButtons">
          <div id="createNewDeckButton" class="nav_link">Create A New Deck</div>
          <div id="go-to-my-decks" class="nav_link" style="cursor: pointer">My Decks</div>
        </div>
        <div class="bottom black"><span>A<span><span>♣</span></div>
      </div>`

const endOfWorkoutCard = `<div id="endCard" class=" clubs outline shadow rounded black">
        <h1 class="topText red">Great Workout!</h1>
        <div id="nav-buttons" class="navButtons">
          <button id="create-new-deck-button" class="nav_link">Start A New Workout</button>
        </div>
      </div>`

module.exports = {
  noDecksSpade,
  nothingHereClub,
  endOfWorkoutCard
}
