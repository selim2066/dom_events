
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

// ! most usable event listener

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
 * 1. Get the parent element where the new child will be added.
 * 2. Create a new child element.
 * 3.  Set the content (innerText or innerHTML) using input value.
 *    Example: p.innerText = textarea.value;
 * 4. Append the child to the parent.
 *    Example: container.appendChild(p);
  */
document.getElementById('cbtn').addEventListener('click', function(){
    const textarea=document.getElementById('input');
    const p=document.createElement('p');
    p.innerText=textarea.value;
    document.getElementById('allComment').appendChild(p);
    textarea.value='';

})


//! delete like github
document.getElementById('delInput').addEventListener('keyup', function (event) {

            const text = event.target.value;
            

            // for disable button when there is no text in input field
            const deleteBtn = document.getElementById('delete-btn');
            if (text == 'delete') {
                deleteBtn.removeAttribute('disabled');

            } else {
                deleteBtn.setAttribute('disabled', true)
            }
        })
        // for delete h1 heading text
        document.getElementById('delete-btn').addEventListener('click', function () {
            const head = document.getElementById('head')
            head.style.display = 'none'

        })
