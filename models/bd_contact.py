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
                C_Id      INTEGER NOT NULL PRIMARY KEY,
                C_name    TEXT NOT NULL,
                C_organiz VARCHAR(50),
                C_address TEXT,
                C_tel     VARCHAR(255),
                C_mail    VARCHAR(255),
                C_ICQ     VARCHAR(255))
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


def updateE_Contact_py(save_C_Id, save_C_name, save_C_organiz, save_C_address, save_C_tel, save_C_mail, save_C_ICQ):
    try:
        connect = sqlite3.connect("bd/storage.db")
        cursor = connect.cursor()
        print("-"*130)
        print("Функция (updateE_Contact_py)")
        print("Подключен к базе данных [bd_c]")
        update_query = ("""
            UPDATE contacts SET C_name = ?,
            C_organiz = ?,
            C_address = ?,
            C_tel     = ?,
            C_mail    = ?,
            C_ICQ     = ? WHERE C_Id = ?
        """)
        column_values = (save_C_name, save_C_organiz, save_C_address, save_C_tel, save_C_mail, save_C_ICQ, save_C_Id)
        cursor.execute(update_query, column_values)
        print("Контакт с id = [", save_C_Id ,"] обнавлен и записан в базу данных [bd_c]")
        connect.commit()
        connect.close()

    except sqlite3.Error as error:
        print("Ошибка при работе с базой данных [bd_c] : ОШИБКА ПРИ ОБНОВЛЕНИИ КОНТАКТА : ", error)
    finally:
        if connect:
            connect.close()
            print("Соединение с базой данных [bd_c] закрыто")
            print("-"*130)


def update_contact():
    try:
        print("-"*130)
        print("Функция (update_Contact)")
        print("Подключен к базе данных [bd_c]")
        connect = sqlite3.connect("bd/storage.db")
        cursor = connect.cursor()
        cursor.execute("SELECT * FROM contacts ORDER BY C_name")
        contact_items = []
        for item in cursor.fetchall():
            contact_items.append(item)
            connect.close()
        return contact_items
    except sqlite3.Error as error:
        print("Ошибка при работе с базой данных [bd_c] : ОШИБКА ПРИ ОБНОВЛЕНИИ КОНТАКТОВ  : ", error)
    finally:
        if connect:
            connect.close()
            print("Соединение с базой данных [bd_c] закрыто")
            print("-"*130)

sorted_items=[]
arr_S7M = [0,0,0,0,0,0,0]
def accepting_nNum_S7M_py(nNum):
    try:
        print("-"*130)
        print("Функция (accepting_nNum_S7M_py)")
        print("Подключен к базе данных [bd_c]") 
        connect = sqlite3.connect("bd/storage.db")
        cursor = connect.cursor()
        global sorted_items
        global arr_S7M

        sorted_items = []

        if (nNum == '0'):
            if (arr_S7M[0] == 0):
                cursor.execute("SELECT * FROM contacts ORDER BY C_name ")
                arr_S7M[0] = 1
            else:
                cursor.execute("SELECT * FROM contacts ORDER BY C_name DESC")
                arr_S7M[0] = 0

        elif (nNum == '1'):
            if (arr_S7M[1] == 0):
                cursor.execute("SELECT * FROM contacts ORDER BY C_organiz ")
                arr_S7M[1] = 1
            else:
                cursor.execute("SELECT * FROM contacts ORDER BY C_organiz DESC")
                arr_S7M[1] = 0

        elif (nNum == '2'):
            if (arr_S7M[2] == 0):
                cursor.execute("SELECT * FROM contacts ORDER BY C_address ")
                arr_S7M[2] = 1
            else:
                cursor.execute("SELECT * FROM contacts ORDER BY C_address DESC")
                arr_S7M[2] = 0

        elif (nNum == '3'):
            if (arr_S7M[3] == 0):
                cursor.execute("SELECT * FROM contacts ORDER BY C_tel ")
                arr_S7M[3] = 1
            else:
                cursor.execute("SELECT * FROM contacts ORDER BY C_tel DESC")
                arr_S7M[3] = 0

        elif (nNum == '4'):
            if (arr_S7M[4] == 0):
                cursor.execute("SELECT * FROM contacts ORDER BY C_tel ")
                arr_S7M[4] = 1
            else:
                cursor.execute("SELECT * FROM contacts ORDER BY C_tel DESC")
                arr_S7M[4] = 0

        elif (nNum == '5'):
            if (arr_S7M[5] == 0):
                cursor.execute("SELECT * FROM contacts ORDER BY C_tel ")
                arr_S7M[5] = 1
            else:
                cursor.execute("SELECT * FROM contacts ORDER BY C_tel DESC")
                arr_S7M[5] = 0
        elif (nNum == '6'):
           if (arr_S7M[6] == 0):
               cursor.execute("SELECT C_Id, C_name, C_organiz, C_mail FROM contacts ORDER BY C_name DESC")
               arr_S7M[6] = 1
           else:
               cursor.execute("SELECT C_Id, C_name, C_organiz, C_mail FROM contacts ORDER BY C_name DESC")
               arr_S7M[6] = 0


        for item in cursor.fetchall():
            sorted_items.append(item)    
            connect.close()

        print(arr_S7M)
        print(sorted_items)
        return sorted_items
    except sqlite3.Error as error:
        print("Ошибка при работе с базой данных [bd_c] : ОШИБКА ПРИ СОРТИРОВКЕ КОНТАКТОВ  : ", error)
    finally:
        if connect:
            connect.close()
            print("Соединение с базой данных [bd_c] закрыто")
            print("-"*130) 

def retuuurn_sorted_items():
    return sorted_items


editing_items = []
C_IdnNum = ""
def accepting_id_ED_py(index, nNum):
    print(index, nNum)
    try:
        print("-"*130)
        print("Функция (accepting_id_ED_py)")
        print("Подключен к базе данных [bd_c]") 
        connect = sqlite3.connect("bd/storage.db")
        cursor = connect.cursor()
        global editing_items
        global C_IdnNum
        editing_items = []

        if (nNum == '0'):
            cursor.execute("SELECT * FROM contacts WHERE C_Id=?",(index,))
            editing_items = cursor.fetchall()
            retuuurn_editing_items()
        else: 
            cursor.execute("DELETE FROM contacts WHERE C_Id=?",(index,))
            connect.commit()
        
        C_IdnNum = nNum
    except sqlite3.Error as error:
        print("Ошибка при работе с базой данных [bd_c] : ОШИБКА ПРИ РЕДАКТРОВАНИя ИЛИ УДАЛЕНИя КОНТАКТА  : ", error)
    finally:
        if connect:
            connect.close()
            print("Соединение с базой данных [bd_c] закрыто")
            print("-"*130) 

def retuuurn_editing_items():
    return editing_items

def fU_nNum():
    return C_IdnNum