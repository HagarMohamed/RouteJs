
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







let contactsList = [];


function saveContact(){

    let fName = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");
    let group = document.getElementById("group");
    let notes = document.getElementById("notes");
    let isFav = document.getElementById("favorite");
    let isEmergency = document.getElementById("emergency");
    let modal = document.getElementById("addContactModal");


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


// display fun of contact
displayContact();
// close the modal

 const modalInstance =
            bootstrap.Modal.getOrCreateInstance(modal);

        modalInstance.hide();



}


function displayContact(){

     document.getElementById("contacts").innerHTML = "";
    for(let i = 0; i < contactsList.length; i++){
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

                                    <button class="action-btn action-normal">
                                        <i class="fa-regular fa-star"></i>
                                    </button>

                                    <button class="action-btn action-normal">
                                        <i class="fa-regular fa-heart"></i>
                                    </button>

                                    <button class="action-btn action-normal">
                                        <i class="fa-solid fa-pen"></i>
                                    </button>

                                    <button class="action-btn action-normal">
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




function deleteContact(){

}   


function addToFav(){

}   

function removeFromFav(){

}   

function addToEmergency(){  

}

function removeFromEmergency(){

}   


function editContact(){

}   


function searchContact(){

}   