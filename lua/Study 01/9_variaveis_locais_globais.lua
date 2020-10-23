num = 30

function show(num)
    print("Local: " .. tostring(num))
    print("Global: " .. tostring(_G.num))
end

show(13)


