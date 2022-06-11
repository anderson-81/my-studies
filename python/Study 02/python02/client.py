import socket

try:
    clientSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    host = "localhost"
    port = 9999

    clientSocket.connect((host, port))

    msg = clientSocket.recv(1024)

    print(msg.decode("ascii"))

    clientSocket.close()
except ConnectionRefusedError as ex:
    print(ex.args)
