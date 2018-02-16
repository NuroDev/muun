function user (id, twitterHandle, displayName, profile, stats, joinDate, avatarSrc, bannerSrc) {
  return {
    id: id,
    twitterHandle: twitterHandle,
    displayName: displayName,
    profile: profile,
    stats: stats,
    joined: joinDate,
    avatarSrc: avatarSrc,
    bannerSrc: bannerSrc,
    __MUUN_MODEL_TYPE: 'USER'
  }
}

function profile (location, url, description, protectedAccount, verified) {
  return {
    location: location,
    url: url,
    description: description,
    protectedAccount: protectedAccount,
    verified: verified,
    __MUUN_MODEL_TYPE: 'USER_PROFILE'
  }
}

function stats (followers, following, listed, favouriteCount, tweetCount) {
  return {
    followers: followers,
    following: following,
    listed: listed,
    favouriteCount: favouriteCount,
    tweetCount: tweetCount,
    __MUUN_MODEL_TYPE: 'USER_STATS'
  }
}

export default {
  user: user,
  profile: profile,
  stats: stats
}
