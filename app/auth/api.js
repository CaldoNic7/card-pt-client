const config = require('./../config')
const { store } = require('./../store')

const signUp = function (data) {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    data
  })
}

const signOutFromMenu = function () {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const signOutWithButton = function () {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: `${config.apiUrl}/change-password`,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const createDeck = function (data) {
  return $.ajax({
    url: `${config.apiUrl}/decks`,
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}
const IndexDecksFromMenu = function () {
  return $.ajax({
    url: `${config.apiUrl}/decks`,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOutFromMenu,
  signOutWithButton,
  changePassword,
  createDeck,
  IndexDecksFromMenu
}
