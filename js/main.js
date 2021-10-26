//referenza container boxes
const boxes = document.querySelector('.boxes');

//generatore boxes
for (let i = 1; i <= 100; i++) {
    //inserisci nuovi box
    boxes.innerHTML += `<div class="box box-${i}">${i}</div>`
}
   