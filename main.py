from __future__ import print_function	
import eel
from models.bd import saveTask_py, update_task, acceptingAnId_py, retuuurnLineId, updateLineTask_py, retuuurnStatusId, f_nNum

eel.init('web')

@eel.expose 
def taskValue(index_t, condition_t, queue_t, text_t, date_t, time_t, koment_t, dopKoment_t, reglament_t, dopReglament_t, osobennosti_t, dapOsobennosti_t):
    msg = saveTask_py(index_t, condition_t, queue_t, text_t, date_t, time_t, koment_t, dopKoment_t, reglament_t, dopReglament_t, osobennosti_t, dapOsobennosti_t)
    up = updateLineTask_py(index_t, condition_t, queue_t, text_t, date_t, time_t, koment_t, dopKoment_t, reglament_t, dopReglament_t, osobennosti_t, dapOsobennosti_t)

# @eel.expose 
# def idTransfer(index):
#     int(index)
#     print("")
#     print( "index строки = ", index, ": передан для проверки в базе данных")
#     msg = acceptingAnId_py(index)

@eel.expose 
def creatingLineId():
    get_line = retuuurnLineId()
    eel.retuuurnLineId_js(get_line)
    print("Строка передалась в JS, для дальнейшего её редактирования")
    print("")
    print("-"*130)

# @eel.expose 
# def idTransfer_status(index):
#     int(index)
#     print("")
#     print( "index строки = ", index, ": передан для проверки в базе данных")
#     msg = acceptingAnId_satus_py(index)

@eel.expose 
def creatingStatusId():
    get_status = retuuurnStatusId()
    eel.retuuurnStatusId_js(get_status)
    print("Строка передалась в JS, для дальнейшего её редактирования")
    print("")
    print("-"*130)

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



eel.start('main.html') 