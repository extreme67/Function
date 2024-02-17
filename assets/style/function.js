//Задание 1

function showMessage() {
console.log('Я учу JavaScript!'); 
}

showMessage();

//Задание 2

let theNum = "0";

let cats = ["foto1", "foto2", "foto3", "foto4"];

function goToRight() {
    theNum++;
    if (theNum == cats.length) {
        theNum = "0";
    }
    change_image.src = './assets/image/' + cats[theNum] + '.jpg'; 
}

function goToLeft() {
    theNum--;
    if (theNum == "-1") {
        theNum = cats.length - 1;
    }
    change_image.src = './assets/image/' + cats[theNum] + '.jpg';
}

