import homeTimeline from '../streams/home_timeline'

function genHomeTimeline (supplier, callback) {
  return homeTimeline.newTimeline(callback)
}

export default {
  newTimeline: genHomeTimeline
}
