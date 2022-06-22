
$(document).ready(function() {
  hello();
  prim_them();
  document.location.href.split('/').pop();
});

$('#li_taskk').click(function () {
  $('#windowTask_id').slideDown('.aAcTivve');

  $('#windowContacts_id').slideUp('.aAcTivve');
  $('#windowСalendar_id').slideUp('.aAcTivve');
  $('#windowNotice_id').slideUp('.aAcTivve');
  $('#windowSettings_id').slideUp('.aAcTivve');

  eel.update_all_task();
});


$('#li_contactt').click(function () {
  $('#windowContacts_id').slideDown('.aAcTivve');

  $('#windowTask_id').slideUp('.aAcTivve');
  $('#windowСalendar_id').slideUp('.aAcTivve');
  $('#windowNotice_id').slideUp('.aAcTivve');
  $('#windowSettings_id').slideUp('.aAcTivve');

  eel.update_all_contact();
});

$('#li_calendarr').click(function () {
  $('#windowСalendar_id').slideDown('.aAcTivve');

  $('#windowTask_id').slideUp('.aAcTivve');
  $('#windowContacts_id').slideUp('.aAcTivve');
  $('#windowNotice_id').slideUp('.aAcTivve');
  $('#windowSettings_id').slideUp('.aAcTivve');
});

$('#li_notice').click(function () {
  $('#windowNotice_id').slideDown('.aAcTivve');

  $('#windowTask_id').slideUp('.aAcTivve');
  $('#windowContacts_id').slideUp('.aAcTivve');
  $('#windowСalendar_id').slideUp('.aAcTivve');
  $('#windowSettings_id').slideUp('.aAcTivve');

  eel.all_notice();
});

$('#li_settings').click(function () {
  $('#windowSettings_id').slideDown('.aAcTivve');

  $('#windowTask_id').slideUp('.aAcTivve');
  $('#windowContacts_id').slideUp('.aAcTivve');
  $('#windowСalendar_id').slideUp('.aAcTivve');
  $('#windowNotice_id').slideUp('.aAcTivve');
});

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

function hello(){
  var now = new Date(),
      hour = now.getHours(),
      minute = now.getMinutes(),
      second = now.getSeconds(),
      message = '';

  // определим фразу приветствия в зависимости от местного времени пользователя
  if (hour <= 6) {
      sendNotification('Доброе время суток', {
        body: '☕',
        dir:  'auto'
      });
  } else if (hour <= 12) {
      sendNotification('Доброе утро', {
        body: '🌅',
        icon: '🌅',
        dir:  'auto'
      });
  } else if (hour <= 18) {
      sendNotification('Добрый день', {
          body: '🍀',
          icon: '🍀',
          dir:  'auto'
      });
  } else {
      sendNotification('Добрый вечер', {
          body: '🌇',
          icon: '🌇',
          dir:  'auto'
      });
  }
}

$('.appSettings').click(function () {
  $('.opril_Set').slideDown('.acti');
  $('.appSettings').addClass('cvet');

  $( '.howSettings' ).removeClass('cvet')
  $( '.contactsSettings' ).removeClass('cvet')
  $( '.colorSettings' ).removeClass('cvet')

  $('.kak_Set').slideUp('.acti');
  $('.top_con').slideUp('.acti');
  $('.color_Set').slideUp('.acti');
});

$('.howSettings').click(function () {
  $('.kak_Set').slideDown('.acti');
  $('.howSettings').addClass('cvet');

  $( '.appSettings' ).removeClass('cvet')
  $( '.contactsSettings' ).removeClass('cvet')
  $( '.colorSettings' ).removeClass('cvet')

  $('.opril_Set').slideUp('.acti');
  $('.top_con').slideUp('.acti');
  $('.color_Set').slideUp('.acti');
});

$('.contactsSettings').click(function () {
  $('.top_con').slideDown('.acti');
  $('.contactsSettings').addClass('cvet');

  $( '.appSettings' ).removeClass('cvet')
  $( '.howSettings' ).removeClass('cvet')
  $( '.colorSettings' ).removeClass('cvet')

  $('.opril_Set').slideUp('.acti');
  $('.kak_Set').slideUp('.acti');
  $('.color_Set').slideUp('.acti');
});

$('.colorSettings').click(function () {
  $('.color_Set').slideDown('.acti');
  $('.colorSettings').addClass('cvet');

  $( '.appSettings' ).removeClass('cvet')
  $( '.contactsSettings' ).removeClass('cvet')
  $( '.howSettings' ).removeClass('cvet')

  $('.opril_Set').slideUp('.acti');
  $('.kak_Set').slideUp('.acti');
  $('.top_con').slideUp('.acti');
});

function thems_col(numb){
  if (numb == ('1')){
    localStorage.setItem('Thems','1');
  } else if( numb == ('2')){
    localStorage.setItem('Thems','2');
  } else if( numb == ('3')){
    localStorage.setItem('Thems','3');
  } else if( numb == ('4')){
    localStorage.setItem('Thems','4');
  }
  prim_them();
}

function prim_them(){
  if (localStorage.getItem('Thems') == ('1')){
    console.log('первый')
    document.documentElement.style.setProperty('--body-color',       '#703817');
    document.documentElement.style.setProperty('--sidePanel-color',  '#BD5D2A');
    document.documentElement.style.setProperty('--dopT-color',       '#BD613A');
    document.documentElement.style.setProperty('--task-color',       '#9E5629');
    document.documentElement.style.setProperty('--text-color',       '#000');
    document.documentElement.style.setProperty('--tabs-color',       '#DB8A52');
    document.documentElement.style.setProperty('--num-color',        '#70381788');

  } else if( localStorage.getItem('Thems') == ('2')){
    console.log('первый 2 ')
    document.documentElement.style.setProperty('--body-color',       '#288526');
    document.documentElement.style.setProperty('--sidePanel-color',  '#5FBD52');
    document.documentElement.style.setProperty('--dopT-color',       '#60BD58');
    document.documentElement.style.setProperty('--task-color',       '#4EA330');
    document.documentElement.style.setProperty('--text-color',       '#000');
    document.documentElement.style.setProperty('--tabs-color',       '#8DDB52');
    document.documentElement.style.setProperty('--num-color',        '#28852688');

  } else if( localStorage.getItem('Thems') == ('3')){
    console.log('первый 3 ')
    document.documentElement.style.setProperty('--body-color',       '#1C2480');
    document.documentElement.style.setProperty('--sidePanel-color',  '#2C3DBD');
    document.documentElement.style.setProperty('--dopT-color',       '#4652BD');
    document.documentElement.style.setProperty('--task-color',       '#2D34A3');
    document.documentElement.style.setProperty('--text-color',       '#000');
    document.documentElement.style.setProperty('--tabs-color',       '#4F60DB');
    document.documentElement.style.setProperty('--num-color',        '#1C248088');

  } else if( localStorage.getItem('Thems') == ('4')){
    console.log('первый 4');
    document.documentElement.style.setProperty('--body-color',       '#747474');
    document.documentElement.style.setProperty('--sidePanel-color',  '#C4C4C4');
    document.documentElement.style.setProperty('--dopT-color',       '#C0C0C0');
    document.documentElement.style.setProperty('--task-color',       '#9C9797');
    document.documentElement.style.setProperty('--text-color',       '#000');
    document.documentElement.style.setProperty('--tabs-color',       '#E4E4E4');
    document.documentElement.style.setProperty('--num-color',        '#74747488');

  }
}