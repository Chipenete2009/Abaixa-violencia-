const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
$('#mb').onclick=()=>$('#nav').classList.toggle('open');
addEventListener('scroll',()=>{const h=document.documentElement;$('#pg').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';$('#up').style.display=h.scrollTop>300?'block':'none'});
$('#up').onclick=()=>scrollTo({top:0});
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('v')));
$$('.card,.tile,.steps div,.ph').forEach(e=>{e.classList.add('fade');io.observe(e)});
$$('.tabs button').forEach(b=>b.onclick=()=>{$$('.tabs button').forEach(x=>x.classList.remove('on'));b.classList.add('on');$$('.tab').forEach(t=>t.hidden=t.id!==b.dataset.t)});
const Q=[["Qual é um exemplo de violência verbal?",["Empurrar um colega","Pôr alcunhas ofensivas","Estragar o material"],1],["O que fazer ao ver um colega a ser agredido?",["Rir e filmar","Ficar calado","Avisar um professor e apoiar a vítima"],2],["Uma causa da violência entre alunos é…",["Diálogo","Pressão do grupo e problemas familiares","Respeito às regras"],1],["Uma consequência para a vítima pode ser…",["Abandono escolar","Mais amigos","Melhores notas"],0],["Qual é uma boa forma de resolver conflitos?",["Dialogar e mediar","Bater primeiro","Ameaçar"],0]];
const qz=$('#quiz');if(qz){let i=0,s=0;const show=()=>{if(i>=Q.length){qz.innerHTML=`<h3>Resultado: ${s}/${Q.length} ${s>=4?'🏆 Excelente!':'📚 Relê o site e tenta de novo.'}</h3><button onclick="location.reload()">Repetir</button>`;return}
const [q,o,c]=Q[i];qz.innerHTML=`<p><b>${i+1}/${Q.length}.</b> ${q}</p>`+o.map((t,k)=>`<button data-k="${k}">${t}</button>`).join('');
qz.querySelectorAll('button').forEach(b=>b.onclick=()=>{const k=+b.dataset.k;if(k===c)s++;qz.querySelectorAll('button').forEach(x=>{x.disabled=true;if(+x.dataset.k===c)x.classList.add('ok')});if(k!==c)b.classList.add('no');setTimeout(()=>{i++;show()},1100)})};show()}
const pl=$('#pl');if(pl)pl.onclick=()=>$('#plm').textContent='🕊️ Obrigado! Juntos construímos uma escola de paz.';
const lb=$('#lb');if(lb)$$('.gal img').forEach(m=>m.onclick=()=>{lb.innerHTML='<img src="'+m.src+'">';lb.style.display='grid'}),lb.onclick=()=>lb.style.display='none';
