// 小互動腳本（導航、年份、自適應）
document.addEventListener('DOMContentLoaded', () => {
  // set year in multiple spots
  const year = new Date().getFullYear();
  ['year','year2','year3','year4','year5'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = year;
  });

  // nav toggle for mobile
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  toggle && toggle.addEventListener('click', () => {
    if(!nav) return;
    nav.classList.toggle('open');
  });

  // highlight current nav item
  const links = document.querySelectorAll('.nav a');
  links.forEach(a=>{
    if(location.pathname.endsWith(a.getAttribute('href')) || (a.getAttribute('href')==='index.html' && location.pathname.endsWith('/')) ) {
      a.classList.add('active');
    }
  });

  // simple reveal on scroll
  const reveal = () => {
    document.querySelectorAll('.card, .service-item, .portfolio-card, .about-text').forEach(el=>{
      const r = el.getBoundingClientRect();
      if(r.top < window.innerHeight - 80){
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
  };
  document.querySelectorAll('.card, .service-item, .portfolio-card, .about-text').forEach(el=>{
    el.style.opacity = 0;
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity 600ms ease, transform 600ms ease';
  });
  reveal();
  window.addEventListener('scroll', reveal);
});
