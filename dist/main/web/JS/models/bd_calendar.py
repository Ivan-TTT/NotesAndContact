import sqlite3


arrGetCon = []

def get_calendar_all():
    try:
        connect = sqlite3.connect("bd/storage.db")
        cursor = connect.cursor()
        print("-"*130)
        print("Функция (get_calendar_all)")
        print("Подключен к базе данных [bd_t]")
        global arrGetCon

        cursor.execute("SELECT * FROM tasks WHERE dateT != '' ORDER BY dateT")
        arrGetCon = cursor.fetchall()

        # for item in cursor.fetchall():
        #     arrGetCon.append(item)    
        #     connect.close()

    except sqlite3.Error as error:
        print("Ошибка при работе с базой данных [bd_t] : ОШИБКА ПРИ ПОЛУЧЕНИИ КАЛЕНДАРЯ  : ", error)

    finally:
        if connect:
            connect.close()
            print("Соединение с базой данных [bd_t] закрыто")
            print("-"*130)
            return arrGetCon