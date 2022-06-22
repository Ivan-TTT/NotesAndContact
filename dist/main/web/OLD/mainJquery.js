
$(document).ready(function() {
    //eel.update_all_task();
    localStorage.setItem(`IdTrisTask`,``);
    localStorage.setItem('Editing','');
    console.log('HTML загружен');
});

const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

function AddNewDopTaskFunction(id) {
    var toggleElements = document.querySelectorAll(".itemGroupTwo");
    var toogledElement = document.querySelector("#" + id);
  
    toogledElement.style.display = toogledElement.style.display == 'none' ? 'flex' : 'none'; // работаем с нужным блоком   
}


const TaskElement = document.querySelector('.Task');
const TaskElementContent = TaskElement.innerHTML;
// console.log(TaskElementContent);

function getAddTask(){
    numberOfTasks = document.getElementsByClassName('Task').length;
    console.log(numberOfTasks);

    localStorage.setItem('Editing','');

    const NewTaskElement = document.createElement ( 'div' );
    NewTaskElement.classList.add ( "Task" );
    NewTaskElement.classList.add ( "indent" ); 
    NewTaskElement.classList.add ( "colorA" );
    NewTaskElement.setAttribute ('id', '0');
    NewTaskElement.innerHTML = `
        <div class ="itemGroupOne colorB colorC">
            <div class ="ProgressTask indentTask">
                <img class ="Progress-img " src ="Img/zero-G.svg" alt ="">
            </div>
            <div class="TextTask    indentTask">
                <input id ="Task-id" class ="inputTask-Text input-seze-One " type ="text" name ="Task-name" placeholder ="Напишите заметку..." >
            </div>
            <div class="DateTask     indentTask">
                <input id ="DateTask-id" class ="input-seze-One " type="date" >
            </div>
            <div class ="TimeTask   indentTask">
                <input id ="TimeTask-id" class ="input-seze-One " type ="time" >
            </div>
            <div id ="AddNewDopTask_id" class ="AddNewDopTask indentTask" onClick ="AddNewDopTaskFunction('itemGroupTwo_id_')" >
                <img class ="addDop-img" src ="Img/AddDop-G.svg" alt ="">
            </div> 
            <div class ="SaveTask indentTask" onClick ="saveTaskFunction ()">
                <img class ="saveTask-img" src ="Img/Save-G.svg" alt ="" >
            </div>
        </div>
        <div id ="itemGroupTwo_id_" class ="itemGroupTwo " style ='display:none'>
            <div class="DopTask DopTaskOne indentTask colorB">
                <input id ="DopTaskOne-id" class ="input-DopTaskOne input-seze-Two " type ="text" name ="DopTaskOne-name" placeholder ="Напишите коментарии...">
                <textarea id ="textareaDopTaskOne-id" class ="textarea-DopTaskOne input-seze-Two"  name ="comment" cols="40" rows="3"></textarea>
            </div>
            <div class="DopTask DopTaskTwo indentTask colorB">
                <input id ="DopTaskTwo-id" class ="input-DopTaskTwo input-seze-Two" type ="text" name ="DopTaskTwo-name"  placeholder ="Напишите регламент...">
                <textarea id ="textareaDopTaskTwo-id" class ="textarea-DopTaskTwo input-seze-Two" name ="comment" cols ="40" rows ="3"></textarea>
            </div>
            <div class="DopTask DopTaskThree indentTask colorB">
                <input id ="DopTaskThree-id" class ="input-DopTaskThree input-seze-Two " type ="text" name ="DopTaskThree-name" placeholder ="Напишите особенности...">
                <textarea id ="textareaDopTaskThree-id" class ="textarea-DopTaskThree input-seze-Two" name ="comment" cols ="40" rows ="3"></textarea>
            </div>
        </div>
    `
    TaskElement.after(NewTaskElement);
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
};

// {6} - Функция (createTask_ReceivedBd) принимает значения
//       Создает 'div' с классами .Task, .indent, .colorA
//       Записывает в только что созданный див, часть кода HTML с некоторыми проверками

function createTask_ReceivedBd(saveIndex, saveCindition, saveQueue, saveTaskText, saveTaskDate, saveTaskTime, saveDopTaskOne, saveTextareaDopTaskOne, saveDopTaskTwo, saveTextareaDopTaskTwo, saveDopTaskThree, saveTextareaDopTaskThree){    
    // localStorage.setItem('Number', number_stchet++);
    const saveTaskElement = document.createElement ( 'div' );
    saveTaskElement.classList.add ( "Task" );
    saveTaskElement.classList.add ( "indent" );
    saveTaskElement.classList.add ( "colorA" );
    saveTaskElement.setAttribute ('id', `${saveIndex}`)
    saveTaskElement.innerHTML = `
    <div class="itemGroupOne colorC">
        <div class="ProgressTask indentTask">
            <img class="Progress-img " src="Img/zero-G.svg" alt="">
        </div>
        ${saveTaskText != "" ? saveTaskElement.innerHTML = ` 
            <div class="TextTask    indentTask">
                <input id ="Task-id_${saveIndex}" class ="inputTask-Text input-seze-One" type ="text" name ="Task-name" placeholder ="Напишите заметку..." readonly value ="${saveTaskText}" >
            </div>
        `: ""} 
        ${saveTaskDate != "" ? saveTaskElement.innerHTML = `
            <div class="DateTask     indentTask">
                <input id ="DateTask-id_${saveIndex}" class ="input-seze-One" type="date"  readonly value ="${saveTaskDate}" >
            </div>
        `: ""}
        ${saveTaskTime != "" ? saveTaskElement.innerHTML = `
            <div class ="TimeTask   indentTask">
                <input id ="TimeTask-id_${saveIndex}" class ="input-seze-One" type ="time" readonly value ="${saveTaskTime}" >
            </div>
        `: ""}
        <div class="SaveTask indentTask" >
            <img class ="saveTask-img" src ="Img/Pensil-G.svg" alt="" onClick ="editingTask ()">
        </div>
    </div>
    <div id="itemGroupTwo_id_" class="itemGroupTwo " style='display:${(saveDopTaskOne || saveTextareaDopTaskOne || saveDopTaskTwo ||
        saveTextareaDopTaskTwo || saveDopTaskThree || saveTextareaDopTaskThree) != "" ? "flex": "none"}'>
        <div class="DopTask DopTaskOne indentTask">
            <input id ="DopTaskOne-id_${saveIndex}" class ="input-DopTaskOne input-seze-Two" type ="text" name ="DopTaskOne-name" readonly value ="${ saveDopTaskOne != ""     
            ? saveDopTaskOne: "" }" >
            <textarea id ="textareaDopTaskOne-id_${saveIndex}" class ="textarea-DopTaskOne input-seze-Two"  name ="comment" cols="40" rows="3" readonly >${ saveTextareaDopTaskOne != 
            "" ? saveTextareaDopTaskOne: "" }</textarea>
        </div>
        <div class="DopTask DopTaskTwo indentTask">
            <input id ="DopTaskTwo-id_${saveIndex}" class ="input-DopTaskTwo input-seze-Two" type ="text" name ="DopTaskTwo-name" readonly value ="${ saveDopTaskTwo != ""     
            ? saveDopTaskTwo: "" }" >
            <textarea id ="textareaDopTaskTwo-id_${saveIndex}" class ="textarea-DopTaskTwo input-seze-Two" name ="comment" cols ="40" rows ="3" readonly >${ saveTextareaDopTaskTwo != 
            "" ? saveTextareaDopTaskTwo: "" }</textarea>
        </div>
        <div class="DopTask DopTaskThree indentTask">
            <input id ="DopTaskThree-id_${saveIndex}" class ="input-DopTaskThree input-seze-Two " type ="text" name ="DopTaskThree-name" readonly value ="${ saveDopTaskThree != ""     
            ? saveDopTaskThree: "" }" >
            <textarea id ="textareaDopTaskThree-id_${saveIndex}" class ="textarea-DopTaskThree input-seze-Two" name ="comment" cols ="40" rows ="3" readonly >${ saveTextareaDopTaskThree != 
            ""? saveTextareaDopTaskThree: " "}</textarea>
        </div>
    </div>
    `
    TaskElement.after( saveTaskElement );    
}

const Tasks = JSON.parse(localStorage.getItem("Task"));
const sizeSorege = localStorage.length;

function editingTask(){
    $('.Task').on('click', function(){ 
        let index = $(this).attr('id');
        console.info(`Id этой заметки = ${index}`);
        localStorage.setItem(`IdThisTask`,`${index}`);
        idTransfer_js(index);
        $(this).remove();
        $('.Task').unbind('click');
    });   
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
    NewTaskElement.classList.add ( "indent" ); 
    NewTaskElement.classList.add ( "colorA" );
    NewTaskElement.setAttribute ('id', `${saveIndex}`);
    NewTaskElement.innerHTML = `
        <div class ="itemGroupOne colorB colorC">
            <div class ="ProgressTask indentTask">
                <img class ="Progress-img " src ="Img/zero-G.svg" alt ="">
            </div>
            <div class="TextTask    indentTask">
                <input id ="Task-id" class ="inputTask-Text input-seze-One " type ="text" name ="Task-name" placeholder ="Напишите заметку..." value ="${saveTaskText}" >
            </div>
            <div class="DateTask     indentTask">
                <input id ="DateTask-id" class ="input-seze-One " type="date" value ="${saveTaskDate}" >
            </div>
            <div class ="TimeTask   indentTask">
                <input id ="TimeTask-id" class ="input-seze-One " type ="time" value ="${saveTaskTime}" >
            </div>
            <div id ="AddNewDopTask_id" class ="AddNewDopTask indentTask" onClick ="AddNewDopTaskFunction('itemGroupTwo_id_')" >
                <img class ="addDop-img" src ="Img/AddDop-G.svg" alt ="">
            </div> 
            <div class ="SaveTask indentTask" onClick ="saveTaskFunction ()">
                <img class ="saveTask-img" src ="Img/Save-G.svg" alt ="" >
            </div>
        </div>
        <div id="itemGroupTwo_id_" class="itemGroupTwo " style='display:${(saveDopTaskOne || saveTextareaDopTaskOne || saveDopTaskTwo ||
            saveTextareaDopTaskTwo || saveDopTaskThree || saveTextareaDopTaskThree) != "" ? "flex": "none"}'>
            <div class="DopTask DopTaskOne indentTask">
                <input id ="DopTaskOne-id" class ="input-DopTaskOne input-seze-Two" type ="text" name ="DopTaskOne-name" value ="${saveDopTaskOne}" >
                <textarea id ="textareaDopTaskOne-id" class ="textarea-DopTaskOne input-seze-Two"  name ="comment" cols="40" rows="3" >${ saveTextareaDopTaskOne}</textarea>
            </div>
            <div class="DopTask DopTaskTwo indentTask">
                <input id ="DopTaskTwo-id" class ="input-DopTaskTwo input-seze-Two" type ="text" name ="DopTaskTwo-name" value ="${ saveDopTaskTwo}" >
                <textarea id ="textareaDopTaskTwo-id" class ="textarea-DopTaskTwo input-seze-Two" name ="comment" cols ="40" rows ="3" >${ saveTextareaDopTaskTwo }</textarea>
            </div>
            <div class="DopTask DopTaskThree indentTask">
                <input id ="DopTaskThree-id" class ="input-DopTaskThree input-seze-Two " type ="text" name ="DopTaskThree-name" value ="${ saveDopTaskThree }" >
                <textarea id ="textareaDopTaskThree-id" class ="textarea-DopTaskThree input-seze-Two" name ="comment" cols ="40" rows ="3" >${ saveTextareaDopTaskThree}</textarea>
            </div>
        </div>
    `
    TaskElement.after(NewTaskElement);
}

`
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