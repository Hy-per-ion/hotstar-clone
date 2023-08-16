let movies = [
    {
        name: "Loki",
        des: "marvel 1",
        image: "images/slider 1.PNG"
    },
    {
        name: "falcon and the winter soldier",
        des: "marvel 2",
        image: "images/slider 2.PNG"
    },
    {
        name: "wanda vision",
        des: "marvel 3",
        image: "images/slider 3.PNG"
    },
    {
        name: "raya and the last dragon",
        des: "diseny 1",
        image: "images/slider 4.PNG"
    },
    {
        name: "luca",
        des: "diseny 2",
        image: "images/slider 5.PNG"
    }
];

const carousel=document.querySelector('.carousel');
let sliders=[];

let slideIndex = 0;

const createIndex = () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
    
    imgElement.src=movies[slideIndex].image;
    slideIndex++
    
    slide.className='slider';
    content.className='slide-content';
    h1.className='movie-title';
    p.className='movie-des';
    
    sliders.push(slide);
    
    if (slide.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
            30 * (sliders.length - 2)
        }px)`;
    }
};

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(()=>{
    createSlide();
}, 3000);

const videoCards =  [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener("mouseover",()=>{
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave",()=>{
        let video = item.children[1];
        video.pause();
    });
});

let cardContainer = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainer.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth-200;
    });

    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth+200;
    });

});
