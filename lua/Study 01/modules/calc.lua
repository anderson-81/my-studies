local calc = {
    show = function(name)
        print("Hello, " .. name .. "!")
    end,

    message = 'Hello, World!'
}

function calc.smr(x,y)
    return x + y
end

function calc.sub(x,y)
    return x - y
end

function calc.mlt(x,y)
    return x * y
end

function calc.dvd(x,y)
    return x / y
end

function calc.mod(x,y)
    return x % y
end

return calc