let im1 = document.getElementById('im1');
let mon = document.getElementById('mon');
let im3 = document.getElementById('im3');
let im4 = document.getElementById('im4');
let im5 = document.getElementById('im5');
let im6 = document.getElementById('im6');
let selma = document.querySelector('.selma');

window.onscroll = function(){
    let value = scrollY;
    im1.style.left = value + 'px';
    mon.style.top = value * 3 + 'px';
}