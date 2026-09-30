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

    console.log(sectionId);


    navLinks.forEach(link =>{
        navLinksHref = link.getAttribute("href");

        if(navLinksHref === '#' + sectionId){
             console.log(navLinksHref);

            link.classList.add("active");


        }else{
            link.classList.remove("active");
        }
        

    })
   

    
})

}

scrollBehavior();


    











