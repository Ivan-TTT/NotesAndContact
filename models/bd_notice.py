import sqlite3

arrNotice = []

def get_notice_all():
    try:
        connect = sqlite3.connect("bd/storage.db")
        cursor = connect.cursor()
        print("-"*130)
        print("Функция (get_notice_all)")
        print("Подключен к базе данных [bd_t]")
        global arrNotice

        cursor.execute("SELECT * FROM tasks WHERE dateT != '' OR timeT != '' ORDER BY dateT")
        arrNotice = cursor.fetchall()

    except sqlite3.Error as error:
        print("Ошибка при работе с базой данных [bd_t] : ОШИБКА ПРИ ПОЛУЧЕНИИ КАЛЕНДАРЯ  : ", error)

    finally:
        if connect:
            connect.close()
            print("Соединение с базой данных [bd_t] закрыто")
            print("-"*130)
            return arrNotice