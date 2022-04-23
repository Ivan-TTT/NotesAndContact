$(document).ready(function() {
    eel.all_notice();
    clock();
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

// function fffffffser(){
//     eel.all_notice();
//     console.log(7575675756);
// }

var NoticeElement_Task = document.querySelector('.today_li');

eel.expose(get_notice_js)
function get_notice_js(get_notice){
    var fullNowDate = new Date(),                       // Сегодняшняя дата 
        NowDay      = fullNowDate.toLocaleDateString();
        NowYear     = fullNowDate.getFullYear(),         // Год на данныйй момент
        NowMonth    = fullNowDate.getMonth(),            // Сегодняшний месяц
        NowNumber   = fullNowDate.getDate(),             // Сегодняшенее число
        HowDayWeek  = fullNowDate.getDay(),
        SartDayWeek = new Date()

    // console.log(HowDayWeek)


    if (HowDayWeek == '1'){
        var SartDayWeek = new Date(fullNowDate.setDate(fullNowDate.getDate()));
    } else if (HowDayWeek == '2'){
        var SartDayWeek = new Date(fullNowDate.setDate(fullNowDate.getDate() - 1));
    } else if (HowDayWeek == '3'){
        var SartDayWeek = new Date(fullNowDate.setDate(fullNowDate.getDate() - 2));
    } else if (HowDayWeek == '4'){
        var SartDayWeek = new Date(fullNowDate.setDate(fullNowDate.getDate() - 3));
    } else if (HowDayWeek == '5'){
        var SartDayWeek = new Date(fullNowDate.setDate(fullNowDate.getDate() - 4));
    } else if (HowDayWeek == '6'){
        var SartDayWeek = new Date(fullNowDate.setDate(fullNowDate.getDate() - 5));
    } else if (HowDayWeek == '0'){
        var SartDayWeek = new Date(fullNowDate.setDate(fullNowDate.getDate() - 6));
    }
    console.log(SartDayWeek.toLocaleDateString())

    var Monday    = SartDayWeek.toLocaleDateString(),
        Tuesday   = new Date(SartDayWeek.setDate(SartDayWeek.getDate() + 1)).toLocaleDateString(),
        Wednesday = new Date(SartDayWeek.setDate(SartDayWeek.getDate() + 2)).toLocaleDateString(),
        Thursday  = new Date(SartDayWeek.setDate(SartDayWeek.getDate() + 3)).toLocaleDateString(),
        Friday    = new Date(SartDayWeek.setDate(SartDayWeek.getDate() + 4)).toLocaleDateString(),
        Saturday  = new Date(SartDayWeek.setDate(SartDayWeek.getDate() + 5)).toLocaleDateString(),
        Sunday    = new Date(SartDayWeek.setDate(SartDayWeek.getDate() + 6)).toLocaleDateString()

    console.log(Tuesday)


    for (var notice = 0; notice < get_notice.length; notice++){

        var saveIndex     = get_notice[notice][0];                 
        var saveCindition = get_notice[notice][1];             
        var saveQueue     = get_notice[notice][2];                

        var saveTaskText             = get_notice[notice][3];              
        var saveTaskDate             = get_notice[notice][4];           
        var saveTaskTime             = get_notice[notice][5];             
        var saveDopTaskOne           = get_notice[notice][6];            
        var saveTextareaDopTaskOne   = get_notice[notice][7];    
        var saveDopTaskTwo           = get_notice[notice][8];            
        var saveTextareaDopTaskTwo   = get_notice[notice][9];    
        var saveDopTaskThree         = get_notice[notice][10];         
        var saveTextareaDopTaskThree = get_notice[notice][11];
        
        if (saveTaskDate != ''){
            var saveTaskDate_Date = new Date(get_notice[notice][4]).toLocaleDateString(),
                sMou = new Date(get_notice[notice][4]).getUTCMonth(),
                sYea = new Date(get_notice[notice][4]).getUTCFullYear()

            console.log(sMou, sYea);
            if (saveTaskDate_Date == NowDay){
                console.log("сгодня",saveTaskDate_Date)
                NoticeElement_Task = document.querySelector('.today_li');
                create_Notice_Task(saveIndex, saveCindition, saveQueue, saveTaskText, saveTaskDate, saveTaskTime, saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo, saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree)
            } else if( saveTaskDate_Date == Monday || saveTaskDate_Date == Tuesday || saveTaskDate_Date == Wednesday || saveTaskDate_Date == Thursday || saveTaskDate_Date == Friday || saveTaskDate_Date == Saturday || saveTaskDate_Date == Sunday ){
                console.log("на недели",saveTaskDate_Date)
                NoticeElement_Task = document.querySelector('.week_li');
                create_Notice_Task(saveIndex, saveCindition, saveQueue, saveTaskText, saveTaskDate, saveTaskTime, saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo, saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree)
            } else if (( sMou == NowMonth) && (sYea == NowYear)){
                console.log("В этом месяце",saveTaskDate_Date)
                NoticeElement_Task = document.querySelector('.mouth_li');
                create_Notice_Task(saveIndex, saveCindition, saveQueue, saveTaskText, saveTaskDate, saveTaskTime, saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo, saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree)
            }
            
        } else {
            NoticeElement_Task = document.querySelector('.timme_li');
            create_Notice_Task(saveIndex, saveCindition, saveQueue, saveTaskText, saveTaskDate, saveTaskTime, saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo, saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree)
    }


    }
    
}



function create_Notice_Task(saveIndex, saveCindition, saveQueue, saveTaskText, saveTaskDate, saveTaskTime, saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo, saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree){
    
    var fullNowDate = new Date().getUTCDate();
    var saveTaskDate_Date = new Date(saveTaskDate).getUTCDate();


    const Notice_Element = document.createElement ( 'div' );
    Notice_Element.classList.add ( "Task" );

    saveTaskDate_Date < fullNowDate ? Notice_Element.classList.add ("invi") : ""; 

    saveTaskTime == "" ? Notice_Element.classList.add ("noTime") : "";

    console.log(saveIndex, saveCindition, saveQueue, saveTaskText, saveTaskDate, saveTaskTime, saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo, saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree);
    Notice_Element.innerHTML = `
       <div class="oneContent">
           <div class="itemGroupOne">
                <ul>
                    ${saveTaskText != "" ? Notice_Element.innerHTML = `
                    <li class="TextTask">
                        <input id ="Task-id_${saveIndex}" class ="inputTask-Text" type ="text"  readonly value ="${saveTaskText}" >
                    </li>
                    `: ""}
                    ${saveTaskDate != "" ? Notice_Element.innerHTML = `
                    <li class="DateTask" ${saveTaskText == "" ? 'style ="width: calc(100%)"' : ''}>
                        <input id ="DateTask-id_${saveIndex}" class ="inputDateTask " type="date" readonly value ="${saveTaskDate}" >
                    </li>
                    `: ""}
                    ${saveTaskTime != "" ? Notice_Element.innerHTML = `
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
    NoticeElement_Task.after(Notice_Element);
}

function notionTime_w(){
    [...document.getElementsByClassName('noTime')].forEach(i => i.classList.add("invisible"));
    [...document.getElementsByClassName('timmeNotice')].forEach(i => i.classList.remove("invisible"));
}

function notion_w(){
    [...document.getElementsByClassName('noTime')].forEach(i => i.classList.remove("invisible"));
    [...document.getElementsByClassName('timmeNotice')].forEach(i => i.classList.add("invisible"));
}

function sendNotification(title, options) {
    // Проверим, есть ли права на отправку уведомлений
    if (Notification.permission === "granted") {
        // Если права есть, отправим уведомление
        var notification = new Notification(title, options);
        
        function clickFunc() { alert('Пользователь кликнул на уведомление'); }
        
        notification.onclick = clickFunc;
    }
    
    // Если прав нет, пытаемся их получить
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            // Если права успешно получены, отправляем уведомление
            if (permission === "granted") {
                var notification = new Notification(title, options);
            } else {
                alert('Вы запретили показывать уведомления'); // Юзер отклонил наш запрос на показ уведомлений
            }
        });
    } 
}

// sendNotification('Верните Линуса!', {
//     body: 'Тестирование HTML5 Notifications',
//     icon: 'Img/AddDop-G.svg',
//     dir:  'auto'
// });

var ostanovit = 0
var container_Notice = document.getElementsById('todayNotice_id');
var Notice = container_Notice.getElementsByTagName('div').length;

function clock(){

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    if(hours < 10)
         hours = "0" + hours;
    if(minutes < 10)
       minutes = "0" + minutes;
    if(seconds < 10)
       seconds = "0" + seconds;
  
    var str = hours + ":" + minutes;

    // var container_Notice = document.getElementsById('todayNotice_id');
    // var Notice = container_Notice.getElementsByTagName('div').length;

    if ((str == "01:36" || str == "12:00" || str == "14:00" || str == "16:00" || str == "17:30" || str == "17:00" || str == "21:00" || str == "23:30") && (ostanovit == 0)){
        sendNotification(`Заметок на сегодня : ${Notice}`, {
            body: 'Зайдите во вкладку "Задачи"',
            dir:  'auto'
        });
        ostanovit = 1;
        setTimeout( ostanovit = 0, 61000);
    } 
  
    // // console.log(str)
    // setTimeout("clock()", 1000);

    // if (ostanovit = 1 ){
    //     setTimeout( ostanovit = 0, 60000);
    // }



};