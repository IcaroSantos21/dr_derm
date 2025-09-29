@echo off
echo ========================================
echo    Dr Derm - Sistema de E-commerce
echo ========================================
echo.

echo Verificando Python...
python --version >nul 2>&1
if errorlevel 1 (
    echo ERRO: Python nao encontrado!
    echo Instale o Python 3.8+ antes de continuar.
    pause
    exit /b 1
)

echo Python encontrado!
echo.

echo Backend usando apenas bibliotecas padrão do Python...
cd backend
echo Nenhuma dependência externa necessária!
echo.

echo ========================================
echo Iniciando servidor backend...
echo ========================================
echo.
echo Backend rodando em: http://localhost:5000
echo Frontend: Abra index.html no navegador
echo.
echo Credenciais Admin:
echo Email: admin@drderm.com
echo Senha: 123456
echo.
echo Pressione Ctrl+C para parar o servidor
echo ========================================

python app.py