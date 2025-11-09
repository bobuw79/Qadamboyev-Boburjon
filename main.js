document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeKey = 'qb_theme';
  const saved = localStorage.getItem(themeKey) || 'dark';
  if(saved === 'light') root.setAttribute('data-theme','light');
  else root.removeAttribute('data-theme');

  window.toggleTheme = function() {
    const cur = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    if(cur === 'light') { root.removeAttribute('data-theme'); localStorage.setItem(themeKey,'dark'); }
    else { root.setAttribute('data-theme','light'); localStorage.setItem(themeKey,'light'); }
  };

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const el = document.querySelector(a.getAttribute('href'));
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('show'); });
  }, {threshold:0.12});
  revealEls.forEach(el=>io.observe(el));
});
