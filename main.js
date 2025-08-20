// Basic script for menu and year
document.addEventListener('DOMContentLoaded',function(){
  // set year in footers
  const years = new Date().getFullYear();
  ['year','year-2','year-3','year-4','year-5'].forEach(id=>{const el=document.getElementById(id); if(el) el.textContent=years});

  // mobile menu toggle — toggles nav visibility for small screens
  function bindMenu(btnId){
    const btn=document.getElementById(btnId); if(!btn) return;
    btn.addEventListener('click',()=>{
      const nav=document.querySelector('.nav');
      if(!nav) return;
      if(nav.style.display==='flex'){nav.style.display='none'}else{nav.style.display='flex';nav.style.flexDirection='column';nav.style.gap='12px'}
    })
  }
  ['menu-btn','menu-btn-2','menu-btn-3','menu-btn-4','menu-btn-5'].forEach(bindMenu);

  // small animation: fadethe css not wirk
elements in
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in-view') })
  },{threshold:0.08});
  document.querySelectorAll('section, .card, .project, .post').forEach(el=>observer.observe(el));
});

/* ===================== END OF FILES ===================== */
