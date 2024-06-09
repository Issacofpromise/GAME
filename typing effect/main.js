let target = document.querySelector('#dyn')
let tx=['Learn to HTML', 'Learn to JavaScript', 'Learn to CSS', 
'Learn to Python', 'Learn to Ruby']

function randomize(){let rd=tx[Math.floor(Math.random()*tx.length)]
let indi=rd.split(''); return indi}

function next(){target.textContent='';mic(randomize())}

function mic(p){if(p.length>0){target.textContent+=p.shift();
setTimeout(function(){ mic(p)},120)}else{setTimeout(next,3000)}}
// start
//mic(randomize())  

function blink() { target.classList.toggle('active') }
setInterval(blink,700)