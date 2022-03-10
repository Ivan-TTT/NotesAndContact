import sqlite3

def saveTask_py(index_t, condition_t, queue_t, text_t, date_t, time_t, koment_t, dopKoment_t, reglament_t, dopReglament_t, osobennosti_t, dapOsobennosti_t):
    connect = sqlite3.connect("bd/storage.db")
    cursor = connect.cursor()
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
    connect.commit()
    connect.close()

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


