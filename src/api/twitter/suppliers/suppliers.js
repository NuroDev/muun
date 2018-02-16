import homeTimeline from '../streams/home_timeline'

let suppliers = {}
suppliers['timelines/home'] = homeTimeline.newTimeline

function fetchSupplier (supplier, callback) {
  if ((typeof supplier) === 'string') {
    return suppliers[supplier]
  }
  if (supplier.id) {
    return suppliers[supplier.id].for(supplier)
  }
}

export default {
  provide: fetchSupplier
}
