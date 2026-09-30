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




































