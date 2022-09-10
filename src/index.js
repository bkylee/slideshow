import './style.css';
import prank from './images/prank.png';
import idk from './images/idk.png';
import Frythumb from './images/Frythumb.png';
import finish from './images/finish.png'
import thumb from './images/thumb.png';

function website(){
const wrapper = document.createElement('div');
wrapper.setAttribute('id','wrapper');
document.body.appendChild(wrapper);

let counter = 0;

const currentImage = document.createElement('div');
currentImage.setAttribute('id', 'current');
wrapper.appendChild(currentImage);

const images = [prank, idk, Frythumb, finish, thumb];

const current = document.createElement('img');
currentImage.appendChild(current);
current.src = images[counter];

play();
createButtons();

function play(){
    setInterval(()=>{
        currentImage.removeChild(current);
        if (counter > images.length -1){
            counter = 0;
        }
        else counter +=1;
        current.src = images[counter];
        currentImage.appendChild(current);        
    },5000);
};

function createButtons() {
    const wrapper = document.querySelector('#wrapper');
    const prev = document.createElement('button');
    prev.setAttribute('type','button');
    prev.textContent = "<--";
    wrapper.appendChild(prev);

    const next = document.createElement('button');
    next.setAttribute('type','button');
    next.textContent = "-->";
    wrapper.appendChild(next);

    prev.addEventListener('click',()=>{
        if (currentImage.childElementCount > 0){
        currentImage.removeChild(current)}
        counter < 0 ? counter = images.length -1 : counter -= 1;
        current.src = images[counter];
        currentImage.appendChild(current)
        // play();
    });

    next.addEventListener('click',()=>{
        if (currentImage.childElementCount > 0){
        currentImage.removeChild(current);}
        counter > images.length -1 ? counter = 0 : counter +=1;
        current.src = images[counter];
        currentImage.appendChild(current)
        // play();
    });
};

};

website();