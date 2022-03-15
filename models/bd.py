import sqlite3

def saveTask_py(index_t, condition_t, queue_t, text_t, date_t, time_t, koment_t, dopKoment_t, reglament_t, dopReglament_t, osobennosti_t, dapOsobennosti_t):
    try:
        connect = sqlite3.connect("bd/storage.db")
        cursor = connect.cursor()
        print("-"*130)
        print("Функция (saveTask_py)")
        print("Подключен к базе данных [bd]")

        cursor.execute("""
            CREATE TABLE IF NOT EXISTS tasks(
                indexT INTEGER NOT NULL PRIMARY KEY,
                cinditionT CHAR NOT NULL,
                queue_t INTEGER NOT NULL,
                textT TEXT,
                dateT DATE,
                timeT TIME,
                komentT TEXT,
                dopKomentT TEXT,
                reglamentT TEXT,
                dopReglamentT TEXT,
                osobennostiT TEXT,
                dopOsobennostiT TEXT)
            """)

        cursor.execute(" INSERT INTO tasks(indexT, cinditionT, queue_t, textT, dateT, timeT, komentT, dopKomentT, reglamentT, dopReglamentT, osobennostiT, dopOsobennostiT) VALUES (?,?,?,?,?,?,?,?,?,?,?,?) ",\
            (index_t, condition_t, queue_t, text_t, date_t, time_t, koment_t, dopKoment_t, reglament_t, dopReglament_t, osobennosti_t, dapOsobennosti_t))
        print("Задача созданна и записана в базу данных [bd]")
        connect.commit()
        connect.close()

    except sqlite3.Error as error:
        print("Ошибка при работе с базой данных [bd] : ОШИБКА ПРИ ДОБОВЛЕНИИ НОВОЙ ЗАДАЧИ  : ", error)

    finally:
        if connect:
            connect.close()
            print("Соединение с базой данных [bd] закрыто")
            print("-"*130)



def updateLineTask_py(index_t, condition_t, queue_t, text_t, date_t, time_t, koment_t, dopKoment_t, reglament_t, dopReglament_t, osobennosti_t, dapOsobennosti_t):
    try:
        connect = sqlite3.connect("bd/storage.db")
        cursor = connect.cursor()
        print("-"*130)
        print("Функция (updateLineTask_py)")
        print("Подключен к базе данных [bd]")
        update_query = ("""
            UPDATE tasks SET cinditionT = ?,
            queue_t = ?,
            textT = ?,
            dateT = ?, 
            timeT = ?, 
            komentT = ?, 
            dopKomentT = ?, 
            reglamentT = ?, 
            dopReglamentT = ?, 
            osobennostiT = ?, 
            dopOsobennostiT = ? WHERE indexT = ?
        """)
        column_values = (condition_t, queue_t, text_t, date_t, time_t, koment_t, dopKoment_t, reglament_t, dopReglament_t, osobennosti_t, dapOsobennosti_t, index_t)
        cursor.execute(update_query, column_values)
        print("Задача с indexT = [", index_t ,"] обнавлена и записана в базу данных [bd]")
        connect.commit()
        connect.close()

    except sqlite3.Error as error:
        print("Ошибка при работе с базой данных [bd] : ОШИБКА ПРИ ОБНОВЛЕНИИ ЗАДАЧИ : ", error)
    finally:
        if connect:
            connect.close()
            print("Соединение с базой данных [bd] закрыто")
            print("-"*130)
    

def update_task():
    try:
        connect = sqlite3.connect("bd/storage.db")
        cursor = connect.cursor()
        cursor.execute("SELECT * FROM tasks")
        tasks_items = []
        for item in cursor.fetchall():
            tasks_items.append(item)
            connect.close()
        return tasks_items
    except Exception as error:
        tasks_items = "erro"
        print(error)
        return tasks_items

indexLine = []

def acceptingAnId_py(index):
    try:
        connect = sqlite3.connect("bd/storage.db")
        cursor = connect.cursor()
        cursor.execute("SELECT * FROM tasks WHERE indexT=?",(index,))
        global indexLine 
        indexLine = cursor.fetchall()
        print("Строка с index = ", index ," : ", indexLine)
        retuuurnLineId()
        return indexLine 
    except Exception as error:
        indexLine = "erro"
        print(error)
        return indexLine

# def lineDelete(index):
#     connect = sqlite3.connect("bd/storage.db")
#     cursor = connect.cursor()
#     cursor.execute("DELETE FROM tasks WHERE indexT=?",(index,))
#     connect.close()

# Возвращение данных о строке в JS, для ее создания, с возможностью редактирования
def retuuurnLineId():
    # index = indexLine[0][0]
    # index.isdigit()
    # print(index)
    # lineDelete(index)
    return indexLine
 


