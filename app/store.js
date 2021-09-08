const store = {
}

const ownedDecks = []

const exercises = ['push-ups', 'sit-ups', 'burpees', 'squats', 'squat jumps', 'lunges', 'lunge jumps', 'v-ups', 'russian twist', 'spiderman push-ups', 'single-leg deadlift', 'lateral squats', 'lateral lunges', 'reverse lunges', 'mountain climbers', 'flutter kicks', 'cross-body mountain climbers', 'dive bomb push-ups', 'bear crawls', 'reverse crunches', 'straight-leg sit-ups', 'single-leg v-ups', 'russian sit-ups']

const randomDeckNames = ['Rock of the Marne', 'Bayonets', 'Screaming Eagles', 'Angels', 'Golden Unicorns', 'Golden Talon', 'Sky Soldiers', 'America\'s Guard Of Honor', 'Old Ironsides', 'Hell on Wheels', 'Spearhead', 'Breakthrough Division', 'Victory', 'Super Sixth', 'Lucky Seventh', 'Iron Deuce', 'Phantom', 'Tiger Division', 'Thunderbolt', 'Hellcat Division', 'Black Cat', 'Liberators', 'Armoraiders', 'Empire', 'Volunteers', 'Grizzly', 'Hurricane', 'Lone Star', 'Jersey Blues', 'First Team', 'Big Red One', 'Warrior Division', 'Indian Head', 'Dog Faced Soldiers', 'Iron Horse', 'Red Devils', 'Death Star', 'Eight-Up Division', 'Old Reliables', 'Fighting Beer Keg', 'Follow Me', 'If You Ain\'t Cav', 'This We\'ll Defend', 'Semper Fidelis', 'First to Fire', 'Above the Best', 'The Combat Arm of Decision', 'Always Out Front', 'Pro Patria Vigilans', 'Armament For Peace', 'Experientia et Progressus', 'Scouts Out', '11 Bang Bangs', 'FUBAR', 'Welcome to the Great Place', 'Stand To', 'Green 2']

const views = {
  startView: $('#start-view'),
  deckView: $('#deck-view'),
  workoutView: $('#workout-view')
}

//  hides all views and accepts a single jquery element to show. Also resets all form fields
const manageView = (viewToShow) => {
  views.startView.hide()
  views.deckView.hide()
  views.workoutView.hide()
  viewToShow.show()
}

// toggles menu items between show and hide to be the opposite of whatever it is now.
// const manageMenuView = () => {
//   $('#signInFromMenu').toggle()
//   $('#signUpFromMenu').toggle()
//   $('#changePasswordButton').toggle()
//   $('#myDecks').toggle()
//   $('#newDeckButton').toggle()
//   $('#signOut').toggle()
// }

// const createNewDeckEnabled = () => {
//   views.editDeck.hide()
//   views.startWorkoutButton.hide()
//   views.saveDeckButton.show()
//   views.autofill.show()
//   views.fieldset.prop('disabled') && views.fieldset.prop('disabled', false)
// }

// const createNewDeckDisabled = () => {
//   views.editDeck.show()
//   views.startWorkoutButton.show()
//   views.saveDeckButton.hide()
//   views.autofill.hide()
//   views.fieldset.prop('disabled', true)
// }
// reset forms
const formReset = () => $('.form-control').trigger('reset')

module.exports = {
  store,
  ownedDecks,
  manageView,
  // manageMenuView,
  // createNewDeckEnabled,
  // createNewDeckDisabled,
  formReset,
  views,
  exercises,
  randomDeckNames
}
