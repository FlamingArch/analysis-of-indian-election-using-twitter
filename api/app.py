from logging import DEBUG
from re import A
from flask import Flask, request
from json import JSONEncoder

from twitter_topics import TwitterTopics

app = Flask(__name__)


@app.route('/parties')
def parties():
    return f"{JSONEncoder().encode(TwitterTopics().fetch_parties())}"


@app.route('/leaders')
def leaders():
    return f"{JSONEncoder().encode(TwitterTopics().fetch_leaders())}"


@app.route('/controversies')
def controversies():
    return f"{JSONEncoder().encode(TwitterTopics().fetch_controversies())}"


app.run()
