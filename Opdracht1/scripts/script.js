window.onload

let toekomst = document.getElementById(`toekomst`);
let antwoordToekomst = document.getElementById(`antwoordToekomst`);

toekomst.addEventListener(`input`, () => {
    antwoordToekomst.innerHTML = toekomst.value;
});

window.onload = function() { 
    document.getElementById(`toekomst`).value="";
    document.getElementById(`naam`).value="";
}