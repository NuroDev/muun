function tweet (id, sender, when, platform, replyTo, replyToUserId, replyToUserName, user,
  quoteCount, replyCount, retweetCount, favouriteCount,
  attachments, nativeMedia,
  haveFavourited, haveRetweeted,
  sensitive,
  lang
) {
  return {
    id: id,
    sender: sender,
    when: when,
    platform: platform,
    reply: {
      tweetId: replyTo
    }
  }
}

export default tweet
