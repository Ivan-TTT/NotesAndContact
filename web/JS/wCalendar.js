$(document).ready(function() {
    // eel.update_all_contact();
    // localStorage.setItem('contact_Editing','no');
    // localStorage.setItem('contact_Created','no');
    // localStorage.setItem('VisibleNumber','yes');
    // localStorage.setItem('ActiveOrPasiveTask','active');
    // console.log('HTML загружен');
    // visibleNum();
    // activeTask();
    // // startW();
    getAddСalendar();
});

const СalendarElement = document.querySelector('.everyDay_');

function getAddСalendar(){

    // var fullNowDate = new Date().toLocaleDateString();
    var fullNowDate = new Date();
    console.log(fullNowDate);

    var NowYear = fullNowDate.getFullYear();
    console.log(NowYear);

    var NowMonth = fullNowDate.getMonth();
    console.log(NowMonth);

    var NowNumber = fullNowDate.getDate();
    console.log(NowNumber);

    var startDate = new Date(fullNowDate.setDate(fullNowDate.getDate() + 0));
    console.log(startDate);

    for ()

    

    // [...document.getElementsByClassName('fixetT')].forEach(i => i.classList.add("invi"));

    // localStorage.setItem('contact_Created','yes');
    // localStorage.setItem('contact_Editing','no');

    // const NewСalendarElement = document.createElement ( 'li' );
    // NewСalendarElement.classList.add ( "everyDay" );
    // // NewContactElement.setAttribute ('id', '0');
    // NewСalendarElement.innerHTML = `
        
    // `
    // СalendarElement.after(NewСalendarElement);
    
}
