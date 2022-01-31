import flask
from flask import request, jsonify
import sqlite3

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
    return "<h1>Distant reading Archive</h1>" \
           "<p>This site is a prototype API for distant reading of science fiction novels</p>"
app.run()
# See PyCharm help at https://www.jetbrains.com/help/pycharm/
