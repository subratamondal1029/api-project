
const images = document.querySelectorAll('.images');

const controls = document.querySelectorAll('.control')
    
controls[0].addEventListener('click', () => {calcImageIndex(-1)});
controls[1].addEventListener('click', () => {calcImageIndex(1)});

let indexNum = 0;
function calcImageIndex(index){
    indexNum = indexNum + index;
    
    if(indexNum < 0){
        indexNum = images.length-1;
    }else if(indexNum == images.length){
        indexNum = 0;
    }
    
    changeImage(indexNum);
}
calcImageIndex(0);


function changeImage(index){
   images.forEach((image) =>{
    image.style.left = "110vw";
   });

   images[index].style.left = "0";

}