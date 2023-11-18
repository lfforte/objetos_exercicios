const pokemon1 = {
  nome: "Bulbasaur",
  tipo: "Grama",
  nivel: 5
}

// solução questão a)
const pokemon1Copia = {
  ...pokemon1,
  nome: "Squirtle",
  tipo: "Água"
}
// solução questão b)
let atqPokemon1 = [];
pokemon1.ataques = atqPokemon1;

// solução questão c)
const atq001 = {
  nome: "Investida",
  dano: 40,
  tipo: "Normal",
  precisao: 100
}
pokemon1.ataques.atqPokemon1 = atqPokemon1.push(atq001);

// solução questão d)
let atqPokemon1Copia = [];
pokemon1Copia.ataques = atqPokemon1Copia;

// solução questão e)
const atq002 = {
  nome: "Folha Navalha",
  dano: 45,
  tipo: "Gama",
  precisao: 100
}
pokemon1Copia.ataques.atqPokemon1Copia = atqPokemon1Copia.push(atq002);

// solução questão f)
const atq003 = {
  nome: "Jato de Água",
  dano: 40,
  tipo: "Água",
  precisao: 100
}
pokemon1Copia.ataques.atqPokemon1Copia = atqPokemon1Copia.push(atq003);

// solução questão g)
console.log(pokemon1);
console.log(pokemon1Copia);