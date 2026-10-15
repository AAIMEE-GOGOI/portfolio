const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu-btn');
const leafLayer = document.querySelector('.leaf-layer');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

menu?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

for(let i=0;i<16;i++){
  const leaf=document.createElement('span');
  leaf.className='leaf';
  leaf.style.left=Math.random()*100+'vw';
  leaf.style.animationDuration=(10+Math.random()*12)+'s';
  leaf.style.animationDelay=(-Math.random()*15)+'s';
  leaf.style.transform=`rotate(${Math.random()*180}deg)`;
  leafLayer.appendChild(leaf);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.12});

document.querySelectorAll('.section-heading,.about-card,.skill-group,.info-card,.project-card,.education-card,.contact-link').forEach(el=>{
  el.classList.add('reveal');
  observer.observe(el);
});

document.querySelectorAll('[data-placeholder]').forEach(link=>{
  link.addEventListener('click', e=>{
    if(link.getAttribute('href') === '#'){
      e.preventDefault();
      alert(`${link.dataset.placeholder} is ready to be added later. Edit the link in index.html when you have it.`);
    }
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
