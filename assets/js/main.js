const easy = 100;
const medium = 81;
const hard = 49;

const contEl = document.querySelector('.container')

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



document.getElementById("easy").addEventListener('click', function () {
    contEl.classList.add("easy_cont")
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('.container').style.visibility = 'visible'
    generaGriglia(easy)

    const bombs = generateBombs(easy)
    console.log(bombs);

    function generateBombs(dimensione) {

        // creare un array vuota
        const bombs = []
        // ciclare finche la lunghezza dell'array bombs non é 16
        while (bombs.length < 16) {
            //console.log(bombs);
            // genera un numero casuale tra un min e max
            const randomNumber = getRandomNumber(1, dimensione)
            // verifica se il numero non é giá incluso e inseriscilo tra le bombe
            if (!bombs.includes(randomNumber)) {
                console.log('Add a bomb');
                bombs.push(randomNumber)
            }
        }
        return bombs;
    }
    for (let index = 1; index < easy; index++) {



        if (ifBomb(index, bombs)) {

        }
    }


})


document.getElementById("medium").addEventListener('click', function () {
    contEl.classList.add("medium_cont")
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('.container').style.visibility = 'visible'
    generaGriglia(medium)

    const bombs = generateBombs(medium)
    console.log(bombs);

    ifBomb(medium, bombs)

    function generateBombs(dimensione) {
        // creare un array vuota
        const bombs = []
        // ciclare finche la lunghezza dell'array bombs non é 16
        while (bombs.length < 16) {
            //console.log(bombs);
            // genera un numero casuale tra un min e max
            const randomNumber = getRandomNumber(1, dimensione)
            // verifica se il numero non é giá incluso e inseriscilo tra le bombe
            if (!bombs.includes(randomNumber)) {
                console.log('Add a bomb');
                bombs.push(randomNumber)
            }
        }
        return bombs;
    }
})


document.getElementById("hard").addEventListener('click', function () {
    contEl.classList.add("hard_cont")
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('.container').style.visibility = 'visible'
    generaGriglia(hard)

    const bombs = generateBombs(hard)
    console.log(bombs);

    ifBomb(hard, bombs)

    function generateBombs(dimensione) {
        // creare un array vuota
        const bombs = []
        // ciclare finche la lunghezza dell'array bombs non é 16
        while (bombs.length < 16) {
            //console.log(bombs);
            // genera un numero casuale tra un min e max
            const randomNumber = getRandomNumber(1, dimensione)
            // verifica se il numero non é giá incluso e inseriscilo tra le bombe
            if (!bombs.includes(randomNumber)) {
                console.log('Add a bomb');
                bombs.push(randomNumber)
            }
        }
        return bombs;
    }
})


function generaGriglia(dimensione) {
    for (let i = 1; i <= dimensione; i++) {
        //creo il div
        const divElement = document.createElement('div')

        divElement.innerHTML = `${i}`

        //assegno classe
        divElement.classList.add('cella')

        //inserisco cella dentro container
        contEl.append(divElement)

        //Event Listener a ciascun elemento creato nel ciclo
        divElement.addEventListener('click', function () {
            //assegno colore verde all'interno di questa funzione con 'this' 
            this.style.backgroundColor = 'cornflowerblue';
        })
    }
}

function ifBomb(cellNum, bombs) {
    if (bombs.includes(cellNum)) {
        console.log('è una bomba');
    } else {
        console.log('keep going');
    }
}




