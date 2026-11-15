(()=>{
const $=s=>document.querySelector(s);
// menu
const b=$('#burger'),g=$('#gaveta');
b.onclick=()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);g.hidden=o};
g.querySelectorAll('a').forEach(a=>a.onclick=()=>{b.setAttribute('aria-expanded','false');g.hidden=true});

// hero: troca as unhas dentro do hexágono
const imgs=[...document.querySelectorAll('#hxIn img')];let i=0;
setInterval(()=>{imgs[i].classList.remove('on');i=(i+1)%imgs.length;imgs[i].classList.add('on')},3200);

// grade
const fotos=['n9','n2','n3','n5','n6','n8','n10','n11','n12','n14','n16','n17','n18','n19','n20','n21'];
const gr=$('#grade');
fotos.forEach((f,k)=>{const bt=document.createElement('button');bt.setAttribute('aria-label','Ampliar trabalho '+(k+1));
bt.innerHTML=`<img src="img/${f}.webp" alt="Unhas de gel feitas pela Iolanda">`;bt.onclick=()=>abrir(k);gr.appendChild(bt)});
const lb=$('#lb'),li=$('#lbImg');let at=0;
function abrir(k){at=(k+fotos.length)%fotos.length;li.src=`img/${fotos[at]}.webp`;lb.hidden=false}
$('#lbX').onclick=()=>lb.hidden=true;$('#lbP').onclick=()=>abrir(at-1);$('#lbS').onclick=()=>abrir(at+1);
lb.onclick=e=>{if(e.target===lb)lb.hidden=true};
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')lb.hidden=true;if(e.key==='ArrowLeft')abrir(at-1);if(e.key==='ArrowRight')abrir(at+1)});

// botão de formação pré-seleciona
document.querySelectorAll('[data-servico]').forEach(a=>a.addEventListener('click',()=>{const r=document.querySelector(`input[name=servico][value="${a.dataset.servico}"]`);if(r)r.checked=true}));

// whatsapp
$('#form').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);const nome=(f.get('nome')||'').trim();
if(!nome){$('#erro').hidden=false;return}$('#erro').hidden=true;
const t=`Olá Iolanda! Sou ${nome}.\nGostava de marcar: ${f.get('servico')}.\nDisponibilidade: ${f.get('quando')}.`+(f.get('nota').trim()?`\nNotas: ${f.get('nota').trim()}`:'');
open('https://wa.me/351916633793?text='+encodeURIComponent(t),'_blank')};
})();
