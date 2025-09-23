# DrDerm - E-commerce de Produtos Dermatológicos

Plataforma de vendas online especializada em produtos dermatológicos e estéticos para profissionais da área médica.

## 🚀 Funcionalidades

### Catálogo e Produtos
- **Carrossel Automático React**: 6 produtos em destaque com transição a cada 4 segundos
- **Modal de Detalhes**: Informações técnicas, variações e cálculo de frete
- **Mapa Corporal Interativo**: Visualização das áreas de aplicação
- **Sistema de Avaliações**: Comentários e notas de profissionais
- **Produtos Relacionados**: Sugestões inteligentes
- **17 Produtos**: Catálogo completo para teste

### Sistema de Usuário
- **Autenticação**: Login e cadastro para profissionais
- **Carrinho de Compras**: Gerenciamento completo de pedidos
- **Cálculo de Frete**: Integração com CEP e armazenamento local
- **Favoritos**: Sistema de produtos preferidos com feedback visual

### Interface
- **Design Responsivo**: Adaptável a todos os dispositivos
- **Navegação Intuitiva**: Cabeçalho profissional com acesso rápido
- **Carrossel de Promoções**: Banner automático a cada 5 segundos
- **Cores Personalizadas**: Paleta clean (#dcbb92, #395f69, #748d8c, #1e2723)

## 💰 Produtos Disponíveis

### Carrossel em Destaque
| Produto | Preço | Categoria |
|---------|-------|-----------|
| Ácido Hialurônico Premium | R$ 299,90 | Preenchimento |
| Toxina Botulínica Tipo A | R$ 1.299,90 | Neurotoxina |
| Agulhas 30G Ultra Finas | R$ 89,90 | Instrumentos |
| Sérum Vitamina C | R$ 159,90 | Cosmecêuticos |
| Bioestimulador de Colágeno | R$ 899,90 | Bioestimulação |
| Peeling Químico TCA | R$ 189,90 | Peelings |

### Catálogo Completo (11 produtos adicionais)
- Microagulhamento Roller, Laser CO2, Hidroquinona 4%, Fios de PDO
- Radiofrequência Facial, Criolipolise, Enzimas Lipolíticas
- Ultrassom Microfocado, Mesoterapia Capilar, PRP, Carboxiterapia

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **React**: Componente de carrossel via CDN (React 18)
- **Babel**: Transpilação JSX em tempo real
- **Armazenamento**: LocalStorage para CEP e preferências
- **Design**: Interface responsiva e acessível
- **Arquitetura**: Híbrida (HTML + React Components)

## 📁 Estrutura do Projeto

```
drderm/
├── index.html              # Página principal com React
├── react-carousel.html     # Carrossel standalone
├── script.js              # JavaScript principal
├── styles.css             # Estilos principais
├── package.json           # Dependências React (opcional)
├── vite.config.js         # Configuração Vite
├── src/
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Entry point React
│   ├── App.css           # Estilos React
│   └── components/
│       └── ProductsCarousel.jsx
└── README.md             # Documentação
```

## 🚀 Como Usar

### Opção 1: Direto no Navegador (Recomendado)
1. Abra o arquivo `index.html` no navegador
2. O carrossel React carrega automaticamente via CDN
3. Navegue pelas funcionalidades disponíveis

### Opção 2: Com Node.js (Desenvolvimento)
```bash
npm install
npm run dev
```

### Navegação
- **Início**: Carrossel automático + catálogo de produtos
- **Carrossel**: 6 produtos em destaque (auto-slide 4s)
- **Produtos**: 17 produtos com modal detalhado
- **Modal**: Mapa corporal, avaliações, frete, variações

### Funcionalidades Principais
1. **Carrossel Automático**: Produtos em destaque rotacionam sozinhos
2. **Modal Completo**: Clique nos produtos para ver detalhes
3. **Mapa Corporal**: Clique nas áreas do corpo para informações
4. **Calcular Frete**: CEP salvo automaticamente
5. **Favoritos**: Sistema com feedback visual
6. **Abas Detalhadas**: Ingredientes, modo de uso, especificações

## 👨⚕️ Público-Alvo

Profissionais da área médica e estética:
- Dermatologistas
- Cirurgiões plásticos
- Esteticistas
- Biomédicos

## 📱 Compatibilidade

- ✅ Chrome 80+ (React via CDN)
- ✅ Firefox 75+ (Babel standalone)
- ✅ Safari 13+ (ES6+ support)
- ✅ Edge 80+ (Modern JS)
- ✅ Dispositivos móveis (Responsive)

## ⚡ Performance

- **React via CDN**: Sem build necessário
- **Auto-slide**: Transições suaves CSS
- **LocalStorage**: Persistência de dados
- **Lazy Loading**: Componentes sob demanda