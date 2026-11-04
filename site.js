'use strict';
document.querySelectorAll('[data-year]').forEach(node=>{node.textContent=String(new Date().getFullYear());});
document.querySelectorAll('[data-copy-email]').forEach(button=>{
  button.addEventListener('click',async()=>{
    const status=button.closest('.contact-card').querySelector('.copy-status');
    try{
      await navigator.clipboard.writeText('merdarion45ru@yandex.ru');
      status.textContent='Адрес скопирован';
    }catch{
      status.textContent='Адрес: merdarion45ru@yandex.ru — выдели и скопируй его.';
    }
  });
});
const photoDialog=document.querySelector('.photo-dialog');
if(photoDialog){
  const image=photoDialog.querySelector('img');
  const title=photoDialog.querySelector('h2');
  document.querySelectorAll('[data-photo]').forEach(button=>{
    button.addEventListener('click',()=>{
      image.src=button.dataset.photo;
      image.alt=button.querySelector('img').alt;
      title.textContent=button.dataset.caption;
      photoDialog.showModal();
    });
  });
  photoDialog.querySelector('.dialog-close').addEventListener('click',()=>photoDialog.close());
  photoDialog.addEventListener('click',event=>{if(event.target===photoDialog){const r=photoDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)photoDialog.close();}});
}
