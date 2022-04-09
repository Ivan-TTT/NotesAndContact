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
    getAddСalendar('0');
});

const СalendarElement = document.querySelector('.everyDay');

function getAddСalendar(nNum){

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
    // var startDate = new Date(fullDate.setDate(fullDate.getDate() - (NowNumber + 1)));
    var startDate = new Date(fullDate.setDate(1));
    console.log(startDate);
    // День недели первого числа месяца
    // var startDateDay = startDate.getDay();
    // console.log(startDateDay);
    // --------------------------------------------

    // Сегодняшняя дата ддя переменой startDate
    var fullDate_e = new Date();
    // console.log(fullDate);
    // первое этого число месяцы
    var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - (NowNumber + 1)));
    // --------------------------------------------
    console.log(startDate);
    if (nNum =='1'){
        // var startDate = new Date(startDate.setDate(1));
        var startDate = new Date(fullDate.setMonth(startDate.getMonth() - 01));
        var startDate = new Date(fullDate.setDate(1));
        // var startDate = new Date(fullDate.setDate(fullDate.getDate() + 1));
        console.log(startDate);

        // var sssttt = startDate.getMonth() - 1
        // var startDate = new Date(fullDate.setDate(fullDate.setMonth(sssttt)));
        // console.log(startDate.toLocaleDateString());
        $(".e_d").remove();
    } else if (nNum =='2'){
        var startDate = new Date(fullDate.setMonth(startDate.getMonth() + 01));
        var startDate = new Date(fullDate.setDate(1));
        // var startDate = new Date(fullDate.setDate(fullDate.getDate() + 1));
        console.log(startDate);

        // // var startDate = new Date(fullDate.setDate(fullDate.getDate() + 41));
        // // var startDate = new Date(fullDate.setDate(1));
        // // console.log(startDate);
        // var startDate = new Date(fullDate.setMonth(startDate.getMonth() + 01));
        // var startDate = new Date(fullDate.setDate(1));
        // // var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 1));
        $(".e_d").remove();
    }

    var startDateDay = startDate.getDay();
    console.log(startDateDay);
    // находим первое число для сетки 7 на 6
    if (startDateDay == '1'){
        console.log(startDateDay);
    } else if (startDateDay == '2'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 1));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 1));
        console.log(2);
    } else if (startDateDay == '3'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 2));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 2));
        console.log(3);
    } else if (startDateDay == '4'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 3));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 3));
        console.log(4);
    } else if (startDateDay == '5'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 4));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 4));
        console.log(5);
    } else if (startDateDay == '6'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 5));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 5));
        console.log(6);
    } else if (startDateDay == '0'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 6));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 6));
        console.log(7);
    }
    // console.log(startDate);

    // Последнее число для сетки 7 на 6
    var endtDate = new Date(endtDate.setDate(endtDate.getDate() + 41));


    console.log(startDate.toLocaleDateString());
    console.log(fullNowDate.toLocaleDateString());
    console.log(endtDate.toLocaleDateString());


    $(".e_d").remove();
    for (var date = 0; date <= 41;  date++){
        const NewСalendarElement = document.createElement ( 'li' );
        NewСalendarElement.classList.add ( "everyDay" );
        NewСalendarElement.classList.add ( "e_d" );
        startDate.getDate()  == NowNumber ? NewСalendarElement.classList.add ( "toDay" ) : "";
        startDate.getMonth() == NowMonth  ? NewСalendarElement.classList.add ( "toMonth" ) : "";
        NewСalendarElement.setAttribute ('li_all', `${startDate.toLocaleDateString()}`);
        NewСalendarElement.setAttribute ('li_Year', `${startDate.getFullYear()}`);
        NewСalendarElement.setAttribute ('li_Month', `${startDate.getMonth()}`);
        NewСalendarElement.setAttribute ('li_Date', `${startDate.getDate()}`);
        NewСalendarElement.innerHTML = `
            ${startDate.getDate()}
        `
        СalendarElement.before(NewСalendarElement);
        var startDate = new Date(fullDate.setDate(fullDate.getDate() + 1));

    }

    return
    
}
