from flask import Flask
from flask_socketio import SocketIO, send

app = Flask('bink')
app.config['SECRET_KEY'] = 'a pithy aphorism'
socketio = SocketIO(app, cors_allowed_origins='*')


@socketio.on("message")
def handle_message(msg):
    print('Message:', msg)
    send(msg, broadcast=True)


if __name__ == '__main__':
    socketio.run(app)
