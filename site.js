
const b=document.querySelector('.menu'),l=document.querySelector('.links');if(b&&l)b.addEventListener('click',()=>l.classList.toggle('show'));
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
const f=document.querySelector('#contactform');if(f)f.addEventListener('submit',e=>{e.preventDefault();let d=new FormData(f);let body=encodeURIComponent('Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\nOrganisation: '+d.get('org')+'\nMessage: '+d.get('message'));location.href='mailto:info.nice.cbo@gmail.com?subject='+encodeURIComponent('NICE website enquiry')+'&body='+body});
