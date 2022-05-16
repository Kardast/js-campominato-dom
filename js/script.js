const gridEl = document.getElementById("grid");
const selectLev = document.getElementById("level");
const playBtn = document.querySelector("button");

console.log(gridEl, selectLev, playBtn);

// funzione che crea un div e gli assegna la classe in base alla difficoltà cliccata
function createMyElement(mySquares) {
    const node = document.createElement("div");
    node.className = mySquares;
    return node;
}


playBtn.addEventListener("click", 

    function() {

        let nCells, classCelss;

        // svuotare la griglia
        gridEl.innerHTML = "";

        const chooseLev = parseInt(selectLev.value);

        // variabili che settano le dimensioni della griglia
        switch (chooseLev) {
            case 0:
                nCells = 100;
                classCelss = "square_easy";
                break;
            case 1:
                nCells = 81;
                classCelss = "square_mid";
                break;
            case 2:
                nCells = 49;
                classCelss = "square_hard";
                break;
        }

        const myNewArrRandom = createRandUniqueNumArr(nCells, 1, nCells);
        console.log("i miei numeri sono:", myNewArrRandom);

        const myNewBombArrayRandom = createRandUniqueNumArr(16, 1, nCells);
        console.log("le mie bombe sono:", myNewBombArrayRandom);

        let myScoreSum = 0;
        const anotherPoint = 1;
        console.log("il mio punteggio è:", myScoreSum);

        for (let i = 0; i < myNewArrRandom.length; i++) {

            let  divEl = createMyElement(classCelss);
    
            divEl.addEventListener("click", 
                function () {
                    // inserisco numero nel divEl.square
                    divEl.append(myNewArrRandom[i]); 
                    console.log(this);
                    myScoreSum += anotherPoint;
                    console.log("my score is", myScoreSum);

                    for (let j = 0; j < myNewBombArrayRandom.length; j++) {
                        if (myNewArrRandom[i] === myNewBombArrayRandom[j]) {
                            this.classList.add("clicked-red");
                            alert("Hai perso! Hai totalizzato un totale di: " + (myScoreSum-1) + " punti!");
                        } else if (myScoreSum == (nCells - myNewBombArrayRandom.length)) {
                            this.classList.add("clicked-blue");
                            alert("Hai vinto! Hai totalizzato un totale di: " + myScoreSum + " punti!");
                        } else{
                            this.classList.add("clicked-blue");
                        }
                    }
                }
            )
            gridEl.append(divEl);
        }
    }
)


// funzione che pusha numeri che scegli te da un min ad un max sempre diversi nell'array della dimensione che dai te
function createRandUniqueNumArr(numItems, min, max) {
    const arrInt = [];
    while (arrInt.length < numItems) {
        let randNumInt = getRandomNumMinMax(min, max);
        if(!arrInt.includes(randNumInt)){
            arrInt.push(randNumInt);
        }
    }
    return arrInt;
}


// funzione che crea un numero random
function getRandomNumMinMax(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;
}


// funzione che controlla se un numero è pari o dispari
function pariODispari(numeroCheck) {
    // ritorna una stringa "pari" se il numero passato è pariODispari, sennò dispari
    let risultato;
    if (numeroCheck % 2 === 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }
    return risultato;
}


// funzione che crea 16 numeri casuali senza doppioni e nel range della difficoltà scelta
function getRandomBombMinMax(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;
}


