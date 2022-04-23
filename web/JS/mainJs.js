
$('#li_taskk').click(function () {
  $('#windowTask_id').slideDown('.aAcTivve');

  $('#windowContacts_id').slideUp('.aAcTivve');
  $('#windowСalendar_id').slideUp('.aAcTivve');
  $('#windowNotice_id').slideUp('.aAcTivve');
  $('#windowSettings_id').slideUp('.aAcTivve');
});


$('#li_contactt').click(function () {
  $('#windowContacts_id').slideDown('.aAcTivve');

  $('#windowTask_id').slideUp('.aAcTivve');
  $('#windowСalendar_id').slideUp('.aAcTivve');
  $('#windowNotice_id').slideUp('.aAcTivve');
  $('#windowSettings_id').slideUp('.aAcTivve');
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
});

$('#li_settings').click(function () {
  $('#windowSettings_id').slideDown('.aAcTivve');

  $('#windowTask_id').slideUp('.aAcTivve');
  $('#windowContacts_id').slideUp('.aAcTivve');
  $('#windowСalendar_id').slideUp('.aAcTivve');
  $('#windowNotice_id').slideUp('.aAcTivve');
});


