import time
import threading


def CountDown(*args):
    i = 10
    for i in range (10, 0, -1):
        print("THREAD #01: %d" %(i))
        time.sleep(1)
    print("\n\nTHREAD #01 completo!!!")

def CountUp(*args):
    i = 0
    for i in range (0, 10, 1):
        print("\n\nTHREAD #02: %d" %(i))
        time.sleep(1)
    print("THREAD #02 completo!!!")
   
t1 = threading.Thread(target=CountDown())
t2 = threading.Thread(target=CountUp())   
# CountDown()
# CountUp() 
t1.start()
t2.start()