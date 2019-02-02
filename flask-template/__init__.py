from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/text-upload', methods=["POST"])
def upload_text():
    message = request.json.get("msg", "")
    return jsonify(dict(message=message.upper()))