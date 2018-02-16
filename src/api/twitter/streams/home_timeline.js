import twitter from '../../../main/lib/auth'
import tweetTransformer from '../transformers/tweet'

function newTimeline (callback) {
  let tweets = []

  function load (amount, min, max) {
    twitter.get('statuses/home_timeline', {
      count: amount,
      since_id: min,
      max_id: max
    }, (error, returnedTweets, response) => {
      if (!error) {
        const processedTweets = tweetTransformer.convertTweets(returnedTweets)
        tweets = tweets.concat(processedTweets)
        sort()
        callback(null, tweets)
      } else {
        callback(error, null)
      }
    })
  }

  function sort () {
    tweets.sort(function (a, b) {
      return b.id - a.id
    })
  }

  function oldestTweet () {
    if (tweets.length < 1) {
      return { id: null }
    }
    return tweets[tweets.length - 1]
  }

  function newestTweet () {
    if (tweets.length < 1) {
      return { id: null }
    }
    return tweets[0]
  }

  function loadOlder (amount) {
    load(amount, undefined, oldestTweet().id)
  }

  function loadNewer (amount) {
    load(amount, newestTweet().id, undefined)
  }

  return {
    load: load,
    loadOlder: loadOlder,
    loadNewer: loadNewer
  }
}

export default {
  newTimeline: newTimeline
}
