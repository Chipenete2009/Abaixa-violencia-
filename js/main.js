document.getElementById('mb').onclick=()=>document.getElementById('nav').classList.toggle('open');
document.querySelectorAll('.quiz button').forEach(b=>b.onclick=()=>{const q=b.parentElement;
q.querySelectorAll('button').forEach(x=>x.disabled=true);
b.classList.add(b.dataset.ok?'ok':'no');q.querySelector('[data-ok]').classList.add('ok');
q.querySelector('.fb').textContent=b.dataset.ok?'Correcto! 👏':'Resposta errada. A correcta está a verde.'});
