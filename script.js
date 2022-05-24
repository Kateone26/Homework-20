let accordion = document.getElementsByClassName('container');
// let accordion = document.querySelectorAll('.container');

for (let i = 0; i< accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}


// burger bar

let navigation = document.getElementById('navbarlinks');
let togglebutton = document.getElementById('toggleburger');
let bar1 = document.getElementById('bar1');
let bar2 = document.getElementById('bar2');
let bar3 = document.getElementById('bar3');

togglebutton.addEventListener('click', function(){
    navigation.classList.toggle('activenav');
    bar1.classList.toggle('rotatebar1');
    bar2.classList.toggle('removebar2');
    bar3.classList.toggle('rotatebar3');

})
