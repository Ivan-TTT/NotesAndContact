$(document).ready(function() {
    eel.update_all_contact();
    // localStorage.setItem(`IdTrisTask`,``);
    // localStorage.setItem('Editing','');
    // localStorage.setItem('OneCreated','no');
    // localStorage.setItem('VisibleNumber','yes');
    // localStorage.setItem('ActiveOrPasiveTask','active');
    // console.log('HTML загружен');
    // visibleNum();
    // activeTask();
    // // startW();
});


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
           
               <li class="organizationCon" >
                    <select id="organization-id">
                        <option disabled selected>Органиция</option>
                        <option value="ип">ип</option>
                        <option value="полиграфия">полиграфия</option>
                    </select>
               </li>
           
               <li class="addressCon"> 
                    <input id ="addressCon-id" class ="addressCon-Text" type ="text" placeholder ="Адресс..." >
               </li> 
           
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
                    <img class ="" src ="Img/Save-G.svg" alt ="" >
                </li>
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

// функция берет значения из формы и предает функции  (contactValue_js)
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
        localStorage.setItem('contact_id', generating_contact_id++);
        var save_C_Id = localStorage.getItem('contact_id');
        contactValue_js(save_C_Id, save_C_name, save_C_organiz,
            save_C_address, save_C_tel, save_C_mail, save_C_ICQ)
    }
}
//---------------------------------------------------------------------------------------------

//- функция отправить значения в python -----------------------------------------
async function contactValue_js(save_C_Id, save_C_name, save_C_organiz,
    save_C_address, save_C_tel, save_C_mail, save_C_ICQ){

    eel.contactValue(save_C_Id, save_C_name, save_C_organiz,
        save_C_address, save_C_tel, save_C_mail, save_C_ICQ);

    eel.update_all_contact();

}
//---------------------------------------------------------------------------------------------

//- Функция принимает список с строками из [bd_C] -----------------------------------------
eel.expose(get_update_contact_js)
function get_update_contact_js(contacts_items){
    $(".fixetT").remove();
    console.log("Обновление списка");
    for (var contacts = 0; contacts < contacts_items.length; contacts++){

        var save_C_Id = contacts_items[contacts][0];                 
        var save_C_name = contacts_items[contacts][1];             
        var save_C_organiz  = contacts_items[contacts][2];               
        var save_C_address = contacts_items[contacts][3];              
        var save_C_tel = contacts_items[contacts][4];              
        var save_C_mail  = contacts_items[contacts][5];             
        var save_C_ICQ = contacts_items[contacts][6];  
        createContact_ReceivedBd(save_C_Id, save_C_name, save_C_organiz, save_C_address, save_C_tel, save_C_mail, save_C_ICQ);       
    }
    // visibleNum()
};

//- Функция пригимает значения переданные из функции(get_update_contact_js) -----------------------------------------
//- Функция создает блоки с контактами -----------------------------------------
function createContact_ReceivedBd(save_C_Id, save_C_name, save_C_organiz, save_C_address, save_C_tel, save_C_mail, save_C_ICQ){
    
    const saveContactElement = document.createElement ( 'div' );
    saveContactElement.classList.add ( "contact" );
    saveContactElement.classList.add ( "fixetT" );
    saveContactElement.setAttribute ('id', `${save_C_Id}`);
    saveContactElement.innerHTML = `
        <div class="contactGroup">
            <ul>                   
               <li class="nameCon">
                   <input id ="nameCon-id_${save_C_Id}" class ="nameCon-Text" type ="text" placeholder ="Название..." readonly value ="${save_C_name}" >
               </li>
        
               <li class="organizationCon">
                    <select id="organization-id_${save_C_Id}">
                        <option disabled selected readonly>${save_C_organiz}</option>
                    </select>
               </li>
        
               <li class="addressCon"> 
                    <input id ="addressCon-id_${save_C_Id}" class ="addressCon-Text" type ="text" placeholder ="Адресс..." readonly value ="${save_C_address}" >
               </li> 
        
               <li class ="telephoneCon" >
                    <input id ="telephoneCon-id_${save_C_Id}" class ="telephoneCon-Text" type ="tel" placeholder ="Телефон..." readonly value ="${save_C_tel}" >
               </li>
        
               <li class ="mailCon" >
                    <input id ="mailCon-id_${save_C_Id}" class ="mailCon-Text" type ="email" placeholder ="Почта..." readonly value ="${save_C_mail}" >
               </li>
               <li class="ICQCon" >
                    <input id ="ICQCon-id_${save_C_Id}" class ="ICQCon-Text" type ="text" placeholder ="ICQ..." readonly value ="${save_C_ICQ}" >
                <!-- <input id ="DateTask-id" class ="inputDateTask " type="date" > -->
                </li>
            
                <li class="saveCon" onClick ="ED('0')">
                    <img class ="" src ="Img/Pensil-G.svg" alt ="" >
                </li>
            </ul>
        </div>
    `
    contactElement.after(saveContactElement);
}

//---------------------------------------------------------------------------------------------

//- 0-(S)sorted*7 | 6-(M)mail  
function S7M(nNum){
    console.log(`Выполняеться функция S7M | (S)status | nNnum"=${nNum}"`);
    nNumTransfer_S7M_js(nNum)
}
async function nNumTransfer_S7M_js(nNum){
    console.log(`Выполняеться функция nNumTransfer_S7M_js | nNum="${nNum}" пердаеться в python`);
    eel.nNumTransfer_S7M(nNum);
    eel.update_S7M();
}


//- 0-(E)editing | 1-(D)delete
function ED(nNum){
    $('.contact').on('click', function(){ 
        let index = $(this).attr('id');
        console.info(`Id контакта = ${index}`);
    
        if (nNum == '0'){
            console.log(`Выполняеться функция ED | (S)status | id"=${index}"`);
            idTransfer_ED_js(index, nNum)
        } else if (nNum == '1') {
            console.log(`Выполняеться функция ED | (D)delete | id"=${index}"`);
            idTransfer_ED_js(index, nNum)
        }
    });
}
async function idTransfer_ED_js(index, nNum){
    console.log(`Выполняеться функция idTransfer_ED_js | id="${index}" | nNum="${nNum}" пердаеться в python`);
    eel.idTransfer_ED(index, nNum);
    // eel.update_all_contact();
}