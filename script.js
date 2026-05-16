
const hiddenSections = document.querySelectorAll('.hidden-section');

const observer = new IntersectionObserver(entries => {
 entries.forEach(entry => {
   if(entry.isIntersecting){
     entry.target.classList.add('show-section');
   }
 });
});

hiddenSections.forEach(section => observer.observe(section));

const text = "Hola Dev 👋 Bienvenida a tu guía moderna de backend y arquitectura.";
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
 document.body.classList.toggle('dark-mode');
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
