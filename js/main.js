let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let mainText = document.querySelector('.mainText')

window.onscroll = function(){

    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 1.5 + 'px';
    mountains4.style.top = value * 1.2 + 'px';
    river.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    mainText.style.fontSize = value +'px';
    
    if(scrollY >= 50){
        mainText.style.fontSize = 50 +'px'; 
        mainText.style.position = 'fixed';
        if(scrollY >= 400){
            mainText.style.display = 'none';

        }else{
            mainText.style.display = 'block';

        }
        if(scrollY >= 120){
            document.querySelector('.main').style.background = 'linear-gradient(#153263, #f9f9f9)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#131616, #f9f9f9)';

        }
    }
}