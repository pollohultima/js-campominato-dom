const easy = 100
const medium = 81
const hard = 49

const contEl = document.querySelector('.container')


document.getElementById("easy").addEventListener('click', function () {
    contEl.classList.add("easy_cont")
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('.container').style.visibility = 'visible'
    generaGriglia(easy)
})

document.getElementById("medium").addEventListener('click', function () {
    contEl.classList.add("medium_cont")
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('.container').style.visibility = 'visible'
    generaGriglia(medium)

})

document.getElementById("hard").addEventListener('click', function () {
    contEl.classList.add("hard_cont")
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('.container').style.visibility = 'visible'
    generaGriglia(hard)
})


function generaGriglia(dimensione) {

    for (let i = 1; i <= dimensione; i++) {

        //creo il div
        const divElement = document.createElement('div')

        divElement.innerHTML = `${i}`

        //assegno classe
        divElement.className = 'cella'

        //inserisco cella dentro container
        contEl.append(divElement)

        //Event Listener a ciascun elemento creato nel ciclo
        divElement.addEventListener('click', function () {
            //assegno colore verde all'interno di questa funzione con 'this' 
            this.style.backgroundColor = 'cornflowerblue';
        })
    }
}

