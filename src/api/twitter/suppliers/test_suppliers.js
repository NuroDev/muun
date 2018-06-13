import testData from '../../../renderer/store/modules/tweets'

function newTimeline (callback) {
  let tweets = []

  function load (amount, min, max) {
    if (!(amount && amount > 0)) {
      amount = 20
    }
    setTimeout(() => {
      tweets = testData.state.getTweets(amount).concat(tweets)
      callback(null, tweets)
    }, randomDelay())
  }

  function randomDelay () {
    return Math.floor(Math.random() * (6))
  }

  function loadOlder (amount) {
    if (!(amount && amount > 0)) {
      amount = 20
    }
    setTimeout(() => {
      tweets = tweets.concat(testData.state.getTweets(amount))
      callback(null, tweets)
    }, randomDelay())
  }

  function loadNewer (amount) {
    if (!(amount && amount > 0)) {
      amount = 20
    }
    setTimeout(() => {
      tweets = testData.state.getTweets(amount).concat(tweets)
      callback(null, tweets)
    }, randomDelay())
  }

  return {
    load: load,
    loadOlder: loadOlder,
    loadNewer: loadNewer
  }
}

function genHomeTimeline (supplier, callback) {
  return newTimeline(callback)
}

export default {
  testTweetData: genHomeTimeline
}
