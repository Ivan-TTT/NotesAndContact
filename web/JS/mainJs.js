// $( ".AddNewDopTask" ).click(function(){ 
//     $( "img" ).slideDown( 500, "linear", function(){
//       console.log("slideToggle completed");
//     });
// });

// $('#li_taskk').slideDown(100, function(){

//   $('#li_contactt').slideUp(500);
//   $('#li_calendarr').slideUp(500);
//   $('#li_massedj').slideUp(500);
//   $('#li_optionn').slideUp(500);
  
// });

$('#li_taskk').click(function () {
  $('#windowTask_id').slideDown('.aAcTivve');
  $('#windowContacts_id').slideUp('.aAcTivve');
  $('#windowСalendar_id').slideUp('.aAcTivve');
  // $('#block').slideUp(aAcTivve);
  // $('#block').slideUp(aAcTivve);
});
// $('.slideUp').click(function () {
//   $('#block').slideUp(parameters);
// });

$('#li_contactt').click(function () {
  $('#windowContacts_id').slideDown('.aAcTivve');
  $('#windowTask_id').slideUp('.aAcTivve');
  $('#windowСalendar_id').slideUp('.aAcTivve');
  // $('#block').slideUp(aAcTivve);
  // $('#block').slideUp(aAcTivve);
});

$('#li_calendarr').click(function () {
  $('#windowСalendar_id').slideDown('.aAcTivve');
  $('#windowTask_id').slideUp('.aAcTivve');
  $('#windowContacts_id').slideUp('.aAcTivve');
  // $('#block').slideUp(aAcTivve);
  // $('#block').slideUp(aAcTivve);
});


// function home_reset(){
//   eel.update_all_contact();
//   localStorage.setItem('contact_Editing','no');
//   localStorage.setItem('contact_Created','no');


//   // eel.update_all_task();
//   // localStorage.setItem(`IdTrisTask`,``);
//   // localStorage.setItem('Editing','');
//   // localStorage.setItem('OneCreated','no');
//   // localStorage.setItem('VisibleNumber','yes');
//   // localStorage.setItem('ActiveOrPasiveTask','active');
// }