for (let index = 1; index < 17; index++) {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = index;
    div.addEventListener('click',flipp)
    document.getElementById('card-deck').appendChild(div);
}

function flipp(event){
    this.classList.toggle("flipped")
}
