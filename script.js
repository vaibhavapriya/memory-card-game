let move = 0;
let winCount = 0;
let shuffledA= [];
const restart = document.getElementById('restart');
const cards = document.getElementsByClassName('card');
let movesDynamic = document.getElementById('move'); 
let allImages = document.getElementsByClassName('card-front');

const imagesLinkArray=[
    { id:1,image:"images/c1.jpg",alt:5},
    { id:2,image:"images/c2.jpg",alt:10},
    { id:3,image:"images/c3.jpg",alt:7},
    { id:4,image:"images/c4.jpg",alt:6},
    { id:5,image:"images/c1.jpg",alt:5},
    { id:6,image:"images/c2.jpg",alt:10},
    { id:7,image:"images/c3.jpg",alt:7},
    { id:8,image:"images/c4.jpg",alt:6}
    //{id:,image:,alt}
];
//debug clicking same image

//checking for the last clicked and current 
//clicked cards and applying changes accordingly
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        //avoid retogging
        if (this.classList.contains("toggled") || shuffledA.length === 2) return;
        this.classList.add("toggled");
        //adding the 2 cards to check
        shuffledA.push(this);
        let thisImgSrc = this.querySelector('.card-front').src;
        let previousImgSrc = shuffledA[shuffledA.length - 2].querySelector('.card-front').src;
        // let thisImgId = this.querySelector('.card-front').id;
        // let previousImgId = shuffledA[shuffledA.length - 2].querySelector('.card-front').id;
        // if (thisImgId === previousImgId) {
        //     shuffledA.forEach(function (el) {
        //         setTimeout(() => {
        //             el.classList.remove("toggled");
        //         }, 100);
        //     })
        //     move++;           
        // }
        if(thisImgSrc !== previousImgSrc) {
            shuffledA.forEach(function (el) {
                setTimeout(() => {
                    el.classList.remove("toggled");
                }, 1500);
            })
            shuffledA.length = 0;
            move++;
        }
        else{
            shuffledA.length = 0;
            move++;
            winCount++;
            // alert(` ${winCount} count.`)
        }
        movesDynamic.innerText = `Moves: ${move}`;
        if(winCount===4){
            setTimeout( () => {
                alert(`Congratulations!!! You won the game in ${move} moves.`)
            }, 300);
        }
    })
}

// shuffle cards
const restartGame = () => {
    let toggledCard = document.getElementsByClassName('card toggled');
    Object.values(toggledCard).forEach(function (el) {
        setTimeout(() => {
            el.classList.remove("toggled");
        }, 0);
    })
    imagesLinkArray.sort(() => Math.random() - 0.5);
    shuffledA.length = 0;
    move = 0;
    winCount=0;
    movesDynamic.innerText = `Moves: ${move}`;
    let allImagesSrc = document.getElementsByClassName('card-front');
    Object.values(allImagesSrc).forEach((el, index)=>{
        el.src = imagesLinkArray[index].image;
        el.alt = imagesLinkArray[index].alt; 
        el.id = imagesLinkArray[index].id;
    }) 
}
restart.addEventListener('click', restartGame);
