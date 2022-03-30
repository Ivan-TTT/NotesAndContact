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
        cursor.execute("SELECT * FROM tasks ORDER BY queue_t DESC")
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
indexStatus = ""
indexnNum = ""

def acceptingAnId_py(index, nNum):
    try:
        connect = sqlite3.connect("bd/storage.db")
        cursor = connect.cursor()
        global indexnNum
        global indexStatus
        global indexLine 
        print(nNum, "nen")
        
        if (nNum == '1'):
            print(nNum, "nen2")
            cursor.execute("SELECT cinditionT FROM tasks WHERE indexT=?",(index,))
            indexStatus = cursor.fetchall()
            print("Статус с index = ", index ," : ", indexStatus)

            if (indexStatus[0][0] == 'start'):
                print(indexStatus[0][0])
                cursor.execute("UPDATE tasks SET cinditionT = ? WHERE indexT=?",("middle" , index,))
            elif (indexStatus[0][0] == 'middle'):
                print(indexStatus[0][0])
                cursor.execute("UPDATE tasks SET cinditionT = ? WHERE indexT=?",("finish" , index,))
            else:
                print(indexStatus[0][0])
                cursor.execute("UPDATE tasks SET cinditionT = ? WHERE indexT=?",("start" , index,))

            connect.commit()
            connect.close()
            retuuurnStatusId()

        elif (nNum == '2'):
            cursor.execute("SELECT * FROM tasks WHERE indexT=?",(index,))
            indexLine = cursor.fetchall()
            print("Строка с index = ", index ," : ", indexLine)
            retuuurnLineId()
            connect.close()
        else: 
            cursor.execute("DELETE FROM tasks WHERE indexT=?",(index,))
            connect.commit()
            connect.close()

        indexnNum = nNum
        f_nNum()
        return indexLine, indexStatus
    except Exception as error:
        indexLine = "erro"
        indexStatus = "erro"
        print(error)
        return indexLine, indexStatus

def f_nNum():
    return indexnNum

def retuuurnLineId():
    return indexLine

def retuuurnStatusId():
    return indexStatus

# def acceptingAnId_satus_py(index):
#     try:
#         connect = sqlite3.connect("bd/storage.db")
#         cursor = connect.cursor()
#         cursor.execute("SELECT cinditionT FROM tasks WHERE indexT=?",(index,))
#         global indexStatus 
#         indexStatus = cursor.fetchall()
#         print("Статус с index = ", index ," : ", indexStatus)

#         update_status = "UPDATE tasks SET cinditionT = ? WHERE indexT=?"

#         if (indexStatus[0][0] == 'start'):
#             print(indexStatus[0][0])
#             cursor.execute("UPDATE tasks SET cinditionT = ? WHERE indexT=?",("middle" , index,))
#         elif (indexStatus[0][0] == 'middle'):
#             print(indexStatus[0][0])
#             cursor.execute("UPDATE tasks SET cinditionT = ? WHERE indexT=?",("finish" , index,))
#         else:
#             print(indexStatus[0][0])
#             cursor.execute("UPDATE tasks SET cinditionT = ? WHERE indexT=?",("start" , index,))
            
#         connect.commit()
#         connect.close()
#         retuuurnLineId()
#         return indexStatus
#     except Exception as error:
#         indexStatus = "erro"
#         print(error)
#         return indexStatus

# def lineDelete(index):
#     connect = sqlite3.connect("bd/storage.db")
#     cursor = connect.cursor()
#     cursor.execute("DELETE FROM tasks WHERE indexT=?",(index,))
#     connect.close()

# Возвращение данных о строке в JS, для ее создания, с возможностью редактирования

 


