
const hiddenSections = document.querySelectorAll('.hidden-section');

const observer = new IntersectionObserver(entries => {
 entries.forEach(entry => {
   if(entry.isIntersecting){
     entry.target.classList.add('show-section');
   }
 });
});

hiddenSections.forEach(section => observer.observe(section));

const text = "Hola Dev, bienvenid@ a tu guía moderna de arquitectura y backend.";
const typingElement = document.querySelector('.typing-text');

let index = 0;

function typeWriter(){
 if(index < text.length){
   typingElement.innerHTML += text.charAt(index);
   index++;
   setTimeout(typeWriter, 50);
 }
}

window.onload = typeWriter;

const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
 const isDarkMode = document.body.classList.toggle('dark-mode');
 themeBtn.innerHTML = isDarkMode
   ? '<i class="fa-solid fa-sun"></i>'
   : '<i class="fa-solid fa-moon"></i>';
 themeBtn.setAttribute(
   'aria-label',
   isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'
 );
});

const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
 if(window.scrollY > 300){
   scrollBtn.style.display = 'block';
 }else{
   scrollBtn.style.display = 'none';
 }
});

scrollBtn.addEventListener('click', () => {
 window.scrollTo({
   top:0,
   behavior:'smooth'
 });
});
