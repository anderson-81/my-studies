-- Comentário sobre a biblioteca padrão do Lua.
-- Obs: Estudar em separado.

-- Alguns exemplos:

print(math.floor(6,3,8,1,9))

print(string.gsub("Hello, World!", "Hello", "Olá"))

print(math.sqrt(49))

-- Lendo as linhas de um arquivo.
for line in io.lines("linhas.txt") do
    print(line)
end

