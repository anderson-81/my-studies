import date
import time
import calendar
import datetime

def Time01():
    t = time.time()
    print(t)
    print(time.localtime(t))
    print(time.struct_time.tm_year)
    print(time.asctime(time.localtime(time.time())))
    print(time.altzone)

def Calendar01():
    c = calendar.month(1981,11)
    print(c)

def Imprimirdata():
    print(datetime.date(1981,11,12))

Time01()
Calendar01()
Imprimirdata()
