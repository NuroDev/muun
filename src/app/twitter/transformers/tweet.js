import tweetModel from '../models/tweet'
import userTransformer from './user'

function convertTweet (tweet) {
  return tweetModel.tweet(
    tweet.id,
    tweet.created_at,
    userTransformer.convertUser(tweet.user),
    tweet.source,
    tweet.text,
    genReplyIfApplicable(tweet),
    genQuoteIfApplicable(tweet),
    genRetweetIfApplicable(tweet),
    tweetModel.stats(tweet.quote_count, tweet.reply_count, tweet.retweet_count, tweet.favoriteCount),
    convertAttachments(tweet),
    convertToNativeMedia(tweet),
    tweet.favorited,
    tweet.retweeted,
    tweet.possibly_sensitive,
    tweet.lang
  )
}

function genReplyIfApplicable (tweet) {
  return undefined
}

function genQuoteIfApplicable (tweet) {
  return undefined
}

function genRetweetIfApplicable (tweet) {
  return undefined
}

function convertAttachments (entities) {
  return undefined
}

function convertToNativeMedia (entitiesExtended) {
  return undefined
}

function convertTweets (tweets) {
  let toReturn = []
  for (let tweet of tweets) {
    toReturn.push(convertTweet(tweet))
  }
  return toReturn
}

export default {
  convertTweet: convertTweet,
  convertTweets: convertTweets
}
