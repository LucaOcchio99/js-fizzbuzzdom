//referenza container boxes
const boxes = document.querySelector('.boxes');

//generatore boxes
for (let i = 1; i <= 100; i++) {
    //inserisci nuovi box
    //boxes.innerHTML += `<div class="box box-${i}">${i}</div>`;
    if ((i%3 == 0) && (i%5 == 0)) {
        boxes.innerHTML += `<div class="box box-5-3">FizzBuzz</div>`;
    } else if (i%3 == 0){
        boxes.innerHTML += `<div class="box box-3">fizz</div>`;
    } else if (i%5 == 0) {
        boxes.innerHTML += `<div class="box box-5">buzz</div>`;
    } else {
        boxes.innerHTML += `<div class="box box-0">${i}</div>`;
    }
}
   