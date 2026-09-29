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












const toggleButton = document.getElementById("theme-toggle-button");


function setTheme(isDark) {
    if (isDark) {
        document.documentElement.classList.add('dark');        
        toggleButton.setAttribute('aria-pressed', 'true'); 
        localStorage.setItem('theme', 'dark');                  
    } else {
        document.documentElement.classList.remove('dark');     
        toggleButton.setAttribute('aria-pressed', 'false');
        localStorage.setItem('theme', 'light');                 
    }
}


const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    setTheme(true);
} else {
    setTheme(false);
}

toggleButton.addEventListener('click', () => {
    
    const isCurrentDark = document.documentElement.classList.contains('dark');
    setTheme(!isCurrentDark);
});
