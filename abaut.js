document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.block');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
          blocks.forEach((b, i) => {
            setTimeout(() => {
              b.style.opacity = '1';
              b.style.transform = 'translateY(0) rotate(0deg)';
            }, i * 200);
          });
        }
      });
    }, {threshold: 0.12});
  
    blocks.forEach(b => observer.observe(b));
  });
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const themeKey = 'qb_theme';
    const saved = localStorage.getItem(themeKey) || 'dark';
    if(saved === 'light') root.setAttribute('data-theme','light');
    else root.removeAttribute('data-theme');
  
    window.toggleTheme = function(){
      const cur = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      if(cur === 'light'){ root.removeAttribute('data-theme'); localStorage.setItem(themeKey,'dark'); }
      else{ root.setAttribute('data-theme','light'); localStorage.setItem(themeKey,'light'); }
    };
  
    // Smooth scroll for #id links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        e.preventDefault();
        const el = document.querySelector(a.getAttribute('href'));
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      });
    });
  
    // IntersectionObserver for .reveal
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{
        if(en.isIntersecting){
          en.target.classList.add('show');
        }
      });
    }, {threshold: 0.12});
    revealEls.forEach(el=>io.observe(el));
  
    // Update active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const updateActive = () => {
      const offset = window.scrollY + 140;
      sections.forEach(sec=>{
        const top = sec.offsetTop;
        const h = sec.offsetHeight;
        const id = sec.getAttribute('id');
        const link = document.querySelector('.nav-links a[href="#'+id+'"]');
        if(!link) return;
        if(offset >= top && offset < top + h){
          document.querySelectorAll('.nav-links a').forEach(x=>x.classList.remove('active'));
          link.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', updateActive);
    updateActive();
  });
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
  
    cards.forEach(card => {
      card.addEventListener('mouseenter', e => {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        card.appendChild(ripple);
  
        const rect = card.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
  
        setTimeout(() => ripple.remove(), 600);
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.block');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          blocks.forEach((b, i) => {
            setTimeout(() => {
              b.classList.add('show');
            }, i * 200);
          });
        }
      });
    }, {threshold: 0.12});
  
    blocks.forEach(b => observer.observe(b));
  });
  