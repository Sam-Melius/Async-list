export function renderDrum(drums) {
     
    const drumEl = document.createElement('div');
    const brandEl = document.createElement('p');
    const typeEl = document.createElement('p');
    const colorEl = document.createElement('p');
    
    drumEl.classList.add('drum-kit');
    brandEl.textContent = drums.brand;
    typeEl.textContent = drums.type;
    colorEl.textContent = drums.color;
    
    drumEl.append(brandEl, typeEl, colorEl);
        

    return drumEl;
    
}

export function renderGame(games) {

    const gameEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const systemEl = document.createElement('p');
    const difficultyEl = document.createElement('p');
    const multiplayerEl = document.createElement('p');

    gameEl.classList.add('game-item');
    nameEl.textContent = games.name;
    systemEl.textContent = games.system;
    difficultyEl.textContent = games.difficulty;
    multiplayerEl.textContent = games.multiplayer;

    gameEl.append(nameEl, systemEl, difficultyEl, multiplayerEl);

    return gameEl;
}

export function renderPet(pets) {

    const petEl = document.createElement('div');
    const typeEl = document.createElement('p');
    const housingEl = document.createElement('p');
    const friendlyEl = document.createElement('p');
    const foodEl = document.createElement('p');

    petEl.classList.add('pet-item');
    typeEl.textContent = pets.type;
    housingEl.textContent = pets.housing;
    friendlyEl.textContent = pets.friendly;
    foodEl.textContent = pets.food;

    petEl.append(typeEl, housingEl, friendlyEl, foodEl);

    return petEl;
}

export function renderState(states) {

    const stateEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const numberEl = document.createElement('p');
    const populationEl = document.createElement('p');
    const flowerEl = document.createElement('p');

    stateEl.classList.add('state-item');
    nameEl.textContent = states.name;
    numberEl.textContent = states.number;
    populationEl.textContent = states.population;
    flowerEl.textContent = states.flower;

    stateEl.append(nameEl, numberEl, populationEl, flowerEl);

    return stateEl;
}