import sqlite3

def saveContact_py(save_C_Id, save_C_name, save_C_organiz, save_C_address, save_C_tel, save_C_mail, save_C_ICQ):
    try:
        connect = sqlite3.connect("bd/storage.db")
        cursor = connect.cursor()
        print("-"*130)
        print("Функция (saveContact_py)")
        print("Подключен к базе данных [bd_c]")

        cursor.execute("""
            CREATE TABLE IF NOT EXISTS contacts(
                C_Id INTEGER NOT NULL PRIMARY KEY,
                C_name TEXT NOT NULL,
                C_organiz VARCHAR(50),
                C_address TEXT,
                C_tel VARCHAR(255),
                C_mail VARCHAR(255),
                C_ICQ VARCHAR(255))
            """)
        cursor.execute(" INSERT INTO contacts(C_Id, C_name, C_organiz, C_address, C_tel, C_mail, C_ICQ) VALUES (?,?,?,?,?,?,?) ",\
            (save_C_Id, save_C_name, save_C_organiz, save_C_address, save_C_tel, save_C_mail, save_C_ICQ))

        print("Задача созданна и записана в базу данных [bd_c]")
        connect.commit()
        connect.close()

    except sqlite3.Error as error:
        print("Ошибка при работе с базой данных [bd_c] : ОШИБКА ПРИ ДОБОВЛЕНИИ НОВОГО КОНТАКТА  : ", error)

    finally:
        if connect:
            connect.close()
            print("Соединение с базой данных [bd_c] закрыто")
            print("-"*130)