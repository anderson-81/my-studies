function exemplo01()
    local calc = require("modules/calc")
    calc.show("Anderson")
    print(calc.mlt(7,8))
end

local ffile = require("modules/ffile")

function exemplo02()
    print(ffile.ler("hello.txt"))
end

-- exemplo01()
-- exemplo02()