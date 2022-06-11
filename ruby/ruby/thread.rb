require 'thread'

def countdown(name)
    i = 9
    while i > -1
        puts "#{name}: #{i}" 
        sleep 1
        i = i - 1
    end
end

def countup(name)
    for i in (0..9)
        puts "#{name}: #{i}" 
        sleep 1
    end
end


t1 = Thread.new{countdown('THREAD #01')}
t2 = Thread.new{countup('THREAD #02')}
t1.join
t2.join


