
$(document).ready(function() {
    eel.update_all_task();
    localStorage.setItem(`IdTrisTask`,``);
    localStorage.setItem('Editing','');
    localStorage.setItem('OneCreated','no');
    localStorage.setItem('VisibleNumber','yes');
    localStorage.setItem('ActiveOrPasiveTask','active');
    console.log('HTML загружен');
    visibleNum();
    activeTask();
});


function toggle_js(){
    var sidePanel = document.querySelector(".sidePanel");
    sidePanel.classList.toggle("close");
    if (sidePanel.classList.contains("close")){
        localStorage.setItem('VisibleNumber','yes');
    }
    else{
        localStorage.setItem('VisibleNumber','no');
    };
    visibleNum()
}

function visibleNum(){
    // var queue = document.querySelector(".queue");
    if (localStorage.getItem('VisibleNumber') == "no"){
        // queue.classList.forEach(i => i.classList.add("invisible"));
        [...document.getElementsByClassName('queue')].forEach(i => i.classList.add("invisible"));
    }
    else{
        [...document.getElementsByClassName('queue')].forEach(i => i.classList.remove("invisible"));
        // queue.classList.remove("invisible");
    }
}





function AddNewDopTaskFunction(id) {
    var toggleElements = document.querySelectorAll(".itemGroupTwo");
    var toogledElement = document.querySelector("#" + id);
    if (toogledElement.style.display == 'none'){
        toogledElement.style.display == 'flex'
        $( toogledElement ).toggle('hide');
    }
    else{
        toogledElement.style.display == 'none'
        $( toogledElement ).toggle('hide'); //.slideToggle
    }
}
// src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"
// $( function() {
//     $( ".home" ).sortable({
//       placeholder: "Task"
//     });
//     $( ".home" ).disableSelection();
// } );

// $(".home").sortable({
//     stop: function(event, ui) {
//         alert("New position: " + ui.item.index());
//     }
// });
// $(".home").disableSelection();

$( ".home" ).sortable({
    start: function(event, ui) {
        ui.item.startPos = ui.item.index();
    },
    stop: function(event, ui) {
        console.log("Start position: " + ui.item.startPos);
        console.log("New position: " + ui.item.index());
    }
});


const TaskElement = document.querySelector('.Task');
const TaskElementContent = TaskElement.innerHTML;
// console.log(TaskElementContent);

function getAddTask(){

    if (localStorage.getItem('OneCreated') == "no" && localStorage.getItem('ActiveOrPasiveTask') == 'active') {

        numberOfTasks = document.getElementsByClassName('Task').length;
        console.log(numberOfTasks);

        localStorage.setItem('Editing','');

        localStorage.setItem('OneCreated','yes');

        const NewTaskElement = document.createElement ( 'div' );
        NewTaskElement.classList.add ( "Task" );
        NewTaskElement.setAttribute ('id', '0');
        NewTaskElement.innerHTML = `
           <div class="oneContent">
               <nav class="queue">
                    <div class="higher">▲</div>
                    <input type="number">
                    <div class="below">▼</div> <!-- доделать в js -->
               </nav>
               <div class="itemGroupOne">
                    <ul>
                       <li class ="ProgressTask">
                           <img class ="Progress-img " src ="Img/zero-G.svg" alt ="">
                       </li>
                       <li class="TextTask">
                           <input id ="Task-id" class ="inputTask-Text" type ="text" placeholder ="Напишите заметку..." >
                       </li>
                       <li class="DateTask">
                           <input id ="DateTask-id" class ="inputDateTask " type="date" >
                       </li>
                       <li class="TimeTask">
                           <input id ="TimeTask-id" class ="inputTimeTask " type ="time" >
                       </li class ="TimeTask">
                       <li id ="AddNewDopTask_id" class ="AddNewDopTask" onClick ="AddNewDopTaskFunction('itemGroupTwo_id')">
                           <img class ="addDop-img" src ="Img/AddDop-G.svg" alt ="">
                       </li>
                       <li class ="SaveTask" onClick ="saveTaskFunction ()">
                           <img class ="saveTask-img" src ="Img/Save-G.svg" alt ="" >
                       </li>
                    </ul>
               </div>
           </div>
           <div id ="itemGroupTwo_id" class ="itemGroupTwo " style ='display:none'>
                <ul>
                    <li>
                        <input id ="DopTaskOne-id" class ="input-DopTaskOne" type ="text" placeholder ="Напишите коментарии...">
                        <textarea id ="textareaDopTaskOne-id" class ="textarea-DopTaskOne" cols="54" rows="5"></textarea>
                    </li>
                    <li>
                        <input id ="DopTaskTwo-id" class ="input-DopTaskTwo" type ="text" placeholder ="Напишите регламент...">
                        <textarea id ="textareaDopTaskTwo-id" class ="textarea-DopTaskTwo" cols ="54" rows ="5"></textarea>
                    </li>
                    <li>
                        <input id ="DopTaskThree-id" class ="input-DopTaskThree" type ="text" placeholder ="Напишите особенности...">
                        <textarea id ="textareaDopTaskThree-id" class ="textarea-DopTaskThree" cols ="54" rows ="5"></textarea>
                    </li>
                </ul>
           </div>
        `
        TaskElement.after(NewTaskElement);
        visibleNum()
    }
}


number_stchet = localStorage.getItem('Number');
localStorage.setItem('Number', number_stchet++);


// {1} - Создает переменные, которые привязанны к полям ввода ( по классам )
//       Если полее ввода не пустое, то переменная хранит значение этого поля
// {2} - Функция if проверяет все поля ввода, если хотя бы одно поле заполненно следует:
//       локальный номер (счетчик сумируеться++), создаються 3 переменных со значениями
// {3} - Все созданные переенные передаються в функцию (taskValue_js)

// {1} {2} {3}
function saveTaskFunction (){
    // {1}
    // Текст, дата, время
    var saveTaskText = document.getElementById("Task-id").value; saveTaskText != ""         // Блок с созданием переменых
    ? console.log(saveTaskText): "" ;                                                       // Создаються переменные которой присваеваться тест из поллей ввода и выводяться в консоль
    var saveTaskDate = document.getElementById("DateTask-id").value; saveTaskDate != ""     // Поля с текстом, датой, временем, дополнительным текстом.
    ? console.log(saveTaskDate): "";                                                        // 
    var saveTaskTime = document.getElementById("TimeTask-id").value; saveTaskTime != ""     //
    ? console.log(saveTaskTime): "";                                                        // 
    // Коментарии
    var saveDopTaskOne = document.getElementById("DopTaskOne-id").value; saveDopTaskOne != ""     
    ? console.log(saveDopTaskOne): "";
    var saveTextareaDopTaskOne = document.getElementById("textareaDopTaskOne-id").value; saveTextareaDopTaskOne != ""     
    ? console.log(saveTextareaDopTaskOne): "";
    // Регламент
    var saveDopTaskTwo = document.getElementById("DopTaskTwo-id").value; saveDopTaskTwo != ""     
    ? console.log(saveDopTaskTwo): "";
    var saveTextareaDopTaskTwo = document.getElementById("textareaDopTaskTwo-id").value; saveTextareaDopTaskTwo != ""     
    ? console.log(saveTextareaDopTaskTwo): "";
    // Особенности
    var saveDopTaskThree = document.getElementById("DopTaskThree-id").value; saveDopTaskThree != ""     
    ? console.log(saveDopTaskThree): "";
    var saveTextareaDopTaskThree = document.getElementById("textareaDopTaskThree-id").value; saveTextareaDopTaskThree != ""     
    ? console.log(saveTextareaDopTaskThree): "";

    // {2}
    if (((saveTaskText || saveTaskDate || saveTaskTime || saveDopTaskOne || saveTextareaDopTaskOne ||        // Данная функция проверяет заполнены ли поля ввода - данными
        saveDopTaskTwo || saveTextareaDopTaskTwo || saveDopTaskThree || saveTextareaDopTaskThree) != "") && (localStorage.getItem('Editing')) == ""){   // Если хоть одно поле заполненно - создаеться шаблон для Заметки
        console.log("Данные передаються в базу");                                                           // Если в поле вода есть значение - то это поле добавляеться в созданую форму с этим значением
        
        let TaskArr = [saveTaskText, saveTaskDate, saveTaskTime, saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo, saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree];
        console.log(TaskArr);
        localStorage.setItem('Task',TaskArr);
        localStorage.setItem('Number', number_stchet++);

        var saveIndex = localStorage.getItem('Number');
        var saveCindition = "start";
        var saveQueue = 1;

        // {3}
        taskValue_js(saveIndex, saveCindition, saveQueue, 
            saveTaskText, saveTaskDate, saveTaskTime,
            saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo,
            saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree);

    } else {
        alert( 'Верно!' );
        var saveIndex = localStorage.getItem('IdThisTask');
        var saveCindition = "start";
        var saveQueue = 1;

        taskValue_js(saveIndex, saveCindition, saveQueue, 
            saveTaskText, saveTaskDate, saveTaskTime,
            saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo,
            saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree);
    }
}

// {4} - Значения принимает функция (taskValue_js)
//       Функция if проверяет все поля ввода, если хотя бы одно поле заполненно следует:
//       Переменные передаються функции (eel.taskValue), которая добавляет элементы в базу данных
//       Запускаеться функция (eel.update_all_task)

// {4}
async function taskValue_js(saveIndex, saveCindition, saveQueue, saveTaskText, saveTaskDate, saveTaskTime, saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo, saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree){
    if ((saveTaskText || saveTaskDate || saveTaskTime || saveDopTaskOne || saveTextareaDopTaskOne ||       
        saveDopTaskTwo || saveTextareaDopTaskTwo || saveDopTaskThree || saveTextareaDopTaskThree) != ""){
        eel.taskValue(saveIndex, saveCindition, saveQueue, saveTaskText, saveTaskDate, saveTaskTime, saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo, saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree);
        eel.update_all_task();
        }
};

// {5} - Функция (eel.update_all_task) достает значения из базы данных
//       Значения передаються в js функцию (get_update_task_js) в виде списка
//       Функция (get_update_task_js) принимает значения списком
//       Удаляються все элементы с классом .Task 
//       Функция for проверяет если значение списка меньше длинные списка то:
//       Создаються переменные которые равняються индексу списка и значение списка++
//       Созданные переменные передаються в функцию (createTask_ReceivedBd)

// {5}
eel.expose(get_update_task_js)
function get_update_task_js(tasks_items){
    $(".Task div").remove();
    localStorage.setItem('OneCreated','no');
    localStorage.setItem('Editing','');
    console.log("Обновление списка");
    for (var tasks = 0; tasks < tasks_items.length; tasks++){

        var saveIndex = tasks_items[tasks][0];                 //
        var saveCindition = tasks_items[tasks][1];             //
        var saveQueue  = tasks_items[tasks][2];                //

        var saveTaskText = tasks_items[tasks][3];              //
        var saveTaskDate = tasks_items[tasks][4];              //
        var saveTaskTime  = tasks_items[tasks][5];             //
        var saveDopTaskOne = tasks_items[tasks][6];            //
        var saveTextareaDopTaskOne = tasks_items[tasks][7];    //
        var saveDopTaskTwo = tasks_items[tasks][8];            //
        var saveTextareaDopTaskTwo = tasks_items[tasks][9];    //
        var saveDopTaskThree = tasks_items[tasks][10];         //
        var saveTextareaDopTaskThree = tasks_items[tasks][11]; //
        createTask_ReceivedBd(saveIndex, saveCindition, saveQueue, saveTaskText, saveTaskDate, saveTaskTime, saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo, saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree);       
    }
    visibleNum()
};

// {6} - Функция (createTask_ReceivedBd) принимает значения
//       Создает 'div' с классами .Task, .indent, .colorA
//       Записывает в только что созданный див, часть кода HTML с некоторыми проверками

function createTask_ReceivedBd(saveIndex, saveCindition, saveQueue, saveTaskText, saveTaskDate, saveTaskTime, saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo, saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree){    
    // localStorage.setItem('Number', number_stchet++);
    const saveTaskElement = document.createElement ( 'div' );
    saveTaskElement.classList.add ( "Task" );
    saveTaskElement.classList.add ( `${saveCindition == "finish" ? "pPpAsive" : "aAaKtive"}` );
    saveTaskElement.setAttribute ('id', `${saveIndex}`);
    saveTaskElement.innerHTML = `
    <div class="oneContent">
        <nav class="queue">
            <div class="higher">▲</div>
            <input type="number" readonly value ="${saveQueue}">
            <div class="below">▼</div> <!-- доделать в js -->
        </nav>
        <div class="itemGroupOne">
             <ul>
                <li class ="ProgressTask" onClick="status()">
                    <img class ="Progress-img " src =" ${saveCindition == "start" 
                    ? 'Img/zero-G.svg' : ''} ${saveCindition == "middle" 
                    ? 'Img/One-G.svg' : ''} ${saveCindition == "finish" 
                    ? 'Img/two-G.svg' : ''}" alt ="">
                </li>
                ${saveTaskText != "" ? saveTaskElement.innerHTML = `
                <li class="TextTask">
                    <input id ="Task-id_${saveIndex}" class ="inputTask-Text" type ="text" placeholder ="Напишите заметку..." readonly value ="${saveTaskText}" >
                </li>
                `: ""}
                ${saveTaskDate != "" ? saveTaskElement.innerHTML = `
                <li class="DateTask" ${saveTaskText == "" ? 'style ="width: calc(100%)"' : ''}>
                    <input id ="DateTask-id_${saveIndex}" class ="inputDateTask " type="date" readonly value ="${saveTaskDate}" >
                </li>
                `: ""}
                ${saveTaskTime != "" ? saveTaskElement.innerHTML = `
                <li class="TimeTask" ${(saveTaskText == "") && (saveTaskDate == "") ? 'style ="width: calc(100%)"' : ''}>
                    <input id ="TimeTask-id_${saveIndex}" class ="inputTimeTask " type ="time" readonly value ="${saveTaskTime}" >
                </li class ="TimeTask">
                `: ""}
                <li class ="SaveTask" onClick ="editingTask ()">
                    <img class ="saveTask-img" src ="Img/Pensil-G.svg" alt ="" >
                </li>
             </ul>
        </div>
    </div>
        <div id ="itemGroupTwo_id" class ="itemGroupTwo " style ='display:${(saveDopTaskOne || saveTextareaDopTaskOne || saveDopTaskTwo ||
            saveTextareaDopTaskTwo || saveDopTaskThree || saveTextareaDopTaskThree) != "" ? "flex": "none"}'>
            <ul>
                <li>
                    <input id ="DopTaskOne-id_${saveIndex}" class ="input-DopTaskOne" type ="text" placeholder ="Напишите коментарии..." readonly value ="${ saveDopTaskOne != ""     
                    ? saveDopTaskOne: "" }">
                    <textarea id ="textareaDopTaskOne-id" class ="textarea-DopTaskOne" cols="54" rows="5" readonly >${ saveTextareaDopTaskOne != 
                    "" ? saveTextareaDopTaskOne: "" }</textarea>
                </li>
                <li>
                    <input id ="DopTaskTwo-id_${saveIndex}" class ="input-DopTaskTwo" type ="text" placeholder ="Напишите регламент..." readonly value ="${ saveDopTaskTwo != ""     
                    ? saveDopTaskTwo: "" }" >
                    <textarea id ="textareaDopTaskTwo-id_${saveIndex}" class ="textarea-DopTaskTwo" cols ="54" rows ="5" readonly >${ saveTextareaDopTaskTwo != 
                    "" ? saveTextareaDopTaskTwo: "" }</textarea>
                </li>
                <li>
                    <input id ="DopTaskThree-id_${saveIndex}" class ="input-DopTaskThree" type ="text" placeholder ="Напишите особенности..." readonly value ="${ saveDopTaskThree != ""     
                    ? saveDopTaskThree: "" }" >
                    <textarea id ="textareaDopTaskThree-id_${saveIndex}" class ="textarea-DopTaskThree" cols ="54" rows ="5" readonly >${ saveTextareaDopTaskThree != 
                        ""? saveTextareaDopTaskThree: " "}</textarea>
                </li>
            </ul>
        </div>
    `           
    TaskElement.after( saveTaskElement );    
    activeTask();
}

const Tasks = JSON.parse(localStorage.getItem("Task"));
const sizeSorege = localStorage.length;

function editingTask(){
    if (localStorage.getItem('OneCreated') == "no" && localStorage.getItem('ActiveOrPasiveTask') == 'active') {
        $('.Task').on('click', function(){ 
            let index = $(this).attr('id');
            console.info(`Id этой заметки = ${index}`);
            localStorage.setItem(`IdThisTask`,`${index}`);
            idTransfer_js(index);
            $(this).remove();
            $('.Task').unbind('click');
        });
        localStorage.setItem('OneCreated','yes'); 
    }  
}

// Значение принимаеться из функции (editingTask)
// Функция принимает значение и передает его в Python
// Из пайтон передает значение функции с SQL запросом
// Запрос сравнивает значение в столбце index_t,
// Если значение совподает то возвращаеться целая строка
async function idTransfer_js(index){
    console.log(`index = "${index}" пердаеться в python`);
    eel.idTransfer(index);
    eel.creatingLineId();
    eel.expose(retuuurnLineId_js) // запуск функции (retuuurnLineId_js)
};

function retuuurnLineId_js(line_items){
    console.log("елки палки"); 
    for (var line = 0; line < line_items.length; line++){
        var saveIndex = line_items[line][0];                 //
        var saveCindition = line_items[line][1];             //
        var saveQueue  = line_items[line][2];                //
        var saveTaskText = line_items[line][3];              //
        var saveTaskDate = line_items[line][4];              //
        var saveTaskTime  = line_items[line][5];             //
        var saveDopTaskOne = line_items[line][6];            //
        var saveTextareaDopTaskOne = line_items[line][7];    //
        var saveDopTaskTwo = line_items[line][8];            //
        var saveTextareaDopTaskTwo = line_items[line][9];    //
        var saveDopTaskThree = line_items[line][10];         //
        var saveTextareaDopTaskThree = line_items[line][11]; //  
    }    
    createTask_editing(saveIndex, saveCindition, saveQueue, saveTaskText, saveTaskDate, saveTaskTime, saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo, saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree);   
};

function createTask_editing(saveIndex, saveCindition, saveQueue, saveTaskText, saveTaskDate, saveTaskTime, saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo, saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree){
    
    localStorage.setItem('Editing','active');
    
    const NewTaskElement = document.createElement ( 'div' );
    NewTaskElement.classList.add ( "Task" );
    NewTaskElement.setAttribute ('id', `${saveIndex}`);
    NewTaskElement.innerHTML = `
    <div class="oneContent">
        <nav class="queue">
             <div class="higher">▲</div>
             <input type="number">
             <div class="below">▼</div> <!-- доделать в js -->
        </nav>
        <div class="itemGroupOne">
             <ul>
                <li class ="ProgressTask">
                    <img class ="Progress-img " src ="Img/zero-G.svg" alt ="">
                </li>
                <li class="TextTask">
                    <input id ="Task-id" class ="inputTask-Text" type ="text" placeholder ="Напишите заметку..." value ="${saveTaskText}" >
                </li>
                <li class="DateTask">
                    <input id ="DateTask-id" class ="inputDateTask " type="date" value ="${saveTaskDate}" >
                </li>
                <li class="TimeTask">
                    <input id ="TimeTask-id" class ="inputTimeTask " type ="time" value ="${saveTaskTime}" >
                </li class ="TimeTask">
                <li id ="AddNewDopTask_id" class ="AddNewDopTask" onClick ="AddNewDopTaskFunction('itemGroupTwo_id')">
                    <img class ="addDop-img" src ="Img/AddDop-G.svg" alt ="">
                </li>
                <li class ="SaveTask" onClick ="saveTaskFunction ()">
                    <img class ="saveTask-img" src ="Img/Save-G.svg" alt ="" >
                </li>
             </ul>
        </div>
    </div>
    <div id ="itemGroupTwo_id" class ="itemGroupTwo " style='display:${(saveDopTaskOne || saveTextareaDopTaskOne || saveDopTaskTwo ||
        saveTextareaDopTaskTwo || saveDopTaskThree || saveTextareaDopTaskThree) != "" ? "flex": "none"}'>
         <ul>
             <li>
                 <input id ="DopTaskOne-id" class ="input-DopTaskOne" type ="text" placeholder ="Напишите коментарии..." value ="${saveDopTaskOne}" >
                 <textarea id ="textareaDopTaskOne-id" class ="textarea-DopTaskOne" cols="54" rows="5">${ saveTextareaDopTaskOne}</textarea>
             </li>
             <li>
                 <input id ="DopTaskTwo-id" class ="input-DopTaskTwo" type ="text" placeholder ="Напишите регламент..." value ="${ saveDopTaskTwo}" >
                 <textarea id ="textareaDopTaskTwo-id" class ="textarea-DopTaskTwo" cols ="54" rows ="5">${ saveTextareaDopTaskTwo }</textarea>
             </li>
             <li>
                 <input id ="DopTaskThree-id" class ="input-DopTaskThree" type ="text" placeholder ="Напишите особенности..." value ="${ saveDopTaskThree }" >
                 <textarea id ="textareaDopTaskThree-id" class ="textarea-DopTaskThree" cols ="54" rows ="5">${ saveTextareaDopTaskThree}</textarea>
             </li>
         </ul>
    </div>
    `
    TaskElement.after(NewTaskElement);
}


function activeTask(){
    localStorage.setItem('ActiveOrPasiveTask','active');
    console.log("актив");
    [...document.getElementsByClassName('pPpAsive')].forEach(i => i.classList.add("invisible"));
    [...document.getElementsByClassName('aAaKtive')].forEach(i => i.classList.remove("invisible"));
    // var oOpen = document.getElementsByClassName(".oOpen");
    // var cClose = document.getElementsByClassName(".cClose");
    // oOpen.style.opacity = "1";
    // cClose.style.opacity = "0.5";
}
function pasiveTask(){
    localStorage.setItem('ActiveOrPasiveTask','pasive');
    console.log("пасив");
    [...document.getElementsByClassName('aAaKtive')].forEach(i => i.classList.add("invisible"));
    [...document.getElementsByClassName('pPpAsive')].forEach(i => i.classList.remove("invisible"));
    // var oOpen = document.getElementsByClassName(".oOpen");
    // var cClose = document.getElementsByClassName(".cClose");
    // oOpen.style.opacity = "0.5";
    // cClose.style.opacity = "1";
}

function status(){
    console.log("Статус");
    $('.Task').on('click', function(){ 
        let index = $(this).attr('id');
        console.info(`Id этой заметки = ${index}`);
        localStorage.setItem(`IdThisTask`,`${index}`);
        idTransfer_status_js(index);
        $('.Task').unbind('click');
    });
}

async function idTransfer_status_js(index){
    console.log(`index = "${index}" пердаеться в python`);

    eel.idTransfer_status(index);
    eel.creatingStatusId();
    eel.expose(retuuurnStatusId_js); 
};

function retuuurnStatusId_js(status){
    console.log(status);
    eel.update_all_task();
}
