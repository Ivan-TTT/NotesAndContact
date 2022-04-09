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


    // Сегодняшняя дата 
    var fullNowDate = new Date();
    console.log(fullNowDate);
    // Год на данныйй момент
    var NowYear = fullNowDate.getFullYear();
    console.log(NowYear);
    // Сегодняшний месяц
    var NowMonth = fullNowDate.getMonth();
    console.log(NowMonth);
    // Сегодняшенее число
    var NowNumber = fullNowDate.getDate();
    console.log(NowNumber);
    // --------------------------------------------

    // Сегодняшняя дата ддя переменой startDate
    var fullDate = new Date();
    // console.log(fullDate);
    // первое этого число месяцы
    var startDate = new Date(fullDate.setDate(fullDate.getDate() - (NowNumber - 1)));
    // console.log(startDate);
    // День недели первого числа месяца
    var startDateDay = startDate.getDay();
    // console.log(startDateDay);
    // --------------------------------------------

    // Сегодняшняя дата ддя переменой startDate
    var fullDate_e = new Date();
    // console.log(fullDate);
    // первое этого число месяцы
    var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - (NowNumber - 1)));
    // console.log(startDate);
    // --------------------------------------------

    // находим первое число для сетки 7 на 6
    if (startDateDay == '1'){
        console.log(startDateDay);
    } else if (startDateDay == '2'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 1));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 1));
    } else if (startDateDay == '3'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 2));
        var endtDate = new Date(ffullDate_e.setDate(fullDate_e.getDate() - 2));
    } else if (startDateDay == '4'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 3));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 3));
    } else if (startDateDay == '5'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 4));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 4));
    } else if (startDateDay == '6'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 5));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 5));
    } else if (startDateDay == '7'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 6));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 6));
    }
    // console.log(startDate);

    // Последнее число для сетки 7 на 6
    var endtDate = new Date(endtDate.setDate(endtDate.getDate() + 41));

    console.log(startDate);
    console.log(fullNowDate);
    console.log(endtDate);

    // var startDate = new Date(fullDate.setDate(fullDate.getDate() + 41));
    // console.log(startDate);




    // for (var date = NowNumber; date != 0; date-1 ){
    //     var startDate = new Date(fullNowDate.setDate(fullNowDate.getDate() - ));
    //     console.log(startDate);
    // }

    

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
