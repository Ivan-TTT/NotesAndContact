



//-------------------------------------
//- Создание формы для нового контакта ---------------------------------------------------------------
//-------------------------------------
const contactElement = document.querySelector('.contact');

function getAddContact(){
    const NewContactElement = document.createElement ( 'div' );
    NewContactElement.classList.add ( "contact" );
    NewContactElement.classList.add ( "cCreatcontact" );
    NewContactElement.setAttribute ('id', '0');
    NewContactElement.innerHTML = `
        <div class="contactGroup">
            <ul>                   
               <li class="nameCon">
                   <input id ="nameCon-id" class ="nameCon-Text" type ="text" placeholder ="Название..." >
               </li>
           
               <li class="organizationCon-id" >
                    <select id="organization">
                        <option disabled selected>Органиция</option>
                        <option value="ип">ип</option>
                        <option value="полиграфия">полиграфия</option>
                    </select>
               </li>
           
               <li class="addressCon"> 
                    <input id ="addressCon-id" class ="addressCon-Text" type ="text" placeholder ="Адресс..." >
               </li class ="TimeTask"> 
           
               <li class ="telephoneCon" >
                    <input id ="telephoneCon-id" class ="telephoneCon-Text" type ="tel" placeholder ="Телефон..." >
               </li>
           
               <li class ="mailCon" >
                    <input id ="mailCon-id" class ="mailCon-Text" type ="email" placeholder ="Почта..." >
               </li>
               <li class="ICQCon" >
                    <input id ="ICQCon-id" class ="ICQCon-Text" type ="text" placeholder ="ICQ..." >
                <!-- <input id ="DateTask-id" class ="inputDateTask " type="date" > -->
                </li>
            
                <li class="saveCon" onClick ="saveСontactFunction()">
                    <img class ="saveTask-img" src ="Img/Save-G.svg" alt ="" >
                </li class ="TimeTask">
            </ul>
       </div>
    `
    contactElement.after(NewContactElement);
}
//---------------------------------------------------------------------------------------------

//- генерация id для новых контактов -----------------------------------------

generating_contact_id = localStorage.getItem('contact_id');
localStorage.setItem('contact_id', generating_contact_id++);

//---------------------------------------------------------------------------------------------


function saveСontactFunction(){

    // название // name
    var save_C_name = document.getElementById("nameCon-id").value; save_C_name != ""  
    ? console.log(save_C_name): ""; 

    // организация // organization
    var save_C_organiz = document.getElementById("organizationCon-id").value; save_C_organiz != ""  
    ? console.log(save_C_organiz): ""; 

    // адресс // address
    var save_C_address = document.getElementById("addressCon-id").value; save_C_address != ""  
    ? console.log(save_C_address): ""; 

    // телефон // telephone
    var save_C_tel = document.getElementById("telephoneCon-id").value; save_C_tel != ""  
    ? console.log(save_C_tel): ""; 

    // почта // mail
    var save_C_mail = document.getElementById("mailCon-id").value; save_C_mail != ""  
    ? console.log(save_C_mail): ""; 

    // ICQ 
    var save_C_ICQ = document.getElementById("ICQCon-id").value; save_C_ICQ != ""  
    ? console.log(save_C_ICQ): ""; 

    if (save_C_name != ""){
        СontactValue_js()
    }

}