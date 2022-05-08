
$(document).ready(function() {
  hello();
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

// sendNotification('Верните Линуса!', {
//     body: 'Тестирование HTML5 Notifications',
//     icon: 'Img/AddDop-G.svg',
//     dir:  'auto'
// });

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



