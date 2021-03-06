$(document).ready(function() {
    eel.update_all_contact();
});

$('body').on('keydown input', 'textarea[data-expandable]', function() {
    // Автоматическое расширение textarea - Auto-expanding textarea
    this.style.removeProperty('height');
    this.style.height = (this.scrollHeight+2) + 'px';
  }).on('mousedown focus', 'textarea[data-expandable]', function() {
    // Анимация текстовой области - Text area animation
    this.style.removeProperty('height');
    this.style.height = (this.scrollHeight+2) + 'px';
  });

//-------------------------------------
//- Создание формы для нового контакта - Creating a form for a new contact ---------------------------------------------------------------
//-------------------------------------
const contactElement = document.querySelector('.contact');

function getAddContact(){
    if (localStorage.getItem('contact_Created') == "no" && localStorage.getItem('contact_Editing') == "no"){

        [...document.getElementsByClassName('fixetT')].forEach(i => i.classList.add("invi"));

        localStorage.setItem('contact_Created','yes');
        localStorage.setItem('contact_Editing','no');

        var Or_1 = localStorage.getItem('Name_Or_1');
        var Or_2 = localStorage.getItem('Name_Or_2');
        var Or_3 = localStorage.getItem('Name_Or_3');
        var Or_4 = localStorage.getItem('Name_Or_4');
        var Or_5 = localStorage.getItem('Name_Or_5');

        const NewContactElement = document.createElement ( 'div' );
        NewContactElement.classList.add ( "contact" );
        NewContactElement.classList.add ( "cCreatcontact" );
        NewContactElement.setAttribute ('id', '0');
        NewContactElement.innerHTML = `
            <div class="contactGroup">
                <ul>                   
                    <li class="nameCon">
                        <textarea data-expandable id ="nameCon-id" class ="nameCon" rows ="1" placeholder ="Название..." ></textarea>
                    </li>

                    <li class="organizationCon" >
                         <select id="organizationCon-id">
                             <option disabled selected>Органиция</option>
                             ${Or_1 != "" ? `<option value="${Or_1}">${Or_1}</option>` : ''}
                             ${Or_2 != "" ? `<option value="${Or_2}">${Or_2}</option>` : ''}
                             ${Or_3 != "" ? `<option value="${Or_3}">${Or_3}</option>` : ''}
                             ${Or_4 != "" ? `<option value="${Or_4}">${Or_4}</option>` : ''}
                             ${Or_5 != "" ? `<option value="${Or_5}">${Or_5}</option>` : ''}
                         </select>
                    </li>

                    <li class="addressCon"> 
                        <textarea data-expandable id ="addressCon-id" class ="addressCon" rows ="1" placeholder ="Адресс..."></textarea>
                    </li>
                    
                    <li class="contFaceCon"> 
                        <textarea data-expandable id ="contFaceCon-id" class ="contFaceCon" rows ="1" placeholder ="Контак..."></textarea>
                    </li> 
 
                    <li class ="telephoneCon" >
                        <textarea data-expandable id ="telephoneCon-id" class ="telephoneCon" rows ="1" placeholder ="Телефон..."></textarea>
                    </li>
 
                    <li class ="mailCon" >
                        <textarea data-expandable id ="mailCon-id" class ="mailCon" rows ="1" placeholder ="Почта..."></textarea>
                    </li>
                    <li class="ICQCon" >
                        <textarea data-expandable id ="ICQCon-id" class ="ICQCon" rows ="1" placeholder ="ICQ..."></textarea>
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

//- генерация id для новых контактов - generating id for new contacts ----------------------------------------

generating_contact_id = localStorage.getItem('contact_id');
localStorage.setItem('contact_id', generating_contact_id++);

//---------------------------------------------------------------------------------------------

// функция берет значения из формы и предает функции (contactValue_js)
// the function takes values from the form and passes them to the function (contactValue_js)
function saveСontactFunction(){

    // название // name
    var save_C_name = document.getElementById("nameCon-id").value; save_C_name != ""  
    ? console.log(save_C_name): ""; 

    // организация // organization
    var save_C_organiz = document.getElementById("organizationCon-id").value; save_C_organiz != ""  
    ? console.log(save_C_organiz): ""; 
    

    var orgArray = [localStorage.getItem('Name_Or_1'), localStorage.getItem('Name_Or_2')
                   ,localStorage.getItem('Name_Or_3'), localStorage.getItem('Name_Or_4')
                   ,localStorage.getItem('Name_Or_5')]
    console.log(orgArray)

    for( var i = 0; i < orgArray.length; i++){
        if ( save_C_organiz == orgArray[i]){
            save_C_organiz = i+1
        }
    }
    console.log(save_C_organiz);
    // адресс // address
    var save_C_address = document.getElementById("addressCon-id").value; save_C_address != ""  
    ? console.log(save_C_address): "";

    // контактное лицо // contact face
    var save_C_contFace = document.getElementById("contFaceCon-id").value; save_C_contFace != ""  
    ? console.log(save_C_contFace): ""; 

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
                save_C_address, save_C_contFace, save_C_tel, save_C_mail, save_C_ICQ)
        } else {

            
            var save_C_Id = localStorage.getItem(`Id_This_contact`);
            contactValue_js(save_C_Id, save_C_name, save_C_organiz,
                save_C_address, save_C_contFace, save_C_tel, save_C_mail, save_C_ICQ)
        }
    }
}
//---------------------------------------------------------------------------------------------

//- функция отправить значения в python - function send values to python ---------------------------------------
async function contactValue_js(save_C_Id, save_C_name, save_C_organiz,
    save_C_address, save_C_contFace, save_C_tel, save_C_mail, save_C_ICQ){

    eel.contactValue(save_C_Id, save_C_name, save_C_organiz,
        save_C_address, save_C_contFace, save_C_tel, save_C_mail, save_C_ICQ);

    eel.update_all_contact();

}
//---------------------------------------------------------------------------------------------

//- Функция принимает список с строками из [bd_C] - The function accepts a list with strings from [bd_C] --------
eel.expose(get_update_contact_js)
function get_update_contact_js(contacts_items){

    localStorage.setItem('contact_Created','no');
    localStorage.setItem('contact_Editing','no');

    $(".fixetT").remove();
    $(".cCreatcontact").remove();
    console.log("Контакты : обновление списка");
    for (var contacts = 0; contacts < contacts_items.length; contacts++){

        var save_C_Id       = contacts_items[contacts][0];                 
        var save_C_name     = contacts_items[contacts][1];             
        var save_C_organiz  = contacts_items[contacts][2];               
        var save_C_address  = contacts_items[contacts][3];
        var save_C_contFace = contacts_items[contacts][4];                
        var save_C_tel      = contacts_items[contacts][5];              
        var save_C_mail     = contacts_items[contacts][6];             
        var save_C_ICQ      = contacts_items[contacts][7];  
        createContact_ReceivedBd(save_C_Id, save_C_name, save_C_organiz, save_C_address, save_C_contFace, save_C_tel, save_C_mail, save_C_ICQ);       
    }
    set_na_();
    set_mame_o();
    set_na_();
    // visibleNum()
};

//- Функция принимает значения переданные из функции(get_update_contact_js) -----------------------------------------
//- The function takes the values passed from the function(get_update_contact_js) 
//- Функция создает блоки с контактами - The function creates blocks with contacts ----------------------------------
function createContact_ReceivedBd(save_C_Id, save_C_name, save_C_organiz, save_C_address, save_C_contFace, save_C_tel, save_C_mail, save_C_ICQ){
    
    [...document.getElementsByClassName('fixetT')].forEach(i => i.classList.remove("invi"));

    const saveContactElement = document.createElement ( 'div' );
    saveContactElement.classList.add ( "contact" );
    saveContactElement.classList.add ( "fixetT" );
    saveContactElement.setAttribute ('id', `${save_C_Id}`);
    saveContactElement.innerHTML = `
        <div class="contactGroup">
            <ul>                   
               <li class="nameCon">
                   <textarea data-expandable id ="nameCon-id_${save_C_Id}" class ="nameCon" rows ="1" readonly >${save_C_name}</textarea>
                </li>
        
               <li class="organizationCon">
                    <select id="organization-id_${save_C_Id}">
                        ${save_C_organiz == 1 ? `<option disabled selected readonly>${localStorage.getItem('Name_Or_1')}</option>` : ""}
                        ${save_C_organiz == 2 ? `<option disabled selected readonly>${localStorage.getItem('Name_Or_2')}</option>` : ""}
                        ${save_C_organiz == 3 ? `<option disabled selected readonly>${localStorage.getItem('Name_Or_3')}</option>` : ""}
                        ${save_C_organiz == 4 ? `<option disabled selected readonly>${localStorage.getItem('Name_Or_4')}</option>` : ""}
                        ${save_C_organiz == 5 ? `<option disabled selected readonly>${localStorage.getItem('Name_Or_5')}</option>` : ""}
                    </select>
               </li>
        
               <li class="addressCon"> 
                    <textarea data-expandable id ="addressCon-id_${save_C_Id}" class ="addressCon" rows ="1" readonly >${save_C_address}</textarea>
                </li>
                
                <li class="contFaceCon">
                    <textarea data-expandable id ="contFaceCon-id_${save_C_Id}" class ="contFaceCon" rows ="1" readonly >${save_C_contFace}</textarea>
                </li> 
        
               <li class ="telephoneCon" >
                    <textarea data-expandable id ="telephoneCon-id_${save_C_Id}" class ="telephoneCon" rows ="1" readonly >${save_C_tel}</textarea>
                </li>
        
               <li class ="mailCon" >
                    <textarea data-expandable id ="mailCon-id_${save_C_Id}" class ="mailCon" rows ="1" readonly >${save_C_mail}</textarea>
                </li>

               <li class="ICQCon" >
                    <textarea data-expandable id ="ICQCon-id_${save_C_Id}" class ="ICQCon" rows ="1" readonly >${save_C_ICQ}</textarea>
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
//- Изменение Организаций - Changing Organizations

function orga_setting(){
    var i_s_1 = document.getElementById("i_s_1_id").value; i_s_1 != ""  
    ? console.log(i_s_1): ""; 

    var i_s_2 = document.getElementById("i_s_2_id").value; i_s_2 != ""  
    ? console.log(i_s_2): ""; 

    var i_s_3 = document.getElementById("i_s_3_id").value; i_s_3 != ""  
    ? console.log(i_s_3): ""; 

    var i_s_4 = document.getElementById("i_s_4_id").value; i_s_4 != ""  
    ? console.log(i_s_4): ""; 

    var i_s_5 = document.getElementById("i_s_5_id").value; i_s_5 != ""  
    ? console.log(i_s_5): ""; 

    (!i_s_1.trim()) == false || (i_s_1.length === 0) ? localStorage.setItem('Name_Or_1',i_s_1): "";
    (!i_s_2.trim()) == false || (i_s_2.length === 0) ? localStorage.setItem('Name_Or_2',i_s_2): "";
    (!i_s_3.trim()) == false || (i_s_3.length === 0) ? localStorage.setItem('Name_Or_3',i_s_3): "";
    (!i_s_4.trim()) == false || (i_s_4.length === 0) ? localStorage.setItem('Name_Or_4',i_s_4): "";
    (!i_s_5.trim()) == false || (i_s_5.length === 0) ? localStorage.setItem('Name_Or_5',i_s_5): "";
}

function set_mame_o(){

    for(var i = 1; i < 6; i++){
        var gogotito = localStorage.getItem(`Name_Or_${i}`);
        document.getElementById(`i_s_${i}_id`).value = gogotito;
        console.log(1);
        
    } 
}

function get_na_fi(){
    var i_s2_1 = document.getElementById("i_s2_1_id").value; i_s2_1 != ""  
    ? console.log(i_s2_1): "";
    (!i_s2_1.trim()) == false || (i_s2_1.length === 0) ? localStorage.setItem('Name_na_fi',i_s2_1): "";
    set_na_()
}

function set_na_(){
    document.getElementById("na_1").innerHTML =  localStorage.getItem('Name_na_fi');
    document.getElementById(`i_s2_1_id`).value = localStorage.getItem('Name_na_fi');
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
    if (nNum == ("0") || nNum == ("1") || nNum == ("2") || nNum == ("3") || nNum == ("4") || nNum == ("5") || nNum == ("6")){
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
const mailElement_4 = document.querySelector('.click_f_');
const mailElement_5 = document.querySelector('.click_fi_');
eel.expose(mail_S7M_js)
function mail_S7M_js(mail_contact){
    $(".li_li_1").remove();
    $(".li_li_2").remove();
    $(".li_li_3").remove();
    $(".li_li_4").remove();
    $(".li_li_5").remove();
    document.getElementById("o_1").innerHTML =  localStorage.getItem('Name_Or_1');
    document.getElementById("t_2").innerHTML =  localStorage.getItem('Name_Or_2');
    document.getElementById("th_3").innerHTML = localStorage.getItem('Name_Or_3');
    document.getElementById("f_4").innerHTML =  localStorage.getItem('Name_Or_4');
    document.getElementById("fi_5").innerHTML = localStorage.getItem('Name_Or_5');
    // $("#o_1" ).append($(localStorage.getItem('Name_Or_1')));
    // $("#t_2" ).append($(localStorage.getItem('Name_Or_2')));
    // $("#th_3").append($(localStorage.getItem('Name_Or_3')));
    // $("#f_4" ).append($(localStorage.getItem('Name_Or_4')));
    // $("#fi_5").append($(localStorage.getItem('Name_Or_5')));

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

    if (save_C_organiz == "1"){

        console.log(save_C_Id, save_C_name, save_C_organiz,  save_C_mail);
        const NewOrganizElement = document.createElement ( 'li' );
        NewOrganizElement.classList.add ( "click_o" );
        NewOrganizElement.classList.add ( "li_li_1" );
        NewOrganizElement.setAttribute('mail',`${save_C_mail}`)
        NewOrganizElement.setAttribute('onclick',`this.classList.toggle('click_o'); addText()`);
        NewOrganizElement.setAttribute ('id', `${save_C_Id}_mail`);
        NewOrganizElement.innerHTML =`
            ${save_C_name}
        `;
        mailElement_1.after(NewOrganizElement);

    } else if (save_C_organiz == "2"){
        console.log("2",save_C_Id, save_C_name, save_C_organiz,  save_C_mail);
        const NewOrganizElement = document.createElement ( 'li' );
        NewOrganizElement.classList.add ( "click_t" );
        NewOrganizElement.classList.add ( "li_li_2" );
        NewOrganizElement.setAttribute('mail',`${save_C_mail}`)
        NewOrganizElement.setAttribute('onclick',`this.classList.toggle('click_t'); addText()`);
        NewOrganizElement.setAttribute ('id', `${save_C_Id}_mail`);
        NewOrganizElement.innerHTML =`
            ${save_C_name}
        `;
        mailElement_2.after(NewOrganizElement);
    } else if (save_C_organiz == "3") {
        console.log("3",save_C_Id, save_C_name, save_C_organiz,  save_C_mail);
        const NewOrganizElement = document.createElement ( 'li' );
        NewOrganizElement.classList.add ( "click_th" );
        NewOrganizElement.classList.add ( "li_li_3" );
        NewOrganizElement.setAttribute('mail',`${save_C_mail}`)
        NewOrganizElement.setAttribute('onclick',`this.classList.toggle('click_th'); addText()`);
        NewOrganizElement.setAttribute ('id', `${save_C_Id}_mail`);
        NewOrganizElement.innerHTML =`
            ${save_C_name}
        `;
        mailElement_3.after(NewOrganizElement);
    } else if (save_C_organiz == "4") {
        console.log("4",save_C_Id, save_C_name, save_C_organiz,  save_C_mail);
        const NewOrganizElement = document.createElement ( 'li' );
        NewOrganizElement.classList.add ( "click_f" );
        NewOrganizElement.classList.add ( "li_li_4" );
        NewOrganizElement.setAttribute('mail',`${save_C_mail}`)
        NewOrganizElement.setAttribute('onclick',`this.classList.toggle('click_f'); addText()`);
        NewOrganizElement.setAttribute ('id', `${save_C_Id}_mail`);
        NewOrganizElement.innerHTML =`
            ${save_C_name}
        `;
        mailElement_4.after(NewOrganizElement);
    } else if (save_C_organiz == "5") {
        console.log("5",save_C_Id, save_C_name, save_C_organiz,  save_C_mail);
        const NewOrganizElement = document.createElement ( 'li' );
        NewOrganizElement.classList.add ( "click_fi" );
        NewOrganizElement.classList.add ( "li_li_5" );
        NewOrganizElement.setAttribute('mail',`${save_C_mail}`)
        NewOrganizElement.setAttribute('onclick',`this.classList.toggle('click_fi'); addText()`);
        NewOrganizElement.setAttribute ('id', `${save_C_Id}_mail`);
        NewOrganizElement.innerHTML =`
            ${save_C_name}
        `;
        mailElement_5.after(NewOrganizElement);
    }
    
    addText()
}

function addText() {

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
    [...document.querySelectorAll('.click_f')].forEach(item => {
        output.push({
            mail: item.getAttribute('mail')
        });
    });
    [...document.querySelectorAll('.click_fi')].forEach(item => {
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

// copy add delete
function KAD(per){
    if ( per == "0"){
        let textarea = document.getElementById("textarea_modal_id");
        textarea.select();
        document.execCommand("copy");
    } else if (per == "1"){

        if(document.querySelector(".li_li_1").classList.contains("click_o")){
            [...document.getElementsByClassName('li_li_1')].forEach(i => i.classList.remove("click_o"));
        } else {
            [...document.getElementsByClassName('li_li_1')].forEach(i => i.classList.add("click_o"));
        }

    } else if (per == "2"){

        if(document.querySelector(".li_li_2").classList.contains("click_t")){
            [...document.getElementsByClassName('li_li_2')].forEach(i => i.classList.remove("click_t"));
        } else {
            [...document.getElementsByClassName('li_li_2')].forEach(i => i.classList.add("click_t"));
        }
        
    } else if (per == "3"){

        if(document.querySelector(".li_li_3").classList.contains("click_th")){
            [...document.getElementsByClassName('li_li_3')].forEach(i => i.classList.remove("click_th"));
        } else {
            [...document.getElementsByClassName('li_li_3')].forEach(i => i.classList.add("click_th"));
        }
        
    } else if (per == "4"){

        if(document.querySelector(".li_li_4").classList.contains("click_f")){
            [...document.getElementsByClassName('li_li_4')].forEach(i => i.classList.remove("click_f"));
        } else {
            [...document.getElementsByClassName('li_li_4')].forEach(i => i.classList.add("click_f"));
        }
        
    } else if (per == "5"){

        if(document.querySelector(".li_li_5").classList.contains("click_fi")){
            [...document.getElementsByClassName('li_li_5')].forEach(i => i.classList.remove("click_fi"));
        } else {
            [...document.getElementsByClassName('li_li_5')].forEach(i => i.classList.add("click_fi"));
        }
        
    }

    addText()
    return
}


//- 0-(E)editing | 1-(D)delete
function ED(nNum){
    if (localStorage.getItem('contact_Created') == "no"){
        $('.contact').on('click', function(){ 
            index = $(this).attr('id');
            localStorage.setItem(`Id_This_contact`,`${index}`);
            console.log("");
            console.info(`[1] Id контакта = ${index}`);

            if (nNum == '0' && localStorage.getItem('contact_Editing') == "no"){
                console.log(`[2] Выполняеться функция ED | (E)editing | id"=${index}"`);
                $(this).remove();
            } else if (nNum == '1' && localStorage.getItem('contact_Editing') == "yes"){
                console.log(`[2] Выполняеться функция ED | (D)delete | id"=${index}"`);
            }
        
            idTransfer_ED_js(index, nNum)
            $('.contact').unbind('click');
        });
    };
    return
}
async function idTransfer_ED_js(index, nNum){
    console.log(`[3] Выполняеться функция idTransfer_ED_js | id="${index}" | nNum="${nNum}" пердаеться в python`);
    eel.idTransfer_ED(index, nNum);
    eel.creating_ED_Id();
    if (nNum == '0'){
        eel.expose(retuuurn_contact_js)
    } else if (nNum == '1'){
        eel.update_all_contact();
        localStorage.setItem('contact_Editing','no');
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
        var save_C_contFace = contact_items[contact][4];                
        var save_C_tel      = contact_items[contact][5];              
        var save_C_mail     = contact_items[contact][6];             
        var save_C_ICQ      = contact_items[contact][7];
    }    
    create_Contact_editing(save_C_Id, save_C_name, save_C_organiz, save_C_address, save_C_contFace, save_C_tel, save_C_mail, save_C_ICQ);   
};

function create_Contact_editing(save_C_Id, save_C_name, save_C_organiz, save_C_address, save_C_contFace, save_C_tel, save_C_mail, save_C_ICQ){
    
    console.log(`[5] Выполняеться функция create_Contact_editing | создается форма для редактирования контакта`);
    console.log("");

    localStorage.setItem('contact_Editing','yes');

    [...document.getElementsByClassName('fixetT')].forEach(i => i.classList.add("invi"));
    var Or_1 = localStorage.getItem('Name_Or_1');
    var Or_2 = localStorage.getItem('Name_Or_2');
    var Or_3 = localStorage.getItem('Name_Or_3');
    var Or_4 = localStorage.getItem('Name_Or_4');
    var Or_5 = localStorage.getItem('Name_Or_5');

    const NewSaveContactElement = document.createElement ( 'div' );
    NewSaveContactElement.classList.add ( "contact" );
    NewSaveContactElement.classList.add ( "cCreatcontact" );
    NewSaveContactElement.setAttribute ('id', `${save_C_Id}`);
    NewSaveContactElement.innerHTML = `
        <div class="contactGroup">
            <ul>  
                <li class="saveCon dele" onClick ="ED('1')">
                    <img class ="" src ="Img/Trash-G.svg" alt ="" >
                </li>        

                <li class="nameCon">
                    <textarea data-expandable id ="nameCon-id" class ="nameCon" rows ="1" placeholder ="Название..." >${save_C_name}</textarea>
                </li>
                
                <li class="organizationCon" >
                    <select id="organizationCon-id">
                        <option disabled selected>${save_C_organiz}</option>
                        
                        ${Or_1 != "" ? `<option value="${Or_1}">${Or_1}</option>` : ''}
                        ${Or_2 != "" ? `<option value="${Or_2}">${Or_2}</option>` : ''}
                        ${Or_3 != "" ? `<option value="${Or_3}">${Or_3}</option>` : ''}
                        ${Or_4 != "" ? `<option value="${Or_4}">${Or_4}</option>` : ''}
                        ${Or_5 != "" ? `<option value="${Or_5}">${Or_5}</option>` : ''}
                    </select>
                </li>
                
                <li class="addressCon"> 
                   <textarea data-expandable id ="addressCon-id" class ="addressCon" rows ="1" placeholder ="Адресс...">${save_C_address}</textarea>
                </li> 
                <li class="contFaceCon"> 
                    <textarea data-expandable id ="contFaceCon-id" class ="contFaceCon" rows ="1" placeholder ="Контак...">${save_C_contFace}</textarea>
                </li> 
        
                <li class ="telephoneCon" >
                    <textarea data-expandable id ="telephoneCon-id" class ="telephoneCon" rows ="1" placeholder ="Телефон...">${save_C_tel}</textarea>
                </li>
            
                <li class ="mailCon" >
                    <textarea data-expandable id ="mailCon-id" class ="mailCon" rows ="1" placeholder ="Почта...">${save_C_mail}</textarea>
                </li>
                <li class="ICQCon" >
                    <textarea data-expandable id ="ICQCon-id" class ="ICQCon" rows ="1" placeholder ="ICQ...">${save_C_ICQ}</textarea>
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