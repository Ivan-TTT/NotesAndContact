from __future__ import print_function	
import eel
from models.bd_task     import saveTask_py, update_task, acceptingAnId_py, retuuurnLineId, updateLineTask_py, retuuurnStatusId, f_nNum
from models.bd_contact  import saveContact_py, update_contact, accepting_nNum_S7M_py, accepting_id_ED_py, retuuurn_sorted_items, retuuurn_editing_items, fU_nNum, updateE_Contact_py
from models.bd_calendar import get_calendar_all
from models.bd_notice   import get_notice_all
eel.init('web')

#- Раздел "Заметки" -  "Notes" ---------------------------------------------------------------------------------------------------------------------------------------------------------

@eel.expose 
def taskValue(index_t, condition_t, queue_t, text_t, date_t, time_t, koment_t, dopKoment_t, reglament_t, dopReglament_t, osobennosti_t, dapOsobennosti_t):
    msg = saveTask_py(index_t, condition_t, queue_t, text_t, date_t, time_t, koment_t, dopKoment_t, reglament_t, dopReglament_t, osobennosti_t, dapOsobennosti_t)
    up  = updateLineTask_py(index_t, condition_t, queue_t, text_t, date_t, time_t, koment_t, dopKoment_t, reglament_t, dopReglament_t, osobennosti_t, dapOsobennosti_t)

@eel.expose 
def idTransfer_SED(index,nNum):
    int(index)
    int(nNum)
    print("")
    print( "id строки = ", index, "| номер строки = ", nNum, " | переданы для проверки в базе данных" )
    msg = acceptingAnId_py(index,nNum)

@eel.expose 
def creating_SL_Id():
    nNum = f_nNum()
    if (nNum == '1'):
        get_status = retuuurnStatusId()
        eel.retuuurnStatusId_js(get_status)
    elif (nNum == '2'):
        get_line = retuuurnLineId()
        eel.retuuurnLineId_js(get_line)


@eel.expose 
def update_all_task():
    get_tasks = update_task()
    eel.get_update_task_js(get_tasks)
    print("-"*130)
    print( "Заметки в базе данных")
    print("-"*130)
    for i in get_tasks:
        print(i)
    print("-"*130)

#- Раздел "Контакты" - "Contacts" ---------------------------------------------------------------------------------------------------------------------------------------------------------

@eel.expose 
def contactValue(save_C_Id, save_C_name, save_C_organiz, save_C_address, save_C_contFace, save_C_tel, save_C_mail, save_C_ICQ):
    msg = saveContact_py(save_C_Id, save_C_name, save_C_organiz, save_C_address, save_C_contFace, save_C_tel, save_C_mail, save_C_ICQ)
    up  = updateE_Contact_py(save_C_Id, save_C_name, save_C_organiz, save_C_address, save_C_contFace, save_C_tel, save_C_mail, save_C_ICQ)

@eel.expose 
def update_all_contact():
    get_contacts = update_contact()
    eel.get_update_contact_js(get_contacts)
    print("-"*130)
    print( "Контакты в базе данных")
    print("-"*130)
    for i in get_contacts:
        print(i)
    print("-"*130)

@eel.expose 
def nNumTransfer_S7M(nNum):
    int(nNum)
    print("")
    print( " номер сортировки = ", nNum, " | передан для сортировки в базы данных" )
    msg = accepting_nNum_S7M_py(nNum)

@eel.expose 
def update_S7M():
    get_contacts = retuuurn_sorted_items()
    eel.get_update_contact_js(get_contacts)

@eel.expose 
def mail_S7M():
    mail_contacts = retuuurn_sorted_items()
    eel.mail_S7M_js(mail_contacts)

@eel.expose 
def idTransfer_ED(index, nNum):
    int(index)
    int(nNum)
    print("")
    print( "id контакта = ", index, "| номер= ", nNum, " | переданы для проверки в базе данных" )
    msg = accepting_id_ED_py(index, nNum)

@eel.expose 
def creating_ED_Id():
    nNum = fU_nNum()
    if (nNum == '0'):
        get_editing = retuuurn_editing_items()
        eel.retuuurn_contact_js(get_editing)
    elif (nNum == '1'):
        get_delete = fU_nNum()
        eel.retuuurn_contact_js(get_delete)

#- Раздел "Календарь" - "Calendar" ---------------------------------------------------------------------------------------------------------------------------------------------------------

@eel.expose 
def all_calendar():
    get_calendar = get_calendar_all()
    eel.get_calendar_js(get_calendar)
    print("-"*130)
    print( "События в календаре")
    print("-"*130)
    for i in get_calendar:
        print(i)
    print("-"*130)

#- Раздел "Уведомления" - "Notifications" ---------------------------------------------------------------------------------------------------------------------------------------------------------

@eel.expose 
def all_notice():
    get_notice = get_notice_all()
    eel.get_notice_js(get_notice)
    print("-"*130)
    print( "Уведомления")
    print("-"*130)
    for i in get_notice:
        print(i)
    print("-"*130)


eel.start('main.html', port=2525, size=(1024, 600)) 