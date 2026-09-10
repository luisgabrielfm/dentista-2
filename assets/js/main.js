
// Para ativar o WhatsApp, informe DDI + DDD + número, somente dígitos.
const WHATSAPP_NUMBER = '';
const menuButton=document.querySelector('.menu-toggle'),menu=document.querySelector('nav');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menu.classList.toggle('open',open)});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
const carousel=document.querySelector('#carousel');const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
function slide(direction){carousel.scrollBy({left:direction*(carousel.querySelector('article').getBoundingClientRect().width+24),behavior:reduced?'instant':'smooth'})}
document.querySelector('#prev').onclick=()=>slide(-1);document.querySelector('#next').onclick=()=>slide(1);
carousel.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();slide(e.key==='ArrowRight'?1:-1)}});
const dialog=document.querySelector('dialog');document.querySelector('#whatsapp').onclick=()=>{if(WHATSAPP_NUMBER){window.open('https://wa.me/'+WHATSAPP_NUMBER,'_blank','noopener,noreferrer')}else{dialog.showModal()}};dialog.querySelector('.close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
document.querySelector('#contact-form').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget);const message='Solicitação de avaliação — Dra. Beatriz Negreiros\n\nNome: '+data.get('nome')+'\nWhatsApp: '+data.get('whatsapp')+'\nE-mail: '+data.get('email')+'\n\nMensagem:\n'+data.get('mensagem');const url=URL.createObjectURL(new Blob([message],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='mensagem-para-dra-beatriz.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);document.querySelector('#form-status').textContent='Arquivo preparado para download. A mensagem ainda não foi enviada à clínica.'});
document.querySelector('#year').textContent=new Date().getFullYear();
