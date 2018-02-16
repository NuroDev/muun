import timelines from './timelines'
import testSuppliers from './test_suppliers'

let suppliers = {}
suppliers['timelines/home'] = timelines.newTimeline
suppliers['_test/dummy-default'] = testSuppliers.testTweetData

function fetchSupplier (supplier, callback) {
  if ((typeof supplier) === 'string') {
    return suppliers[supplier]({name: supplier}, callback)
  }
  if (supplier.name) {
    let newTimeline = suppliers[supplier.name](supplier, callback)
    return newTimeline
  }
}

export default {
  provide: fetchSupplier
}
