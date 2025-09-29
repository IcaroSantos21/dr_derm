# Dr Derm Backend API

Backend simples em Python Flask para o sistema de login e perfil do Dr Derm.

## Instalação

1. Instale o Python 3.8+ se não tiver
2. Instale as dependências:
```bash
pip install -r requirements.txt
```

## Execução

```bash
python app.py
```

A API estará disponível em: http://localhost:5000

## Endpoints

### Autenticação
- `POST /api/register` - Cadastro de usuários
- `POST /api/login` - Login
- `POST /api/logout` - Logout
- `GET /api/check-auth` - Verificar autenticação

### Perfil
- `GET /api/profile` - Obter dados do perfil
- `PUT /api/profile` - Atualizar perfil

### Utilitários
- `GET /health` - Health check da API

## Credenciais Admin

- Email: admin@drderm.com
- Senha: 123456

## Estrutura de Dados

### Usuário
```json
{
  "name": "Nome",
  "lastname": "Sobrenome", 
  "email": "email@exemplo.com",
  "phone": "(11) 99999-9999",
  "password": "hash_da_senha",
  "created_at": "2024-01-01T00:00:00",
  "user_type": "customer"
}
```

## Armazenamento

Os dados são armazenados em arquivo JSON local (`users.json`) para simplicidade.
Em produção, recomenda-se usar um banco de dados real.