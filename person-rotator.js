const people = [
  "Lizzy",
  "James",
  "Gio",
  "Joe",
  "Kat",
  "Vatsal",
  "Hettie",
  "Roger",
  "Ivo",
  "Hannah",
  "Jack",
  "Chloe",
  "Tom",
  "Ako",
  "Ina",
  "Campbell"
];
const startDate = new Date("03/03/2020");
const discountedDays = [
  // 4, // thurs
  // 5, // fri
  // 6, // sat
  // 0 //sun
];

const todaysPairs = chunk(rotate(people, weekdaysSince(startDate)));
console.log(todaysPairs);

function weekdaysSince(startDate) {
  let movingDate = new Date(Number(startDate));
  let now = new Date();
  let countedDays = 0;

  for (let day = 1; movingDate < now; day++) {
    if (!discountedDays.includes(movingDate.getDay())) {
      countedDays++;
    }
    movingDate.setDate(startDate.getDate() + day);
  }
  return countedDays;
}

function rotate(array, times) {
  if (times === 0) {
    return array;
  } else {
    let newArray = [...array];
    let overflow = newArray.shift();
    newArray.push(overflow);
    return rotate(newArray, times - 1);
  }
}

function chunk(array) {
  let pairs = [];
  array.forEach((person, place) => {
    place % 2 == 0
      ? pairs.push([person])
      : pairs[pairs.length - 1].push(person);
  });
  return pairs;
}
