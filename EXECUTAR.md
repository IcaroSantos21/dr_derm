# Como Executar o Dr Derm

## Passo 1: Iniciar Backend
```bash
cd backend
python app.py
```
**Servidor rodando em:** http://127.0.0.1:5000

## Passo 2: Iniciar Frontend
**Em outro terminal:**
```bash
# Na pasta raiz do projeto
python -m http.server 8000
```
**OU execute:** `start_frontend.bat`

**Frontend rodando em:** http://127.0.0.1:8000

## Passo 3: Acessar
Abra o navegador em: **http://127.0.0.1:8000**

## Credenciais
- **Admin:** admin@drderm.com / 123456
- **Usuário:** Cadastre-se pela interface

## Solução de Problemas
- ✅ Use **127.0.0.1** ao invés de localhost
- ✅ Execute backend E frontend em terminais separados
- ✅ Aguarde "API iniciada" antes de testar