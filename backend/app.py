import json
import hashlib
import os
from datetime import datetime
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import urllib.parse

USERS_FILE = 'users.json'
sessions = {}

def load_users():
    if os.path.exists(USERS_FILE):
        with open(USERS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}

def save_users(users):
    with open(USERS_FILE, 'w', encoding='utf-8') as f:
        json.dump(users, f, ensure_ascii=False, indent=2)

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

class APIHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', 'http://127.0.0.1:8000')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Access-Control-Allow-Credentials', 'true')
        self.end_headers()

    def send_json_response(self, data, status=200):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', 'http://127.0.0.1:8000')
        self.send_header('Access-Control-Allow-Credentials', 'true')
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode('utf-8'))
    
    def log_message(self, format, *args):
        return  # Silenciar logs

    def get_request_data(self):
        content_length = int(self.headers.get('Content-Length', 0))
        if content_length:
            return json.loads(self.rfile.read(content_length).decode('utf-8'))
        return {}

    def do_POST(self):
        path = urlparse(self.path).path
        
        if path == '/api/register':
            data = self.get_request_data()
            users = load_users()
            
            if data['email'] in users:
                self.send_json_response({'error': 'Email já cadastrado'}, 400)
                return
            
            user_data = {
                'name': data['name'],
                'lastname': data['lastname'],
                'email': data['email'],
                'phone': data['phone'],
                'password': hash_password(data['password']),
                'created_at': datetime.now().isoformat(),
                'user_type': 'customer'
            }
            
            users[data['email']] = user_data
            save_users(users)
            
            self.send_json_response({
                'success': True,
                'message': 'Usuário cadastrado com sucesso',
                'user': {
                    'name': user_data['name'],
                    'lastname': user_data['lastname'],
                    'email': user_data['email'],
                    'phone': user_data['phone'],
                    'user_type': user_data['user_type']
                }
            }, 201)
            
        elif path == '/api/login':
            data = self.get_request_data()
            email = data.get('email')
            password = data.get('password')
            
            # Admin login
            if email == 'admin@drderm.com' and password == '123456':
                session_id = hashlib.md5(f"{email}{datetime.now()}".encode()).hexdigest()
                sessions[session_id] = {'email': email, 'user_type': 'admin'}
                
                self.send_json_response({
                    'success': True,
                    'message': 'Login realizado com sucesso',
                    'user': {
                        'email': email,
                        'name': 'Administrador',
                        'lastname': 'Dr Derm',
                        'user_type': 'admin'
                    }
                })
                return
            
            users = load_users()
            
            if email not in users or users[email]['password'] != hash_password(password):
                self.send_json_response({'error': 'Email ou senha incorretos'}, 401)
                return
            
            user = users[email]
            session_id = hashlib.md5(f"{email}{datetime.now()}".encode()).hexdigest()
            sessions[session_id] = {'email': email, 'user_type': user['user_type']}
            
            self.send_json_response({
                'success': True,
                'message': 'Login realizado com sucesso',
                'user': {
                    'name': user['name'],
                    'lastname': user['lastname'],
                    'email': user['email'],
                    'phone': user['phone'],
                    'user_type': user['user_type']
                }
            })
            
        elif path == '/api/logout':
            self.send_json_response({'success': True, 'message': 'Logout realizado com sucesso'})

    def do_GET(self):
        path = urlparse(self.path).path
        
        if path == '/health':
            self.send_json_response({
                'status': 'healthy',
                'message': 'Dr Derm API está funcionando',
                'timestamp': datetime.now().isoformat()
            })

if __name__ == '__main__':
    # Criar usuário admin se não existir
    users = load_users()
    if 'admin@drderm.com' not in users:
        admin_user = {
            'name': 'Administrador',
            'lastname': 'Dr Derm',
            'email': 'admin@drderm.com',
            'phone': '(11) 99999-9999',
            'password': hash_password('123456'),
            'created_at': datetime.now().isoformat(),
            'user_type': 'admin'
        }
        users['admin@drderm.com'] = admin_user
        save_users(users)
    
    server = HTTPServer(('127.0.0.1', 5000), APIHandler)
    print("Dr Derm API iniciada em http://localhost:5000")
    print("Credenciais admin: admin@drderm.com / 123456")
    server.serve_forever()