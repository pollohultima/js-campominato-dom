const easy = 100;
const medium = 81;
const hard = 49;

const contEl = document.querySelector('.container')
const selectLvl = document.getElementById('level')


const select = document.getElementById('level');
select.addEventListener('change', chooseDifficulty)


let cellNumber;

let bombs = []


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




function chooseDifficulty() {

    if (this.value == 'easy') {

        contEl.classList.add("easy_cont")
        generaGriglia(easy)
        cellNumber = easy

        genBombs = generateBombs(cellNumber)


    } else if (this.value == 'medium') {

        contEl.classList.add("medium_cont")
        generaGriglia(medium)
        cellNumber = medium

        genBombs = generateBombs(cellNumber)


    } else if (this.value == 'hard') {

        contEl.classList.add("hard_cont")
        generaGriglia(hard)
        cellNumber = hard

        genBombs = generateBombs(cellNumber)
    }

    return cellNumber
}




function generaGriglia(dimensione) {
    contEl.innerHTML = ''

    for (let i = 1; i <= dimensione; i++) {
        //creo il div
        const divElement = document.createElement('div')

        divElement.innerHTML = `${i}`

        //assegno classe
        divElement.classList.add('cella')

        //inserisco cella dentro container
        contEl.append(divElement)

        //Event Listener a ciascun elemento creato nel ciclo
        divElement.addEventListener('click', function clicco() {
            //assegno colore verde all'interno di questa funzione con 'this' 
            if (this.classList.contains("bomba") == true) {
                this.style.backgroundColor = "red"
                var bombe = document.getElementsByClassName("bomba");
                for (let j = 0; j < bombe.length; j++) {
                    bombe[j].id = "red"
                }
                alert("hai perso")

            }
            else {
                this.style.backgroundColor = "lightgreen"
            }
        })
    }

}




function generateBombs(cellNumber) {

    // creare un array vuota
    const bombs = [];
    // ciclare finche la lunghezza dell'array bombs non é 16
    while (bombs.length < 16) {
        //console.log(bombs);
        // genera un numero casuale tra un min e max
        let randomNumber = getRandomNumber(1, cellNumber)
        // verifica se il numero non é giá incluso e inseriscilo tra le bombe
        if (!bombs.includes(randomNumber)) {
            console.log('Add a bomb');
            bombs.push(randomNumber)

        }
    }
    var selezionacella = document.getElementsByClassName("cella");
    console.log(selezionacella.length);
    for (let i = 0; i < selezionacella.length; i++) {
        for (j = 0; j < bombs.length; j++) {
            if (i == bombs[j]) {
                selezionacella[i].classList.add("bomba")
            }
        }
    }
    console.log(bombs);
    return bombs;
}
