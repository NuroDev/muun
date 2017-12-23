import userModel from '../models/user'

function convertUser (user) {
  return userModel.user(user.id, user.screen_name, user.name,
    userModel.profile(user.location, user.url, user.description, user.protected, user.verified),
    userModel.stats(user.followers_count, user.friends_count, user.listed_count, user.favourites_count, user.statuses_count),
    user.created_at, user.profile_image_url_https, user.profile_banner_url
  )
}

function convertUsers (users) {
  let toReturn = []
  for (let user of users) {
    toReturn.push(convertUser(user))
  }
  return toReturn
}

export default {
  convertUser: convertUser,
  convertUsers: convertUsers
}
