const startDate = new Date('03/04/2020');
const discountedDays = [
  6, // sat
  0 //sun 
] // these are days (saturday and sunday) where we don't meet up. We could also include e.g. Thursday and Friday (4 and 5) because we're in our groups on those days

console.log(weekdaysSince(startDate))

function weekdaysSince(startDate) {
  let movingDate = new Date(Number(startDate))
  let now = new Date()
  let accumulator = 0;

  for (let day = 1; movingDate < now; day++) {
    if (!discountedDays.includes(movingDate.getDay())) { 
      accumulator++ 
    }
    movingDate.setDate(startDate.getDate() + day)
  }
  return accumulator;
}

// there are some fine points here Ivo. For the loop to break right the incrementing has to be the last thing it does - and for that to happen you need to start on the number 1, not 0. Something that needs more thought and research.