const word=document.querySelector('.in')
const dp=document.querySelector('.dp')
const score=document.querySelector('.score')
const sec= document.querySelector('.sec')
const button= document.querySelector('button')

let sre=0, ing=false, inter, val, gt=10, words=[];
init();
function init() {change('Game Loading...');get();word.addEventListener('input',match)}
function get() {axios.get('https://random-word-api.herokuapp.com/word', {
    params: {number:100    }  }).then(function (res) { res.data.forEach(word=>{
        if(word.length <10){words.push(word)}
    }); change('Game start'); console.log(words);
  })   }
function match(){    if(word.value.toLowerCase()===dp.innerText.toLowerCase()){ 
    word.value='';if(!ing){return}  sre++; score.innerHTML=sre;time=gt;
const random=Math.floor(Math.random()*words.length);
dp.innerText=words[random] }
}
function run() {if(ing){return}
    ing=true; time=gt; word.focus(); score.innerHTML=0;sre=0;
    inter=setInterval(down,1000); change('During the game');
      val=setInterval(sta,6000);
   }  
function sta() {if(!ing){change('Game start');clearInterval(val)}}

function down(){ time>0?time--:ing=false;if(!ing){clearInterval(inter);
    change('time over')}; sec.innerHTML=time;
  }
function change(tx){button.innerText=tx; 
    tx==='Game start'?button.classList.remove('loading') : button.classList.add('loading')}