
// let contactUser = {
//     img: "",
//     name : "",
//     email : "",
//     phone : "",
//     address : "",
//     group: "",
//     notes : "",
//     isFav : false,
//     isEmergency : false

// }



    let fName = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");
    let group = document.getElementById("group");
    let notes = document.getElementById("notes");
    let isFav = document.getElementById("favorite");
    let isEmergency = document.getElementById("emergency");
    let modal = document.getElementById("addContactModal");






let contactsList = [];


function saveContact(){



// 1 if inputs with value

    // todo Name should contain only letters and spaces (2-50 characters)
    // todo Email should be a valid email address
    // todo Phone number should be a valid egyptian number


    if (fName.value == ""){
        alert("Name should contain only letters and spaces (2-50 characters)");
        return;
    }


    if(phone.value == ""){
        alert("phone missing");
        return;
    }

    console.log("valid");





// 2  create object

let contactUser = {
    img: "",
    name : fName.value,
    email : email.value,
    phone : phone.value,
    address : address.value,
    group:  group.options,
    notes :  notes.value,
    isFav : isFav.checked,
    isEmergency : isEmergency.checked

}

console.log(contactUser);
console.log(isFav);
console.log(group);








// 3 push object to array


contactsList.push(contactUser);


// 4 display fun of contact
displayContact();
// 5 close the modal

 const modalInstance =
            bootstrap.Modal.getOrCreateInstance(modal);

        modalInstance.hide();

    


//6 clear inputs
fName.value = "";
email.value = "";
phone.value = "";
address.value = "";
group.value = "";
notes.value = "";
isFav.checked = false;
isEmergency.checked = false;


}


function displayContact(){

     document.getElementById("contacts").innerHTML = "";

    for(let i = 0; i < contactsList.length; i++){

       let favaouriteClassName ;

       if(contactsList[i].isFav == true){

        favaouriteClassName = "fa-solid";
        
           
       }else{
        favaouriteClassName = "fa-regular";
       }

       let emergencyClassName ;

       if(contactsList[i].isEmergency == true){

        emergencyClassName = "fa-solid";
        
           
       }else{
        emergencyClassName = "fa-regular";
       }

       let contactCard = `
        <div  class="col-md-6">
       <div class="contact-card">

                            <!-- BODY -->

                            <div class="contact-body">

                                <div class="d-flex gap-3">

                                    <div class="avatar">
                                        A
                                    </div>

                                    <div class="flex-grow-1">

                                        <div class="contact-name">
                                            ${contactsList[i].name}
                                        </div>

                                        <!-- PHONE -->

                                        <div class="contact-info">

                                            <div class="info-icon phone-icon">
                                                <i class="fa-solid fa-phone"></i>
                                            </div>

                                            <span>
                                                ${contactsList[i].phone}
                                            </span>

                                        </div>

                                    </div>

                                </div>


                                <!-- EMAIL -->

                                <div class="contact-info">

                                    <div class="info-icon mail-icon">
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>

                                    <span>
                                        ${contactsList[i].email}
                                    </span>

                                </div>


                                <!-- LOCATION -->

                                <div class="contact-info">

                                    <div class="info-icon location-icon">
                                        <i class="fa-solid fa-location-dot"></i>
                                    </div>

                                    <span>
                                        ${contactsList[i].address}
                                    </span>

                                </div>


                                <!-- TAG -->

                                <span class="tag">
                                    Family
                                </span>

                            </div>


                            <!-- FOOTER -->

                            <div class="contact-footer">

                                <div class="footer-actions">

                                    <button class="action-btn action-phone">
                                        <i class="fa-solid fa-phone"></i>
                                    </button>

                                    <button class="action-btn action-mail">
                                        <i class="fa-solid fa-envelope"></i>
                                    </button>

                                </div>


                                <div class="footer-actions">

                                    <button onclick="addToFav(${i})" class="action-btn action-normal">
                                        <i class="${favaouriteClassName} fa-star"></i>
                                    </button>

                                    <button onclick="addToEmergency( ${i})" class="action-btn action-normal">
                                        <i class="${emergencyClassName} fa-heart"></i>
                                    </button>

                                    <button onclick="editContact(${i})" data-bs-toggle="modal"
                                     data-bs-target="#addContactModal" class="action-btn action-normal">
                                        <i class="fa-solid fa-pen"></i>
                                    </button>

                                    <button onclick="deleteContact(${contactsList[i].phone}, ${i})" class="action-btn action-normal">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>
       `

       document.getElementById("contacts").innerHTML += contactCard;
    }
}




function deleteContact(phone, index){

    contactsList.splice(index, 1);
    displayContact();

    // for(let i = 0; i < contactsList.length; i++){
    //     if(contactsList[i].phone == phone){
    //         contactsList.splice(i, 1);
    //         displayContact();
    //         break;
    //     }
    // }

    // contactsList = contactsList.filter(contact => contact.phone != phone);
    // displayContact();




}   


function addToFav( index){

    console.log("favourite");

    contactsList[index].isFav = !contactsList[index].isFav;
    displayContact();

}   

 

function addToEmergency( index){ 

    contactsList[index].isEmergency = !contactsList[index].isEmergency;
    displayContact();


}

  


function editContact(index){

   let contact = contactsList[index];

   fName.value = contact.name;
   phone.value = contact.phone;
   email.value = contact.email;
   address.value = contact.address;
   group.value = contact.group;
   notes.value = contact.notes;
   isFav.checked = contact.isFav;
   isEmergency.checked = contact.isEmergency;


   




}   


function searchContact(){

}   