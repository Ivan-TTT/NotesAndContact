$(document).ready(function() {
    eel.all_notice();
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
    console.log(SartDayWeek)


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
            var saveTaskDate_Date        = new Date(get_notice[notice][4]).toLocaleDateString();   
            console.log(saveTaskDate_Date, "banan");
            if (saveTaskDate_Date == NowDay){
                console.log("сгодня",saveTaskDate_Date)
            }
            
        } else {
            console.log("jjj")
        }


    }
}