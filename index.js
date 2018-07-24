// Write your solution here!
const drivers=['Milo', 'Otis', 'Garfield'];
console.log(drivers);

function destructivelyAppendDriver(name) {
  drivers.push('Ralph')
}

function destructivelyPrependDriver(name) {
  drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift()
}


function appendDriver (name) {
  const driversPlusAppend = [...drivers, 'Broom'];
  return (driversPlusAppend)
}

function prependDriver (name) {
  const driversPlusPrepend = ['Arnold', ...drivers];
  return (driversPlusPrepend)
}

function removeLastDriver (name) {
  const driversMinusLast = drivers.slice(0,2);
  return (driversMinusLast)
}

function removeFirstDriver (name) {
  const driversMinusFirst = drivers.slice(1);
  return (driversMinusFirst)
}




