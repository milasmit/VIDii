var allHoeden = document.querySelectorAll(".hoed");


allHoeden.forEach( eenHoed => {
    eenHoed.addEventListener("click", hoedOp);
});



function hoedOp() {
    // checken of goofy al een hoedje op heeft
    // als die er is - die eerst afzetten
    let actievHat = document.querySelector(".op");
    if (actievHat) {
        actievHat.click()
    }



    // aan de gang met de hoed waarop geklikt is
    let clickedHat = this;

    // kopie van de hoed maken
    let newHat = clickedHat.cloneNode(true);
    newHat.classList.add("op");
    newHat.dataset.id = clickedHat.id;
    newHat.id = "";
    // luisteren als de gekopieerde hoed heengevlogen is
    newHat.addEventListener("animationend", hoedIsEr, {once:true});
    // luisteren als op gekopieerde hoed geklikt wordt
    newHat.addEventListener("click", hoedAf);
    
    // de kopie aan de website toevoegen
    document.body.appendChild(newHat);
    // het kopie is nog ontzichtbaar

    // het origineel verstoppen
    clickedHat.classList.add("hide");

    // bepalen waar originele hoedje staat
    let firstPos = clickedHat.getBoundingClientRect();
    // bepalen waar gekopieerde hoedje staat
    let lastPos = newHat.getBoundingClientRect();

    // uitrekenen hoe ver het origineel en kopie van elkaar staan
    let deltaX = firstPos.left - lastPos.left;
    let deltaY = firstPos.top - lastPos.top;
    // die afstand toevoegen aan de kopie
    newHat.style = "--deltaX:" + deltaX + "; --deltaY:" + deltaY + ";";
    // de kopie die afstand laten afleggen - met css
    newHat.classList.add("vlieg");
}



function hoedIsEr() {
    var cloneHat = this; 
    // tekstwolk opzoeken
    let deTekstwolk = document.querySelector("article." +  cloneHat.dataset.id);
    // tekstwolk tonen
    deTekstwolk.classList.add('visible');
}



function hoedAf() {
    var cloneHat = this; 
    var deTekstwolk = document.querySelector("article." + cloneHat.dataset.id);

    // tekstwolk verbergen
    deTekstwolk.classList.remove('visible');

    // de orginele hoed opzoeken
    let oriHat =  document.querySelector("#" + cloneHat.dataset.id);

    // luisteren als de gekopieerde hoed teruggevlogen is
    cloneHat.addEventListener("animationend", hoedIsTerug);

    // bepalen waar originele hoedje staat
    let oriPos = oriHat.getBoundingClientRect();
    // bepalen waar gekopieerde hoedje staat
    let clonePos = cloneHat.getBoundingClientRect();

    // uitrekenen hoe ver het origineel en kopie van elkaar staan
    let deltaX = oriPos.left - clonePos.left;
    let deltaY = oriPos.top - clonePos.top;
    // die afstand toevoegen aan de kopie
    cloneHat.style = "--deltaX:" + deltaX + "; --deltaY:" + deltaY + ";";
    // de kopie die afstand laten afleggen - met css
    cloneHat.classList.add("terug");
}



function hoedIsTerug() {
    var cloneHat = this;

    // de orginele hoed opzoeken
    let oriHat =  document.querySelector("#" + cloneHat.dataset.id);
    // origele hoed weer tonen
    oriHat.classList.remove("hide");

    // de clone verwijderen
    cloneHat.remove();
}