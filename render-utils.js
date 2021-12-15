export function renderDrum(drums) {
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
        

        return drumEl;
    
    }
    
}