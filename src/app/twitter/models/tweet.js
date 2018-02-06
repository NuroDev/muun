function tweet (id, when, sender, platform,
  text,
  reply,
  quote,
  retweet,
  stats,
  attachments, nativeMedia,
  haveFavourited, haveRetweeted,
  sensitive,
  lang
) {
  return {
    id: id, // ID of the tweet
    sender: sender, // Sender User object
    when: when, // When the tweet was sent,
    text: text, //
    platform: platform, // Source e.g 'TweetDeck'
    reply: reply, // Reply Model IF reply tweet
    quote: quote, // Quote Model IF quoted tweet
    retweet: retweet, // Retweet Model IF retweet
    stats: stats, // Stats Model
    attachments: attachments, // Twitter "Entities"
    nativeMedia: nativeMedia, // Twitter "Native Media"
    haveFavourited: haveFavourited, // Has user favourited
    haveRetweeted: haveRetweeted, // Has user retweeted
    sensitive: sensitive, // Is the Tweet "sensitive"? ;)
    lang: lang, // Language of the Tweet
    __MUUN_MODEL_TYPE: 'TWEET'
  }
}

function stats (quoteCount, replyCount, retweetCount, favouriteCount) {
  return {
    quotes: quoteCount,
    replies: replyCount,
    retweets: retweetCount,
    favourites: favouriteCount,
    __MUUN_MODEL_TYPE: 'TWEET_STATS'
  }
}

function reply (replyTo, replyToUserId, replyToUserName) {
  return {
    tweetId: replyTo,
    userId: replyToUserId,
    userName: replyToUserName,
    __MUUN_MODEL_TYPE: 'TWEET_REPLY'
  }
}

function quote (tweet) {
  return {
    tweet: tweet,
    __MUUN_MODEL_TYPE: 'TWEET_QUOTE'
  }
}

function retweet (tweet) {
  return {
    tweet: tweet,
    __MUUN_MODEL_TYPE: 'TWEET_RETWEET'
  }
}

function entities () {
  return {
    __MUUN_MODEL_TYPE: 'TWEET_ENTITIES'
  }
}

function nativeMedia () {
  return {
    __MUUN_MODEL_TYPE: 'TWEET_NATIVE_MEDIA'
  }
}

export default {
  tweet: tweet,
  stats: stats,
  reply: reply,
  quote: quote,
  retweet: retweet,
  entities: entities,
  nativeMedia: nativeMedia
}
