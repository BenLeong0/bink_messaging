from flask import Flask

app = Flask('bink')


@app.route("/")
def homepage():
    print('yo')
    return 'yo'
