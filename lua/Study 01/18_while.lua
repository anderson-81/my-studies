function exemplo01()
    
    ammunition = 10

    function fire()
        if(ammunition > 1) then
            ammunition = ammunition - 1
            print('POW!')
        else
            print('TIC!')
        end
    end

    while io.read() == "f" do
        fire()
    end

end

function exemplo02()
    
    x = 0
    y = 0
    
    while x < 3 do
        while y < 4 do
            print('[' .. x .. ',' .. y .. '] = ' .. (x * y))
            y = y + 1
        end
        y = 0
        x = x + 1
    end

end

-- exemplo01()

exemplo02()