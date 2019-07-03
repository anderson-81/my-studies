import time
import _thread

def Sleeping():
    print("Aguardando...")
    sleep(3)
    print("Passaram-se 3 segundos.")

def funcao(thread_name, thread_delay):
    count = 0
    while count < 10:
        time.sleep(thread_delay)
        count += 1
    print("\nThread: %s -- Terminada: %s" % (thread_name, time.ctime(time.time()))) 

def IniciarThread():
    _thread.start_new_thread(funcao, ("Thread-01", 3,))
    _thread.start_new_thread(funcao, ("Thread-02", 1,))
    _thread.start_new_thread(funcao, ("Thread-03", 5,))
    _thread.start_new_thread(funcao, ("Thread-04", 2,))
    _thread.start_new_thread(funcao, ("Thread-05", 0,))
    _thread.start_new_thread(funcao, ("Thread-06", 4,))

#Sleeping()
IniciarThread()




