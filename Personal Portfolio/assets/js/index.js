// ^ Write your JavaScript code here


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.text-slate-600');


window.addEventListener('scroll', () => {
    let currentSectionId = "";

    sections.forEach(section => {
        
        const sectionTop = section.offsetTop;
        

        if (window.scrollY >= (sectionTop - 150)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    
    navLinks.forEach(link => {
        
        link.classList.remove('active');
        
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});











