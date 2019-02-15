var kittens = ["Milo", "Otis", "Garfield"];
  console.log(kittens.slice(2));

function appendKitten(name){
  var newArray = kittens.slice();
  newArray.push(name)
  return newArray
}