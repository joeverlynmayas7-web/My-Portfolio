function sendViaGmail() {
    const name    = document.getElementById('cName').value.trim();
    const email   = document.getElementById('cEmail').value.trim();
    const message = document.getElementById('cMessage').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields before sending.');
        return;
    }

    const subject = encodeURIComponent('Portfolio Message from ' + name);
    const body    = encodeURIComponent(
        'Name: '     + name    + '\n' +
        'Email: '    + email   + '\n\n' +
        'Message:\n' + message
    );

    window.open(
        'https://mail.google.com/mail/?view=cm&to=joeverlynmayas7@gmail.com&su=' + subject + '&body=' + body,
        '_blank'
    );
}
/* ── TYPING EFFECT ── */
const typingText = document.querySelector('.typing-text');
const words = ['Welcome to My Portfolio', 'I am Joeverlyn May-as', 'Computer Science Student'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const current = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === current.length) {
        setTimeout(() => isDeleting = true, 1500); // pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // next word
    }

    setTimeout(type, isDeleting ? 60 : 100);
}

type(); // start the effect
function openImage(imageSrc, title){
document.getElementById("modalImage").src = imageSrc;
document.getElementById("imageTitle").innerText = title;
document.getElementById("imageModal").style.display = "flex";
}

function closeImage(){
document.getElementById("imageModal").style.display = "none";
}

function openVideo(videoSrc, title){
document.getElementById("videoModal").style.display = "flex";
document.getElementById("modalVideo").src = videoSrc;
document.getElementById("videoTitle").innerText = title;
}

function closeVideo(){
document.getElementById("videoModal").style.display = "none";
}


const text = "Welcome to My Portfolio";
let index = 0;

function typeEffect(){
if(index < text.length){
document.getElementById("typing").innerHTML += text.charAt(index);
index++;
setTimeout(typeEffect,80);
}
}

window.onload = typeEffect;


const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

const hiddenElements=document.querySelectorAll(".card,.about-text,.about-img,.contact-container");

hiddenElements.forEach(el=>observer.observe(el));


const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop;

if(scrollY>=sectionTop-150){
current=section.getAttribute("id");
}

});

navLinks.forEach(a=>{
a.classList.remove("active");
if(a.getAttribute("href")==="#"+current){
a.classList.add("active");
}
});

});

function toggleMenu(){

const nav = document.getElementById("navLinks");

nav.classList.toggle("active");

}
/* ── SCROLL ANIMATION ── */
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 150); // each card appears one by one
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));