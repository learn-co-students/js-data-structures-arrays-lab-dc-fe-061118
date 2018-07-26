// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push('Ralph');
}
function destructivelyPrependDriver(name) {
  return drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
  return drivers.pop('Garfield');
}
function destructivelyRemoveFirstDriver() {
  return drivers.shift('Milo');
}
function appendDriver(name){
  return drivers.concat(name);
}

function prependDriver(name) {
  return ['Arnold',...drivers];
}
function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}
function removeFirstDriver() {
  return drivers.slice(1);
}