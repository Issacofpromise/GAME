const img= document.querySelector('.img');const img2= document.querySelector('.img2');
const tx= document.querySelector('.text');const sec= document.querySelector('.sec')
const tile=16;
let ts=[]; let ing=false, inter=null,time=0,visible = false; 

function set(){clear();
  img.innerHTML='';tx.style.display='none';time=0;
  sec.innerHTML=time;  
ts=cr(); ts.forEach(i=>img.appendChild(i))
setTimeout(()=>{ clear();img.innerHTML='';
    sh(ts).forEach(i=>img.appendChild(i))
    inter=setInterval(()=>{sec.innerHTML=time;    
        time++},1000);
},4000);
}
function clear(){
  clearInterval(inter);
}
function cr() { const temp=[];
Array(tile).fill().forEach((x,i)=>{ const li= document.createElement('li');
li.setAttribute('data-type',i); li.classList.add(`t${i}`);
li.setAttribute('draggable','true');temp.push(li)}); return temp}

function addLabels() {
    const lis = img.querySelectorAll('li');
    lis.forEach(li => {
      const dataType = li.getAttribute('data-type');
      const label = document.createElement('span');
      label.classList.add('label');
      label.textContent = dataType;
      li.appendChild(label);
    });
  }
function sh(y){let x=y.length-1;
while (x>0){const rd=Math.floor(Math.random()*(x+1));
    const temp = y[x]; y[x] = y[rd]; y[rd] = temp;
    x--;} return y
}
img.addEventListener('dragstart',s=>{ k=s.target;
navi=k; cl=k.className;console.log(s);
dex=[...k.parentNode.children].indexOf(k); console.log(dex);})

img.addEventListener('dragover',s=>{ s.preventDefault();   
});
img.addEventListener('drop',s=>{k=s.target;
de=[...k.parentNode.children].indexOf(k);console.log(de,navi,{k});
    if(k.className!==cl){let orig;let last=false;
if(navi.nextSibling){orig=navi.nextSibling
}else{orig=navi.previousSibling;last=true}
dex<de? k.after(navi):k.before(navi);
last?orig.after(k):orig.before(k); 
de1=[...k.parentNode.children]
} check(de1) 
})
function check(fe){
let un=fe.filter((ch,index)=> Number(ch.getAttribute('data-type'))!==index);
if(un.length===0){tx.style.display='block'; ing=false;clear();} }

function mo() {  if (visible) { img2.innerHTML = ''; visible = false;
  } else {
    const img3 = document.createElement('img');
    img3.src = 'https://picsum.photos/400/400/';
    img2.appendChild(img3);   visible = true;
  }}