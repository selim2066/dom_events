
//! option 1 (useable important)
function night() {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'red'
    document.body.style.fontSize = '26px'
}


//! optiion 2
const day = document.getElementById('day')
day.onclick = white
function white() {
    document.body.style.backgroundColor = '#F0F8FF'
    document.body.style.fontSize = '36px'
    document.body.style.color = 'green'
}


//! option:2 another way
const julyy = document.getElementById('july')
julyy.onclick = function () {
    document.body.style.backgroundColor = 'red'
    document.body.style.fontSize = '36px'
    document.body.style.color = 'white'
}

// * most usable event listener

document.getElementById('qurbani').addEventListener('click', function () {
    document.body.style.backgroundColor = '#B22222'
    document.body.style.fontSize = '28px'
    document.body.style.color = 'yellow'
})


// changing text
document.getElementById('btn').addEventListener('click', function () {
    const h1 = document.getElementById('text')
    h1.innerText = ' '
    // this.innerText='my full name is Md. Selim Reza'
    const btn = document.getElementById('btn')
    
     if (btn.innerText === 'full name') {
    h1.innerText = 'my full name is Md Selim Reza ibn Abdul Latif';
    btn.innerText = 'short'
    
  } else {
    h1.innerText = 'hi I am selim';
    btn.innerText = 'full name'
    
  }
})


//! add comment of text field

/**
 * 1. get the element that you want to add a new element.
 * 2. create child element
 * 3. set innerText or innerHTML from value of input field(here is 'textarea')
 * 4. appendChild
  */
document.getElementById('cbtn').addEventListener('click', function(){
    const textarea=document.getElementById('input');
    const p=document.createElement('p');
    p.innerText=textarea.value;
    document.getElementById('allComment').appendChild(p);
    textarea.value='';

})