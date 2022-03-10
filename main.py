from __future__ import print_function	
import eel
from models.bd import saveTask_py, update_task

eel.init('web')

@eel.expose 
def taskValue(index_t, condition_t, queue_t, text_t, date_t, time_t, koment_t, dopKoment_t, reglament_t, dopReglament_t, osobennosti_t, dapOsobennosti_t):
    msg = saveTask_py(index_t, condition_t, queue_t, text_t, date_t, time_t, koment_t, dopKoment_t, reglament_t, dopReglament_t, osobennosti_t, dapOsobennosti_t)


@eel.expose 
def update_all_task():
    get_tasks = update_task()
    eel.get_update_task_js(get_tasks)
    print(get_tasks)



eel.start('main.html') 