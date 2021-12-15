// import functions and grab DOM elements
import { getAllDrums, getAllGames, getAllPets, getAllStates } from './fetch-utils.js';
// import { renderDrum } from './render-utils.js';

const drumsEl = document.querySelector('.drums-list');
const gamesEl = document.querySelector('.games-list');
const petsEl = document.querySelector('.pets-list');
const statesEl = document.querySelector('.states-list');
// let state


// set event listeners
window.addEventListener('load', async() => {
    const drums = await getAllDrums();

    for (let drum of drums) {
        const drumEl = document.createElement('div');
        const brandEl = document.createElement('p');
        const typeEl = document.createElement('p');
        const colorEl = document.createElement('p');
  
        drumEl.classList.add('drum-kit');
        brandEl.textContent = drum.brand;
        typeEl.textContent = drum.type;
        colorEl.textContent = drum.color;
  
        drumEl.append(brandEl, typeEl, colorEl);
        drumsEl.append(drumEl);
  
    }

});

window.addEventListener('load', async() => {
    const games = await getAllGames();

    for (let game of games) {
        const gameEl = document.createElement('div');
        const nameEl = document.createElement('p');
        const systemEl = document.createElement('p');
        const difficultyEl = document.createElement('p');
        const multiplayerEl = document.createElement('p');

        gameEl.classList.add('game-item');
        nameEl.textContent = game.name;
        systemEl.textContent = game.system;
        difficultyEl.textContent = game.difficulty;
        multiplayerEl.textContent = game.multiplayer;

        gameEl.append(nameEl, systemEl, difficultyEl, multiplayerEl);
        gamesEl.append(gameEl);

    }

});

window.addEventListener('load', async() => {
    const pets = await getAllPets();

    for (let pet of pets) {
        const petEl = document.createElement('div');
        const typeEl = document.createElement('p');
        const housingEl = document.createElement('p');
        const friendlyEl = document.createElement('p');
        const foodEl = document.createElement('p');

        petEl.classList.add('pet-item');
        typeEl.textContent = pet.type;
        housingEl.textContent = pet.housing;
        friendlyEl.textContent = pet.friendly;
        foodEl.textContent = pet.food;

        petEl.append(typeEl, housingEl, friendlyEl, foodEl);
        petsEl.append(petEl);

    }

});

window.addEventListener('load', async() => {
    const states = await getAllStates();

    for (let state of states) {
        const stateEl = document.createElement('div');
        const nameEl = document.createElement('p');
        const numberEl = document.createElement('p');
        const populationEl = document.createElement('p');
        const flowerEl = document.createElement('p');

        stateEl.classList.add('state-item');
        nameEl.textContent = state.name;
        numberEl.textContent = state.number;
        populationEl.textContent = state.population;
        flowerEl.textContent = state.flower;

        stateEl.append(nameEl, numberEl, populationEl, flowerEl);
        statesEl.append(stateEl);

    }

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state



