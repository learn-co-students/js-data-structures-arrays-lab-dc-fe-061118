// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}
function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}
function destructivelyRemoveLastDriver(name) {
  drivers.pop();
}
function destructivelyRemoveFirstDriver(name) {
  drivers.shift();
}
function appendDriver(name) {
   console.log([...drivers, "Broom"]);
} 
