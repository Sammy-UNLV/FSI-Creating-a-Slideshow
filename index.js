var curImg;
const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]
if (curImg == null){
    curImg = 0;
    loadImage(curImg);
} 
function loadImage(){
    var imageX = document.getElementsByClassName("imageCont");
    imageX[0].src = images[curImg];
    updateBubble();
}

function nextImage() {
    curImg = curImg + 1;
    if(curImg >= images.length - 1){
        curImg = images.length - 1;
    }
    console.log(curImg);
    loadImage(curImg);
    
}
function previousImage(){
    curImg = curImg - 1;
    if(curImg < 0){
        curImg = 0;
    }
    console.log(curImg);
    loadImage(curImg);
}
function bubbleSel(a){
    let id = a.substr(-1);
    curImg = parseInt(id);
    loadImage(curImg);
}
function updateBubble(){
    var bubble = document.getElementsByClassName("bubble");
    let i = 0;
    let j = images.length - 1;
    for (i = 0; i <= j;i++ ){
        if(i === curImg){
            bubble[i].textContent = "●";
        } else {
            bubble[i].textContent = "○";
        }
    }
}
