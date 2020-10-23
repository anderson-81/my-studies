ammunition = 10

function fire()
    key = io.read()
    if (key == 'f') and (checkAmmunition()) then
        print('Pow!')
        ammunition = ammunition - 1
    else
        print('Without ammunition.')
    end
    return key
end

function checkAmmunition()
    return ammunition > 1
end

---

key = fire() 
while (key == 'f') do
    key = fire()  
end

print('Finish!')