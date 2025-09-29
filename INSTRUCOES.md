# Dr Derm - Instruções de Execução

## Estrutura Organizada

O projeto foi reorganizado e limpo:

### Arquivos Removidos (Redundantes)
- `css/dashbord_and_perfil.css` (duplicado)
- `css/auth.css` (duplicado)  
- `css/login.css` (duplicado)
- `auth.js` (redundante)

### Arquivos Corrigidos
- `perfil.html` - Conflitos de merge resolvidos
- `login.html` - Integração com backend
- `dashboard.html` - Sintaxe corrigida

## Backend Python

### Instalação
1. Navegue até a pasta backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
pip install -r requirements.txt
```

### Execução
```bash
python app.py
```

O servidor estará disponível em: http://localhost:5000

## Frontend

### Execução Simples
Abra o arquivo `index.html` no navegador.

### Com Servidor Local (Recomendado)
Para evitar problemas de CORS, use um servidor local:

```bash
# Python
python -m http.server 8000

# Node.js (se tiver)
npx serve .

# Live Server (VS Code)
Extensão Live Server
```

## Credenciais de Teste

### Administrador
- Email: admin@drderm.com
- Senha: 123456
- Acesso: Dashboard administrativo

### Usuário Comum
Cadastre-se através da tela de login ou use qualquer email/senha para teste local.

## Funcionalidades Testáveis

### Com Backend (Recomendado)
1. **Cadastro de usuários** - Dados salvos no arquivo `users.json`
2. **Login** - Autenticação real com sessões
3. **Perfil** - Atualização de dados via API
4. **Dashboard Admin** - Acesso restrito ao admin

### Sem Backend (Modo Local)
1. **Carrossel React** - Produtos em destaque
2. **Modal de produtos** - Detalhes e informações
3. **Navegação** - Entre seções e páginas
4. **Interface responsiva** - Todos os dispositivos

## Endpoints da API

- `POST /api/register` - Cadastro
- `POST /api/login` - Login  
- `POST /api/logout` - Logout
- `GET /api/profile` - Obter perfil
- `PUT /api/profile` - Atualizar perfil
- `GET /api/check-auth` - Verificar autenticação
- `GET /health` - Status da API

## Estrutura Final

```
drderm/
├── backend/           # Backend Python Flask
│   ├── app.py        # Servidor principal
│   ├── requirements.txt
│   └── README.md
├── css/              # Estilos organizados
├── images/           # Imagens do projeto
├── src/              # Componentes React
├── index.html        # Página principal
├── login.html        # Login/Cadastro
├── perfil.html       # Perfil do usuário
├── dashboard.html    # Dashboard admin
├── script.js         # JavaScript principal
├── dashboard.js      # JavaScript do dashboard
└── README.md         # Documentação original
```

## Próximos Passos

1. **Executar o backend**: `python backend/app.py`
2. **Abrir o frontend**: `index.html` no navegador
3. **Testar login**: admin@drderm.com / 123456
4. **Testar cadastro**: Criar novo usuário
5. **Testar perfil**: Atualizar dados do usuário

## Observações

- O backend usa arquivo JSON para simplicidade
- Em produção, recomenda-se usar banco de dados real
- CORS está habilitado para desenvolvimento
- Sessões são gerenciadas pelo Flask
- Interface totalmente responsiva