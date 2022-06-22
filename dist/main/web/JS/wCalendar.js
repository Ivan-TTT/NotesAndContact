$(document).ready(function() {
    getAddСalendar('0');
});

const СalendarElement = document.querySelector('.everyDay');
const mouthElement = document.querySelector('.leftСalendar');
const СalendarElement_Task = document.querySelector('.Сalendar_Task');

function getAddСalendar(nNum){


    var fullNowDate = new Date(),                        // Текущая дата                          - Current date
        NowYear     = fullNowDate.getFullYear(),         // Год на данный момент                  - The year at the moment
        NowMonth    = fullNowDate.getMonth(),            // Сегодняшний месяц                     - Today's month
        NowNumber   = fullNowDate.getDate(),             // Сегодняшенее число                    - Today's date
        fullDate    = new Date(),                        // Текущая дата для переменной startDate - Current date for the StartDate variable
        startDate   = new Date(fullDate.setDate(1)),     // Первое число этого месяца             - The first day of this month
        fullDate_e  = new Date(),                        // Текущая дата для переменной endtDate  - Current date for the endtDate variable
        endtDate    = new Date(fullDate_e.setDate(1)),   // Последнее число этого месяца          - The last day of this month
        thisDay     = document.querySelector('.e_d'),
        arrMouth    = ['январь','февраль','март','апрель','май','июнь',
                      'июль','август','сентябрь','октябрь','ноябрь','декабрь'];
    

    if (nNum =='1'){
        var startDate = new Date(fullDate.setMonth(startDate.getMonth() - 01));
        var startDate = new Date(fullDate.setDate(1));
    } else if (nNum =='2'){
        var startDate = new Date(fullDate.setMonth(startDate.getMonth() + 01));
        var startDate = new Date(fullDate.setDate(1));
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
    // находим первое число для сетки 7 на 6 - we find the first number for the grid 7 by 6
    if (startDateDay == '1'){
    } else if (startDateDay == '2'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 1));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 1));
    } else if (startDateDay == '3'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 2));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 2));
    } else if (startDateDay == '4'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 3));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 3));
    } else if (startDateDay == '5'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 4));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 4));
    } else if (startDateDay == '6'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 5));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 5));
    } else if (startDateDay == '0'){
        var startDate = new Date(fullDate.setDate(fullDate.getDate() - 6));
        var endtDate = new Date(fullDate_e.setDate(fullDate_e.getDate() - 6));
    }

    // Последнее число для сетки 7 на 6 - The last number for the grid is 7 by 6
    var endtDate = new Date(endtDate.setDate(endtDate.getDate() + 41));

    $(".e_d").remove();
    for (var date = 0; date <= 41;  date++){
        const NewСalendarElement = document.createElement ( 'li' );
        NewСalendarElement.classList.add ( "everyDay" );
        NewСalendarElement.classList.add ( "e_d" );
        (startDate.getDate() == NowNumber) && (startDate.getMonth() == NowMonth) ? NewСalendarElement.classList.add ( "toDay" ) : "";
        startDate.getDate()  == NowNumber ? NewСalendarElement.classList.add ( "toGetDay" ) : "";
        startDate.getMonth() == NowMonth  ? NewСalendarElement.classList.add ( "toMonth" ) : "";
        NewСalendarElement.setAttribute ('li_all', `${startDate.toLocaleDateString()}`);
        NewСalendarElement.setAttribute ('li_Year', `${startDate.getFullYear()}`);
        NewСalendarElement.setAttribute ('li_Month', `${startDate.getMonth()+1}`);
        NewСalendarElement.setAttribute ('li_Date', `${startDate.getDate()}`);
        NewСalendarElement.setAttribute ('onclick', ` whyThisDate()`);
        NewСalendarElement.innerHTML = `
            <div id ="m_${startDate.toLocaleDateString()}" class="metka"></div>
            <div id ="z_${startDate.toLocaleDateString()}" class="metka"></div>
            <span class="text">${startDate.getDate()}</span>
            <div id ="t_${startDate.toLocaleDateString()}" class="metka"></div>
            <div id ="p_${startDate.toLocaleDateString()}" class="metka"></div>
        `
        СalendarElement.before(NewСalendarElement);
        var startDate = new Date(fullDate.setDate(fullDate.getDate() + 1));

    }
    whyThisDate();

    return
}

var mmet_dom_p = 0;
function whyThisDate(){

    $(".Сa_Task").remove();
    $(".e_d").click(function () {
        $(".e_d").removeClass("toGetDay");
        $(this).addClass("toGetDay");
    });

    const output = [];
    function viev_date(){
        [...document.querySelectorAll('.toGetDay')].forEach(item => {
            output.push({
                date: item.getAttribute('li_all')
            });
        });
        localStorage.setItem('this_date_LS',`${output[0].date}`);
        setTimeout(eel.all_calendar(), 50);
    }
    setTimeout(viev_date, 500);
    mmet_dom_p = 0;
    return
}

eel.expose(get_calendar_js)
function get_calendar_js(get_calendar){
    for (var tasks = 0; tasks < get_calendar.length; tasks++){

        var saveIndex     = get_calendar[tasks][0];                 
        var saveCindition = get_calendar[tasks][1];             
        var saveQueue     = get_calendar[tasks][2];                

        var saveTaskText             = get_calendar[tasks][3];              
        var saveTaskDate             = get_calendar[tasks][4];           
        var saveTaskTime             = get_calendar[tasks][5];             
        var saveDopTaskOne           = get_calendar[tasks][6];            
        var saveTextareaDopTaskOne   = get_calendar[tasks][7];    
        var saveDopTaskTwo           = get_calendar[tasks][8];            
        var saveTextareaDopTaskTwo   = get_calendar[tasks][9];    
        var saveDopTaskThree         = get_calendar[tasks][10];         
        var saveTextareaDopTaskThree = get_calendar[tasks][11]; 

        var saveTaskDate_Date        = new Date(get_calendar[tasks][4]).toLocaleDateString();   
        var col_met = document.querySelectorAll('.metka');
        
        for (var i = 0, length = col_met.length; i < length; i++) {
            var mmet_dom = 0;
            if ((col_met[i].id == `m_${saveTaskDate_Date}`) == 1){
                col_met[i].classList.add("visi");
            }
        }

        if (saveTaskDate_Date == localStorage.getItem('this_date_LS') ){
            mmet_dom_p = mmet_dom_p+1;
            console.log("выполненно");
            setTimeout(create_Сalendar_Task(saveIndex, saveCindition, saveQueue, saveTaskText, saveTaskDate, saveTaskTime, saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo, saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree), 40);
        }
    }
}

function create_Сalendar_Task(saveIndex, saveCindition, saveQueue, saveTaskText, saveTaskDate, saveTaskTime, saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo, saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree){
    const Сalendar_Element = document.createElement ( 'div' );
    Сalendar_Element.classList.add ( "Task" );
    Сalendar_Element.classList.add ( "Сa_Task" );
    Сalendar_Element.innerHTML = `
       <div class="oneContent">
           <div class="itemGroupOne">
                <ul>
                    ${saveTaskText != "" ? Сalendar_Element.innerHTML = `
                    <li class="TextTask">
                        <input id ="Task-id_${saveIndex}" class ="inputTask-Text" type ="text"  readonly value ="${saveTaskText}" >
                    </li>
                    `: ""}
                    ${saveTaskDate != "" ? Сalendar_Element.innerHTML = `
                    <li class="DateTask" ${saveTaskText == "" ? 'style ="width: calc(100%)"' : ''}>
                        <input id ="DateTask-id_${saveIndex}" class ="inputDateTask " type="date" readonly value ="${saveTaskDate}" >
                    </li>
                    `: ""}
                    ${saveTaskTime != "" ? Сalendar_Element.innerHTML = `
                    <li class="TimeTask" ${(saveTaskText == "") && (saveTaskDate == "") ? 'style ="width: calc(100%)"' : ''}>
                        <input id ="TimeTask-id_${saveIndex}" class ="inputTimeTask " type ="time" readonly value ="${saveTaskTime}" >
                    </li class ="TimeTask">
                    `: ""}
                </ul>
           </div>
       </div>
       <div id ="itemGroupTwo_id" class ="itemGroupTwo " style ='display:${(saveDopTaskOne || saveTextareaDopTaskOne || saveDopTaskTwo ||
            saveTextareaDopTaskTwo || saveDopTaskThree || saveTextareaDopTaskThree) != "" ? "flex": "none"}'>
            <ul>
                <li>
                    <input id ="DopTaskOne-id_${saveIndex}" class ="input-DopTaskOne" type ="text" readonly value ="${ saveDopTaskOne != ""     
                    ? saveDopTaskOne: "" }">
                    <textarea id ="textareaDopTaskOne-id" class ="textarea-DopTaskOne" cols="54" rows="5" readonly >${ saveTextareaDopTaskOne != 
                    "" ? saveTextareaDopTaskOne: "" }</textarea>
                </li>
                <li>
                    <input id ="DopTaskTwo-id_${saveIndex}" class ="input-DopTaskTwo" type ="text" readonly value ="${ saveDopTaskTwo != ""     
                    ? saveDopTaskTwo: "" }" >
                    <textarea id ="textareaDopTaskTwo-id_${saveIndex}" class ="textarea-DopTaskTwo" cols ="54" rows ="5" readonly >${ saveTextareaDopTaskTwo != 
                    "" ? saveTextareaDopTaskTwo: "" }</textarea>
                </li>
                <li>
                    <input id ="DopTaskThree-id_${saveIndex}" class ="input-DopTaskThree" type ="text" readonly value ="${ saveDopTaskThree != ""     
                    ? saveDopTaskThree: "" }" >
                    <textarea id ="textareaDopTaskThree-id_${saveIndex}" class ="textarea-DopTaskThree" cols ="54" rows ="5" readonly >${ saveTextareaDopTaskThree != 
                        ""? saveTextareaDopTaskThree: " "}</textarea>
                </li>
            </ul>
        </div>
    `
    СalendarElement_Task.after(Сalendar_Element);
}