# Estrutura CSS do Projeto DrDerm

## 📁 Arquivos CSS Separados por Página

O projeto agora possui arquivos CSS específicos para cada página, organizados da seguinte forma:

### 🎯 CSS por Página

| Página | Arquivo CSS | Descrição |
|--------|-------------|-----------|
| `index.html` | `index.css` | Página inicial com carrossel, produtos em destaque e categorias |
| `produtos.html` | `produtos.css` | Listagem de produtos com filtros |
| `produto.html` | `produto.css` | Visualização detalhada de produto individual |
| `carrinho.html` | `carrinho.css` | Carrinho de compras e checkout |
| `favoritos.html` | `favoritos.css` | Lista de produtos favoritos |
| `login.html` | `login.css` | Página de login e cadastro |
| `cadastro.html` | `login.css` | Usa o mesmo CSS do login |
| `perfil.html` | `perfil.css` | Perfil do usuário |
| `dashboard.html` | `dashboard.css` | Painel administrativo |

### 🔧 CSS Compartilhados

| Arquivo | Descrição |
|---------|-----------|
| `header.css` | Estilos do cabeçalho (usado em todas as páginas) |
| `common.css` | Estilos comuns e utilitários |
| `auth.css` | **OBSOLETO** - Substituído por `login.css` |
| `cart.css` | **OBSOLETO** - Substituído por `carrinho.css` |
| `dashbord_and_perfil.css` | **OBSOLETO** - Separado em `dashboard.css` e `perfil.css` |
| `styles.css` | **OBSOLETO** - Separado por páginas específicas |

## 🎨 Principais Componentes por Página

### Index (index.css)
- Carrossel promocional
- Carrossel de produtos React
- Grid de produtos
- Seções de categorias
- Modal de produto
- Popup do carrinho
- Mapa corporal interativo

### Produtos (produtos.css)
- Barra de filtros
- Grid responsivo de produtos
- Cards de produto com hover effects

### Produto (produto.css)
- Layout de produto detalhado
- Galeria de imagens
- Tabs de informações
- Calculadora de frete
- Mapa corporal de aplicação
- Produtos relacionados

### Carrinho (carrinho.css)
- Layout de checkout
- Itens do carrinho
- Resumo do pedido
- Opções de frete
- Controles de quantidade

### Favoritos (favoritos.css)
- Grid de favoritos
- Ações em lote
- Estado vazio
- Popup do carrinho

### Login (login.css)
- Formulários de autenticação
- Tabs de login/cadastro
- Validação visual
- Animações de fundo
- Indicador de força da senha

### Perfil (perfil.css)
- Sidebar de navegação
- Seções do perfil
- Formulários de dados
- Lista de pedidos
- Endereços
- Favoritos do usuário

### Dashboard (dashboard.css)
- Barra superior moderna
- Sidebar administrativa
- Cards de estatísticas
- Ações rápidas
- Layout responsivo

## 🎯 Paleta de Cores

```css
:root {
    --primary: #395f69;      /* Azul principal */
    --secondary: #748d8c;    /* Azul secundário */
    --accent: #dcbb92;       /* Dourado/bege */
    --dark: #1e2723;         /* Verde escuro */
    --light: #f8f9fa;        /* Cinza claro */
    --white: #ffffff;        /* Branco */
    --success: #28a745;      /* Verde sucesso */
    --danger: #dc3545;       /* Vermelho erro */
    --warning: #ffc107;      /* Amarelo aviso */
}
```

## 📱 Responsividade

Todos os arquivos CSS incluem media queries para:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px  
- **Mobile**: < 768px

## 🚀 Como Usar

1. **Cada página HTML** já está configurada para usar seu CSS específico
2. **header.css** é incluído em todas as páginas que têm cabeçalho
3. **common.css** pode ser adicionado para estilos compartilhados adicionais

## 🔄 Migração dos Arquivos Antigos

Os seguintes arquivos podem ser removidos após verificação:
- `styles.css` → Separado em arquivos específicos
- `auth.css` → Substituído por `login.css`
- `cart.css` → Substituído por `carrinho.css`
- `dashbord_and_perfil.css` → Separado em `dashboard.css` e `perfil.css`

## ✅ Benefícios da Nova Estrutura

1. **Manutenibilidade**: Cada página tem seus estilos isolados
2. **Performance**: Carrega apenas o CSS necessário por página
3. **Organização**: Fácil localização de estilos específicos
4. **Escalabilidade**: Adicionar novas páginas é mais simples
5. **Debugging**: Problemas de CSS são mais fáceis de identificar

## 🎨 Padrões de Nomenclatura

- **Páginas**: `[nome-da-pagina].css`
- **Componentes**: `[componente].css` 
- **Utilitários**: `common.css`, `utilities.css`
- **Layout**: `header.css`, `footer.css`