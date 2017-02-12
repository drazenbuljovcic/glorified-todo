export default (() => {
  let months, days;

  months = [
    { 'slug': 'Jan', 'full': 'January'},
    { 'slug': 'Feb', 'full': 'February'},
    { 'slug': 'Mar', 'full': 'March'},
    { 'slug': 'Apr', 'full': 'April'},
    { 'slug': 'May', 'full': 'May'},
    { 'slug': 'Jun', 'full': 'June'},
    { 'slug': 'Jul', 'full': 'July'},
    { 'slug': 'Aug', 'full': 'August'},
    { 'slug': 'Sep', 'full': 'September'},
    { 'slug': 'Oct', 'full': 'October'},
    { 'slug': 'Nov', 'full': 'November'},
    { 'slug': 'Dec', 'full': 'December'}
  ];

  days = [
    { 'slug': 'Mon', 'full': 'Monday' },
    { 'slug': 'Tue', 'full': 'Tuesday' },
    { 'slug': 'Wed', 'full': 'Wednesday' },
    { 'slug': 'Thu', 'full': 'Thursday' },
    { 'slug': 'Fri', 'full': 'Friday' },
    { 'slug': 'Sat', 'full': 'Saturday' },
    { 'slug': 'Sun', 'full': 'Sunday' }    
  ];

  return {
    normalizeMonth: (monthNum) => {
      //expecting numbers from 1 to 12
      return months[--monthNum]
    },
    normalizeDay: (dayNum) => {
      //expecting numbers from 1 to 7
      return days[--dayNum]
    },
    sliceObjectFromArrayByIdFilter: (arr, objId, filter) => {
      let objIndex = arr.findIndex(obj => obj[objId] === filter)
      return (arr.slice(0, objIndex).concat(arr.slice(objIndex + 1)));
    }
  }
})()
