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
const mouthElement = document.querySelector('.leftСalendar');

function getAddСalendar(nNum){


    var fullNowDate = new Date(),                       // Сегодняшняя дата 
        NowYear    = fullNowDate.getFullYear(),         // Год на данныйй момент
        NowMonth   = fullNowDate.getMonth(),            // Сегодняшний месяц
        NowNumber  = fullNowDate.getDate(),             // Сегодняшенее число
        fullDate   = new Date(),                        // Сегодняшняя дата ддя переменой startDate
        startDate  = new Date(fullDate.setDate(1)),     // первое число этого месяца
        fullDate_e = new Date(),                        // Сегодняшняя дата ддя переменой endtDate
        endtDate   = new Date(fullDate_e.setDate(1)),   // первое число этого месяца
        arrMouth   = ['январь','февраль','март','апрель','май','июнь',
                      'июль','август','сентябрь','октябрь','ноябрь','декабрь'];
    

    if (nNum =='1'){
        var startDate = new Date(fullDate.setMonth(startDate.getMonth() - 01));
        var startDate = new Date(fullDate.setDate(1));
        console.log(startDate);
    } else if (nNum =='2'){
        var startDate = new Date(fullDate.setMonth(startDate.getMonth() + 01));
        var startDate = new Date(fullDate.setDate(1));
        console.log(startDate);
    }

    var len_m = startDate.getMonth();
    
    $(".e_d").remove();
    $(".mouthСalendar").remove();
    const NewMouthElement = document.createElement ( 'li' );
    NewMouthElement.classList.add ( "mouthСalendar" );
    NewMouthElement.setAttribute ('onclick', `getAddСalendar('0')`);
    NewMouthElement.innerHTML = `
        <span class="text">${arrMouth[len_m]}</span>
    `
    mouthElement.after(NewMouthElement);

    var startDateDay = startDate.getDay();
    console.log(startDateDay);

    // for(var ssStart = 0; ssStart <= startDateDay; ssStart++){
    //     if (startDateDay > 1){
    //         var startDate = new Date(fullDate.setDate(fullDate.getDate() - 1));
    //         var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 1));
    //     } else if (startDateDay == '0'){
    //         var startDate = new Date(fullDate.setDate(fullDate.getDate() - 6));
    //         var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 6));
    //     }
    //     console.log("-",ssStart);
    // }
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
        NewСalendarElement.setAttribute ('li_Month', `${startDate.getMonth()+1}`);
        NewСalendarElement.setAttribute ('li_Date', `${startDate.getDate()}`);
        NewСalendarElement.innerHTML = `
            ${startDate.getDate()}
        `
        СalendarElement.before(NewСalendarElement);
        var startDate = new Date(fullDate.setDate(fullDate.getDate() + 1));

    }

    return
    
}

function get_calendar_js(){

}
