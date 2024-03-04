/* global cy */

describe("Pokedex", () => {
  it(" frontpage shows pokemons ", () => {
    cy.visit("http://localhost:5000");

    cy.contains("bulbasaur");
    cy.contains("eevee");
    cy.contains("pikachu");

    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });
});
