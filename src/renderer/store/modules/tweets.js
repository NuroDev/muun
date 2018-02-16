import exampleTweets from '../../../resources/tweets.example.json'

const state = {
  cards: exampleTweets,
  getTweets: function (amount) {
    return getRandomSubarray(exampleTweets, amount)
  }
}

function getRandomSubarray (arr, size) {
  let shuffled = arr.slice(0)
  let i = arr.length
  let temp
  let index
  while (i--) {
    index = Math.floor((i + 1) * Math.random())
    temp = shuffled[index]
    shuffled[index] = shuffled[i]
    shuffled[i] = temp
  }
  return shuffled.slice(0, size)
}

export default {
  state
}
