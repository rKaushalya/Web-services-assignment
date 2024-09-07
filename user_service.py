from flask import Flask, request, jsonify
import uuid
import datetime

app = Flask(__name__)

# In-memory user and session storage for simplicity
users = {}
sessions = {}

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if username in users:
        return jsonify({'message': 'User already exists'}), 400
    users[username] = password
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if users.get(username) == password:
        # Generate a simple session token
        session_token = str(uuid.uuid4())
        sessions[session_token] = {
            'username': username,
            'expires': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        }
        return jsonify({'token': session_token}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/validate', methods=['POST'])
def validate():
    token = request.get_json().get('token')
    session = sessions.get(token)
    if session and session['expires'] > datetime.datetime.utcnow():
        return jsonify({'message': 'Token is valid', 'username': session['username']}), 200
    return jsonify({'message': 'Token is invalid or expired'}), 401

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
