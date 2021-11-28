const body = document.querySelector("body");

const images = ["img_1.jpg", "img_2.jpg", "img_3.jpg", "img_4.jpg", "img_5.jpg", "img_6.jpg", "img_7.jpg",];

function genRandom() {
    const number =  Math.ceil(Math.random() * images.length);
    return number
}

function handleImagLoad() {
    console.log("finish loading");
    
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/img_${imgNumber}.jpg`
    image.classList.add('bgImage')
    body.appendChild(image)
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
