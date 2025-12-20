// set year
document.getElementById('year').textContent = new Date().getFullYear();

// BUY action
function buyNow(product){
  // simple modal/alert — replace with real checkout later
  alert('Thank you for choosing ' + product + ' — Malka & Sons will contact you shortly!');
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
}

// CONTACT form (fake)
function sendContact(){
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){ alert('Please fill all fields.'); return; }
  alert('Message sent. We will contact you soon — ' + name);
  document.getElementById('contactForm').reset();
}

// THEME toggle (persist)
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const saved = localStorage.getItem('malkasons-theme');
if(saved === 'light'){ body.classList.add('light'); themeToggle.textContent = '☀️'; }
else { themeToggle.textContent = '🌙'; }

themeToggle.addEventListener('click', ()=>{
  body.classList.toggle('light');
  if(body.classList.contains('light')){ localStorage.setItem('malkasons-theme','light'); themeToggle.textContent = '☀️'; }
  else { localStorage.setItem('malkasons-theme','dark'); themeToggle.textContent = '🌙'; }
});

// SCROLL reveal
function reveal(){
  const items = document.querySelectorAll('.reveal');
  const h = window.innerHeight;
  items.forEach(i=>{
    const top = i.getBoundingClientRect().top;
    if(top < h - 80) i.classList.add('active');
  });
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// 3D tilt & glow on cards
const cards = document.querySelectorAll('.card');
cards.forEach(card=>{
  card.addEventListener('mousemove', (e)=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width/2;
    const cy = rect.height/2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    const rx = dy * 6; // rotate X
    const ry = dx * -6; // rotate Y
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    card.classList.add('hover-glow');
    const img = card.querySelector('img');
    if(img) img.style.transform = `scale(1.06) translate(${dx*6}px,${dy*6}px)`;
  });

  card.addEventListener('mouseleave', ()=>{
    card.style.transform = '';
    card.classList.remove('hover-glow');
    const img = card.querySelector('img');
    if(img) img.style.transform = '';
  });
});
function buyNow(productName) {
  // WhatsApp number with country code
  const phoneNumber = "916389469197"; // 91 = India code
  const message = `Hi,I am interested in buying the ${productName}. Please share more details.`;
  
  // WhatsApp link
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  // Open WhatsApp
  window.open(url, "_blank");
}
