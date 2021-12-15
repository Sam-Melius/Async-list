// import functions and grab DOM elements
import { getAllDrums, getAllGames, getAllPets, getAllStates } from './fetch-utils.js';
import { renderDrum, renderGame, renderPet, renderState } from './render-utils.js';

const drumsEl = document.querySelector('.drums-list');
const gamesEl = document.querySelector('.games-list');
const petsEl = document.querySelector('.pets-list');
const statesEl = document.querySelector('.states-list');
// let state


// set event listeners
window.addEventListener('load', async() => {
    const drums = await getAllDrums();

    for (let drum of drums) {
        const drumEl = renderDrum(drum);
        drumsEl.append(drumEl);
    }

});

window.addEventListener('load', async() => {
    const games = await getAllGames();

    for (let game of games) {
        const gameEl = renderGame(game);
        gamesEl.append(gameEl);

    }

});

window.addEventListener('load', async() => {
    const pets = await getAllPets();

    for (let pet of pets) {
        const petEl = renderPet(pet);
        petsEl.append(petEl);

    }

});

window.addEventListener('load', async() => {
    const states = await getAllStates();

    for (let state of states) {
        const stateEl = renderState(state);
        statesEl.append(stateEl);

    }

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state



