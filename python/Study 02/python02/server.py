import socket

serverSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

host = socket.gethostname()
port = 9990

serverSocket.bind((host, port))

serverSocket.listen(5)

while True:
    clientSocket, addr = serverSocket.accept()
    message = "Hello, World!"
    clientSocket.send(message.encode("ascii"))
    clientSocket.close()
