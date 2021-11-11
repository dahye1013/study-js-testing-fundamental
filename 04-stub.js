/**
 * [stub]
 * - stubs are very simillar to mocks
 *
 * while a mock replaces what was there before,
 * in order to verify that the dependency get called corretly.
 *
 * => stub is more a replacement of a specific piece.
 *
 */

let Pokemons = {
  amount() {
    //Call to database
  },
  say(str) {
    console.log("Your pokedex says", str);
  },
};

function howsMyCollection() {
  const size = Pokemons.amount();
  if (size === undefined) {
    return Pokemons.say("Ooops, not sure how many you have");
  }
  if (size < 10) {
    return Pokemons.say("You only have a few");
  }
  if (size < 50) {
    return Pokemons.say("You have quite some favorites, keep going");
  }
  return Pokemons.say("You are quite a collector");
}

const originalAmount = Pokemons.amount;

function stubAmount(amount) {
  Pokemons.amount = () => amount;
}

function havePokemons(amount) {
  stubAmount(amount);
  howsMyCollection();
}
havePokemons(5);
havePokemons(17);
havePokemons(100);
