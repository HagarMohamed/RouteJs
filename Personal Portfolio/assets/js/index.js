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

    let isOpen = false;

    gearIcon.addEventListener("click", () =>{


        if(!isOpen){
         gearIcon.style.right = '20rem'; 
        }else{
            gearIcon.style.right = '0';
        }

        isOpen = !isOpen;



        settingsPanel.classList.toggle("translate-x-full");


    })

}

handleGearSettings();



