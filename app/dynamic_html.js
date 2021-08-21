
const noDecksSpade = `<div id="aceOfSpades" class="outline shadow rounded black">
        <div class="top"><span class="A">A</span><span>♠</span></div>
        <h2 id="noDecks" class="red">You haven't created a deck yet!</h2>
        <h1 id="noDeckSpade">♠</h1>
        <div id="nav-buttons" class="navButtons">
        <div id="createNewDeckButton" class="nav_link">Create A New Deck</div>
        </div>
        <div class="bottom black"><span>A<span><span>♠</span></div>
      </div>`

const nothingHereClub = `<div id="aceOfClubs" class="outline shadow rounded black">
        <div class="top"><span class="A">A</span><span>♣</span></div>
        <h2 id="noDecks" class="red">Nothing to See Here!</h2>
        <h1 id="noDeckSpade">♣</h1>
        <div id="nav-buttons" class="navButtons">
          <div id="createNewDeckButton" class="nav_link">Create A New Deck</div>
          <div id="go-to-my-decks" class="nav_link" style="cursor: pointer">My Decks</div>
        </div>
        <div class="bottom black"><span>A<span><span>♣</span></div>
      </div>`

module.exports = {
  noDecksSpade,
  nothingHereClub
}
