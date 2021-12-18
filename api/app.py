from flask import Flask, request, jsonify
from flask.helpers import make_response
from flask.json import JSONEncoder
from model import AnalysisModel

from flask_cors import CORS

from twitter import TwitterTopics

app = Flask(__name__)
CORS(app)


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
    model = AnalysisModel()
    model.train()
    model.train()
    if topic == "parties":
        model.analyse(topic, count)
        return JSONEncoder().encode(model.predictions)
    if topic == "leaders":
        model.analyse(topic, count)
        return JSONEncoder().encode(model.predictions)
    if topic == "controversies":
        model.analyse(topic, count)
        return JSONEncoder().encode(model.predictions)

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
