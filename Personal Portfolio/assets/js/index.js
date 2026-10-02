// // ^ Write your JavaScript code here


//Scroll behavior for the nav links

function scrollBehavior (){

    const navLinks = document.querySelectorAll(".nav-links a");

    const sections = document.querySelectorAll("section");
    sections[0].classList.add("active");
     
    


    window.addEventListener( "scroll", () => {

    let sectionId;
    let navLinksHref;
    sections.forEach(section =>{

        if(window.scrollY >= section.offsetTop - 150){
             sectionId  = section.id;
        }

    })

    // console.log(sectionId);


    navLinks.forEach(link =>{
        navLinksHref = link.getAttribute("href");

        if(navLinksHref === '#' + sectionId){
            //  console.log(navLinksHref);

            link.classList.add("active");


        }else{
            link.classList.remove("active");
        }
        

    })
   

    
})

}

scrollBehavior();


    













// Tabs filter



function tabsFilter(){

    const portfolioFilters = document.querySelectorAll(".portfolio-filter");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    


    portfolioFilters.forEach( button =>{

        
       button.addEventListener("click", (e) =>{
        console.log(e.target)




        portfolioFilters.forEach(btn =>{

            btn.classList.remove('active', 'bg-linear-to-r', 'from-primary', 'to-secondary', 'text-white');
            btn.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'border', 'border-slate-300', 'dark:border-slate-700');

        })
       
        // e.target.classList.add("active");

        button.classList.add('active', 'bg-linear-to-r', 'from-primary', 'to-secondary', 'text-white');
        button.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'border', 'border-slate-300', 'dark:border-slate-700');
        




        let tabName =   e.target.innerText;
        let tabFilter = e.target.getAttribute("data-filter");

        

        portfolioItems.forEach(item =>{
            let category = item.getAttribute("data-category");
            if(tabFilter === "all"){

                item.style.display = "block";

               }
            
             else if(tabFilter === category){

                item.style.display = "block";
             }else{
                item.style.display = "none";
             }  

        })
        });

       

       });
       
    }
tabsFilter();






// Handle Dark Mode



function buttonToggle () {

    let toggleBtn = document.querySelector("#theme-toggle-button")

    console.log(toggleBtn);
    toggleBtn.addEventListener ("click", (e) =>{
        if(document.documentElement.classList.contains("dark")){
            document.documentElement.classList.remove("dark");

        }else{
            document.documentElement.classList.add("dark");
        }

    })
}




buttonToggle();










// Handle carousel 


function handleCarousel (){

    const nextTestimonial = document.querySelector("#next-testimonial");
    const prevTestimonial = document.querySelector("#prev-testimonial");
    const testimonialCarousel = document.querySelector("#testimonials-carousel");
    const carouselIndicator = document.querySelectorAll(".carousel-indicator");
    
    let total = 6;
    let visable = 3;
    let step = 100 / (total - visable);
    let index = 1;

    nextTestimonial.addEventListener("click", () =>{
        console.log(index);
        if(index == (total - visable)){
            index = 0;

        }else{
            index++;
        }
        
        let next = index * step;
        
        testimonialCarousel.style.transform = `translateX(${next}%)`;
    });


    prevTestimonial.addEventListener("click", () =>{
            console.log(index);
            if(index == 0){
                index = total - visable;

            }else{
                index--;
            }
        
        let prev = index * step;

        testimonialCarousel.style.transform = `translateX(${prev}%)`;
    });


    carouselIndicator.forEach(item =>{


        item.addEventListener("click", () =>{
        let dotIndex = item.getAttribute("data-index");
        index = dotIndex;

        testimonialCarousel.style.transform = `translateX(${index * step}%)`;


        carouselIndicator.forEach(dot =>{

            let idx = dot.getAttribute("data-index");


            if(index === idx){
                dot.classList.add('bg-accent');
                dot.classList.remove('dark:bg-slate-600');
                indicator.setAttribute('aria-selected', 'true');

            }else{
                dot.classList.remove('bg-accent');
                dot.classList.add('dark:bg-slate-600');
                indicator.setAttribute('aria-selected', 'false');
            }
        })
        })

    })
    


}

handleCarousel();













//Hadle Gear settings


function handleGearSettings (){

    const gearIcon = document.querySelector("#settings-toggle");
    const settingsPanel = document.querySelector("#settings-sidebar");
    const settingsPanelClose = document.querySelector("#close-settings");
    const bodyElement = document.querySelector("body");

    let isOpen = false;

    gearIcon.addEventListener("click", (e) =>{

        e.stopPropagation(); 


        if(!isOpen){
         gearIcon.style.right = '20rem'; 
        }else{
            gearIcon.style.right = '0';
        }

        isOpen = !isOpen;



        settingsPanel.classList.toggle("translate-x-full");


    })

    settingsPanelClose.addEventListener("click", (e) =>{
        e.stopPropagation();
        
        settingsPanel.classList.toggle("translate-x-full");
        gearIcon.style.right = '0';
        isOpen = false;

    })

    settingsPanel.addEventListener("click", (event) => {
        event.stopPropagation(); 
    });


    bodyElement.addEventListener("click", () =>{
         if(isOpen){
            settingsPanel.classList.toggle("translate-x-full");
            gearIcon.style.right = '0';
            isOpen = false;
         }

    })

}

handleGearSettings();





function handleFonts(){
    const fontOptions = document.querySelectorAll(".font-option");

    console.log(fontOptions);

    

    fontOptions.forEach(btn =>{
        btn.addEventListener("click", () =>{

            fontOptions.forEach(btn =>{
                btn.classList.remove("active");
            })

            const font = btn.getAttribute("data-font");
            btn.classList.add("active");

             document.body.classList.remove("font-alexandria", "font-tajawal", "font-cairo");
            
        
            document.body.classList.add(`font-${font}`);

        })
    })


}



handleFonts();



function handleColors(){
    const colorOptions = document.querySelectorAll(".color-btn");

    console.log(colorOptions);  
    
    const themeMap = {
        'purple': { primary: '#a855f7', secondary: '#ec4899' },
        'blue':   { primary: '#3b82f6', secondary: '#06b6d4' },
        'emerald':{ primary: '#10b981', secondary: '#14b8a6' },
        'amber':  { primary: '#f59e0b', secondary: '#f97316' }
    };
    

    colorOptions.forEach(btn =>{
        btn.addEventListener("click", () =>{

            colorOptions.forEach(btn =>{
                btn.classList.remove('ring-2', 'ring-offset-2', 'ring-slate-400', 'dark:ring-white');
            })

            const color = btn.getAttribute("data-theme-target");
            btn.classList.add('ring-2', 'ring-offset-2', 'ring-slate-400', 'dark:ring-white');

            document.body.setAttribute("data-theme", color);

             const theme = themeMap[color] || themeMap['purple'];

             document.documentElement.style.setProperty('--color-primary', theme.primary);
             document.documentElement.style.setProperty('--color-secondary', theme.secondary);
    

            
        })
    })  

}

handleColors();