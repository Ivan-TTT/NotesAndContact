$(document).ready(function() {
    eel.update_all_contact();
    localStorage.setItem('contact_Editing','no');
    localStorage.setItem('contact_Created','no');
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
    if (localStorage.getItem('contact_Created') == "no" && localStorage.getItem('contact_Editing') == "no"){

        localStorage.setItem('contact_Created','yes');
        localStorage.setItem('contact_Editing','no');

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
                        <select id="organizationCon-id">
                            <option disabled selected>Органиция</option>
                            <option value="ип">ип</option>
                            <option value="полиграфия">полиграфия</option>
                            <option value="нет">нет</option>
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
    };
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
        if (localStorage.getItem('contact_Editing') == "no"){

            localStorage.setItem('contact_id', generating_contact_id++);
            var save_C_Id = localStorage.getItem('contact_id');
            contactValue_js(save_C_Id, save_C_name, save_C_organiz,
                save_C_address, save_C_tel, save_C_mail, save_C_ICQ)
        } else {

            alert( 'Верно!' );
            var save_C_Id = localStorage.getItem(`Id_This_contact`);
            contactValue_js(save_C_Id, save_C_name, save_C_organiz,
                save_C_address, save_C_tel, save_C_mail, save_C_ICQ)
        }
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

    localStorage.setItem('contact_Created','no');
    localStorage.setItem('contact_Editing','no');

    $(".fixetT").remove();
    $(".cCreatcontact").remove();
    console.log("Контакты : обновление списка");
    for (var contacts = 0; contacts < contacts_items.length; contacts++){

        var save_C_Id      = contacts_items[contacts][0];                 
        var save_C_name    = contacts_items[contacts][1];             
        var save_C_organiz = contacts_items[contacts][2];               
        var save_C_address = contacts_items[contacts][3];              
        var save_C_tel     = contacts_items[contacts][4];              
        var save_C_mail    = contacts_items[contacts][5];             
        var save_C_ICQ     = contacts_items[contacts][6];  
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
    console.log("");
    console.log(`[1] Выполняеться функция S7M | (S)sorted | nNnum"=${nNum}"`);
    nNumTransfer_S7M_js(nNum)
}
async function nNumTransfer_S7M_js(nNum){
    console.log(`[2] Выполняеться функция nNumTransfer_S7M_js | nNum="${nNum}" пердаеться в python`);
    eel.nNumTransfer_S7M(nNum);
    if (nNum == ("0") || nNum == ("1") || nNum == ("2") || nNum == ("3") || nNum == ("4") || nNum == ("5") ){
        eel.update_S7M();
        console.log("");
    } else{
        eel.mail_S7M();
        console.log("тыры пыры");
    }
}
const mailElement_1 = document.querySelector('.click_o_');
const mailElement_2 = document.querySelector('.click_t_');
const mailElement_3 = document.querySelector('.click_th_');
eel.expose(mail_S7M_js)
function mail_S7M_js(mail_contact){
    console.log(`[3] Выполняеться функция mail_S7M_js | line="${mail_contact}" принимаеться из базы данных`);
    console.log("");
    for (var contact = 0; contact < mail_contact.length; contact++){
        var save_C_Id       = mail_contact[contact][0];                 
        var save_C_name     = mail_contact[contact][1];             
        var save_C_organiz  = mail_contact[contact][2];               
        var save_C_mail     = mail_contact[contact][3];   
        create_mail_S7M(save_C_Id, save_C_name, save_C_organiz,  save_C_mail);       
    }   
}
function create_mail_S7M(save_C_Id, save_C_name, save_C_organiz,  save_C_mail){

    if (save_C_organiz == "полиграфия"){

        console.log(save_C_Id, save_C_name, save_C_organiz,  save_C_mail);
        const NewOrganizElement = document.createElement ( 'li' );
        NewOrganizElement.classList.add ( "click_o" );
        NewOrganizElement.classList.add ( "li_li" );
        NewOrganizElement.setAttribute('mail',`${save_C_mail}`)
        NewOrganizElement.setAttribute('onclick',`this.classList.toggle('click_o'); addText()`);
        NewOrganizElement.setAttribute ('id', `${save_C_Id}_mail`);
        NewOrganizElement.innerHTML =`
            ${save_C_name}
        `;
        mailElement_1.after(NewOrganizElement);

    } else if (save_C_organiz == "ип"){
        console.log("ип",save_C_Id, save_C_name, save_C_organiz,  save_C_mail);
        const NewOrganizElement = document.createElement ( 'li' );
        NewOrganizElement.classList.add ( "click_t" );
        NewOrganizElement.classList.add ( "li_li" );
        NewOrganizElement.setAttribute('mail',`${save_C_mail}`)
        NewOrganizElement.setAttribute('onclick',`this.classList.toggle('click_t'); addText()`);
        NewOrganizElement.setAttribute ('id', `${save_C_Id}_mail`);
        NewOrganizElement.innerHTML =`
            ${save_C_name}
        `;
        mailElement_2.after(NewOrganizElement);
    } else {
        console.log("нет",save_C_Id, save_C_name, save_C_organiz,  save_C_mail);
        const NewOrganizElement = document.createElement ( 'li' );
        NewOrganizElement.classList.add ( "click_th" );
        NewOrganizElement.classList.add ( "li_li" );
        NewOrganizElement.setAttribute('mail',`${save_C_mail}`)
        NewOrganizElement.setAttribute('onclick',`this.classList.toggle('click_th'); addText()`);
        NewOrganizElement.setAttribute ('id', `${save_C_Id}_mail`);
        NewOrganizElement.innerHTML =`
            ${save_C_name}
        `;
        mailElement_3.after(NewOrganizElement);
    }
    addText()
}



function add_notAdd(nNum){
    addText();
    // $('li').on('click', function(){ 
    //     id_m = $(this).attr('id');
    //     console.log(id_m);
    //     $(this).toggleClass('click_o');
    //     $(this).toggleClass('no_click_o');
    //     // if (nNum == '0'){
    //     //     console.log(id_m)
    //     // }
    //     $('li').unbind('click');
    // });



    // $(".oOne_ul li").click(function () {
    // if ($(this).hasClass("click_o")) {
    //     $(this).removeClass("click_o");
    //     $(this).addClass("no_click_o");
    //     addText()
    // }
    // else {
    //     $(this).removeClass("no_click_o");
    //     $(this).addClass("click_o");
    //     addText()
    // }
    // });
      

    // $(".li_li").click(function() {
    //     var $this = $(this); // this is just for performance
    //     if(!$this.hasClass('no_click_o'))
    //       $('.no_click_o').toggleClass("no_click_o").toggleClass("click_o");
    //     $this.toggleClass("no_click_o").toggleClass("click_o");
    // });

    // $("li.click_o, li.no_click_o").click(function() {
    //     var $this = $(this);
    //     if ($this.hasClass("click_o")) {
    //         $this.removeClass("click_o").addClass("no_click_o");
    //         $this.removeClass("click_o").addClass("no_click_o");
    //     }
    //     else {
    //         $this.removeClass("no_click_o").addClass("click_o");
    //         $this.removeClass("no_click_o").addClass("click_o");
    //     }

    //     // $('.li.click_o, li.no_click_o').unbind('click');
    // });




    // $('.li_li').bind('click');
    // $('.li_li').click(function() {
    //     $('#textarea_modal_id').val('');
    //     $(this).toggleClass('click_o');
    //     $('.li_li').unbind('click');
    // });
    // // ("li.click_o, li.no_click_o").live(function() {
    // //     $('#textarea_modal_id').val('');
    // //     var $this = $(this);
    // //     var classes = $this.hasClass("click_o") ? ["click_o", "no_click_o"] : ["no_click_o", "click_o"];
    // //     $this.removeClass(classes[0]).addClass(classes[1]);

    // //     // $('.li_li').unbind('click');
    // $('#textarea_modal_id').val('');
}


function addText() {

    // document.getElementById("textarea_modal_id").value='';

    const output = [];

    [...document.querySelectorAll('.click_o')].forEach(item => {
        output.push({
            mail: item.getAttribute('mail')
        });
    });
    [...document.querySelectorAll('.click_t')].forEach(item => {
        output.push({
            mail: item.getAttribute('mail')
        });
    });
    [...document.querySelectorAll('.click_th')].forEach(item => {
        output.push({
            mail: item.getAttribute('mail')
        });
    });

    // console.log(output[0].mail);
    console.log(output);
    
    var texteriiiaaa = document.getElementById("textarea_modal_id").value="";
    console.log(texteriiiaaa);

    for (var mail_m = 0; mail_m < output.length; mail_m++){
        var pol = output[mail_m].mail;
        $('#textarea_modal_id').val($('#textarea_modal_id').val()+(pol) + ', ');
    } 
    var ta = document.getElementById('textarea_modal_id');
    ta.value = (ta.value.slice(0,-2) + '');

    return
}


//- 0-(E)editing | 1-(D)delete
function ED(nNum){
    if (localStorage.getItem('contact_Created') == "no" && localStorage.getItem('contact_Editing') == "no"){
        $('.contact').on('click', function(){ 
            index = $(this).attr('id');
            localStorage.setItem(`Id_This_contact`,`${index}`);
            console.log("");
            console.info(`[1] Id контакта = ${index}`);

            if (nNum == '0'){
                console.log(`[2] Выполняеться функция ED | (E)editing | id"=${index}"`);
                $(this).remove();
            } else {
                console.log(`[2] Выполняеться функция ED | (D)delete | id"=${index}"`);
            }
        
            idTransfer_ED_js(index, nNum)
            $('.contact').unbind('click');
        });
    };
}
async function idTransfer_ED_js(index, nNum){
    console.log(`[3] Выполняеться функция idTransfer_ED_js | id="${index}" | nNum="${nNum}" пердаеться в python`);
    eel.idTransfer_ED(index, nNum);
    eel.creating_ED_Id();
    if (nNum == '0'){
        eel.expose(retuuurn_contact_js)
    }
}

//---------------------------------------------------------------------------------------------

function retuuurn_contact_js(contact_items){
    console.log(`[4] Выполняеться функция retuuurn_contact_js | line="${contact_items}" принимаеться из базы данных`);
    for (var contact = 0; contact < contact_items.length; contact++){
        var save_C_Id       = contact_items[contact][0];                 
        var save_C_name     = contact_items[contact][1];             
        var save_C_organiz  = contact_items[contact][2];               
        var save_C_address  = contact_items[contact][3];              
        var save_C_tel      = contact_items[contact][4];              
        var save_C_mail     = contact_items[contact][5];             
        var save_C_ICQ      = contact_items[contact][6]; 
    }    
    create_Contact_editing(save_C_Id, save_C_name, save_C_organiz, save_C_address, save_C_tel, save_C_mail, save_C_ICQ);   
};


function create_Contact_editing(save_C_Id, save_C_name, save_C_organiz, save_C_address, save_C_tel, save_C_mail, save_C_ICQ){
    
    console.log(`[5] Выполняеться функция create_Contact_editing | создается форма для редактирования контакта`);
    console.log("");

    localStorage.setItem('contact_Editing','yes');

    const NewSaveContactElement = document.createElement ( 'div' );
    NewSaveContactElement.classList.add ( "contact" );
    NewSaveContactElement.classList.add ( "cCreatcontact" );
    NewSaveContactElement.setAttribute ('id', `${save_C_Id}`);
    NewSaveContactElement.innerHTML = `
        <div class="contactGroup">
            <ul>                   
               <li class="nameCon">
                   <input id ="nameCon-id" class ="nameCon-Text" type ="text" placeholder ="Название..."  value ="${save_C_name}" >
               </li>
        
               <li class="organizationCon">
                    <select id="organizationCon-id">
                        <option disabled selected readonly>${save_C_organiz}</option>
                        <option value="ип">ип</option>
                        <option value="полиграфия">полиграфия</option>
                        <option value="нет">нет</option>
                    </select>
               </li>
        
               <li class="addressCon"> 
                    <input id ="addressCon-id" class ="addressCon-Text" type ="text" placeholder ="Адресс..."  value ="${save_C_address}" >
               </li> 
        
               <li class ="telephoneCon" >
                    <input id ="telephoneCon-id" class ="telephoneCon-Text" type ="tel" placeholder ="Телефон..."  value ="${save_C_tel}" >
               </li>
        
               <li class ="mailCon" >
                    <input id ="mailCon-id" class ="mailCon-Text" type ="email" placeholder ="Почта..."  value ="${save_C_mail}" >
               </li>
               <li class="ICQCon" >
                    <input id ="ICQCon-id" class ="ICQCon-Text" type ="text" placeholder ="ICQ..."  value ="${save_C_ICQ}" >
                <!-- <input id ="DateTask-id" class ="inputDateTask " type="date" > -->
                </li>
            
                <li class="saveCon" onClick ="saveСontactFunction()">
                    <img class ="" src ="Img/Save-G.svg" alt ="" >
                </li>
            </ul>
        </div>
    `
    contactElement.after(NewSaveContactElement);
}

$(document).on('click', '[data-toggle="modal"]', function () {
    var target = $(this).attr('data-target');
    console.log(target);
    $(target).addClass('show');
    return false;
  });

  $('.modal .close').on('click', function () {
    $(this).closest('.modal').removeClass('show');
    return false;
})