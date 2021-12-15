from flask import Flask, request, jsonify
from flask.helpers import make_response

from twitter import TwitterTopics

app = Flask(__name__)


@app.route('/fetch/<topic>/<count>')
def fetch(topic, count=20):
    if topic == "parties":
        res = make_response(
            jsonify(TwitterTopics().fetch_parties(n=count)), 200
        )
    if topic == "leaders":
        res = make_response(
            jsonify(TwitterTopics().fetch_leaders(n=count)), 200
        )
    if topic == "controversies":
        res = make_response(
            jsonify(TwitterTopics().fetch_controversies(n=count)), 200
        )
    return res


@app.route('/analyse/<topic>/<count>')
def analyse(topic, count=20):
    if topic == "parties":
        return f"Analysis of parties will appear here."
    if topic == "leaders":
        return f"Analysis of leaders will appear here."
    if topic == "controversies":
        return f"Analysis of controversies will appear here."

    # @app.route('/parties/analyse')
    # def parties():
    #     return f"Not Implemented Yet"

    # @app.route('/leaders/analyse')
    # def leaders():
    #     return f"Not Implemented Yet"

    # @app.route('/controversies/analyse')
    # def controversies():
    #     return f"Not Implemented Yet"


app.run(port=42069, debug=True)
