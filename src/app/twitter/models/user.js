function user (id, twitterHandle, displayName, bio) {
  return {
    id: id,
    twitterHandle: twitterHandle,
    displayName: displayName,
    bio: bio,
    __MUUN_MODEL_TYPE: 'USER'
  }
}

export default user
