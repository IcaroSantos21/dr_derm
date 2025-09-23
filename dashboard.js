// Dashboard JavaScript - Funcionalidades Completas

// Estado global do dashboard
let dashboardData = {
    products: [
        { id: 1, name: 'Serum Vitamina C', price: 89.90, stock: 25, category: 'facial', status: 'active', description: 'Serum anti-idade' },
        { id: 2, name: 'Hidratante Facial', price: 65.90, stock: 5, category: 'facial', status: 'active', description: 'Hidratante para pele seca' },
        { id: 3, name: 'Protetor Solar FPS 60', price: 45.90, stock: 18, category: 'protetor', status: 'active', description: 'Proteção solar avançada' }
    ],
    orders: [
        { id: 12345, customer: 'Maria Silva', email: 'maria.silva@email.com', date: '20/12/2023', total: 155.80, status: 'processing', items: 'Serum Vitamina C, Hidratante Facial' },
        { id: 12344, customer: 'João Santos', email: 'joao.santos@email.com', date: '19/12/2023', total: 45.90, status: 'delivered', items: 'Protetor Solar FPS 60' }
    ],
    currentEditingProduct: null
};

// Navegação entre seções
function showDashboardSection(sectionId) {
    // Remove active de todas as seções
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Ativa a seção selecionada
    document.getElementById(sectionId).classList.add('active');
    event.target.closest('.nav-item').classList.add('active');
    
    // Atualiza breadcrumb
    const breadcrumb = document.querySelector('.breadcrumb-item');
    const sectionNames = {
        'overview': 'Dashboard',
        'produtos': 'Produtos',
        'estoque': 'Estoque',
        'pedidos': 'Pedidos',
        'financeiro': 'Financeiro'
    };
    breadcrumb.textContent = sectionNames[sectionId] || 'Dashboard';
    
    // Atualiza dados da seção se necessário
    if (sectionId === 'produtos') {
        renderProducts();
    } else if (sectionId === 'pedidos') {
        renderOrders();
    }
}

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const body = document.body;
    sidebar.classList.toggle('collapsed');
    body.classList.toggle('sidebar-collapsed');
}

// Busca global
function globalSearch(query) {
    if (query.length < 2) return;
    
    // Simular busca
    console.log('Buscando por:', query);
    showNotification('Buscando por: ' + query, 'info');
}

// Notificações
function showNotifications() {
    showNotification('3 novas notificações', 'info');
}

function showNotification(message, type = 'success') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : 'info'}"></i>
        <span>${message}</span>
    `;
    
    // Adicionar ao DOM
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// === PRODUTOS ===

// Renderizar produtos
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = dashboardData.products.map(product => `
        <div class="product-item" data-status="${product.status}" data-name="${product.name.toLowerCase()}">
            <div class="product-image">
                <img src="https://via.placeholder.com/80x80/1B365D/FFFFFF?text=${product.name.charAt(0)}" alt="Produto">
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <p>${getCategoryName(product.category)}</p>
                <div class="product-stats">
                    <span class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                    <span class="stock ${product.stock < 10 ? 'low' : ''}">${product.stock} em estoque</span>
                </div>
            </div>
            <div class="product-status">
                <span class="status-badge ${product.status}">${product.status === 'active' ? 'Ativo' : 'Inativo'}</span>
            </div>
            <div class="product-actions">
                <button class="btn-icon" onclick="editProduct(${product.id})" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon danger" onclick="deleteProduct(${product.id})" title="Excluir">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function getCategoryName(category) {
    const categories = {
        'facial': 'Cuidados Faciais',
        'corporal': 'Cuidados Corporais',
        'protetor': 'Protetor Solar'
    };
    return categories[category] || category;
}

// Filtrar produtos
function filterProducts(status) {
    const items = document.querySelectorAll('.product-item');
    items.forEach(item => {
        if (status === 'all' || item.dataset.status === status) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Buscar produtos
function searchProducts(query) {
    const items = document.querySelectorAll('.product-item');
    items.forEach(item => {
        if (item.dataset.name.includes(query.toLowerCase())) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Adicionar produto
function showAddProduct() {
    document.getElementById('addProductModal').style.display = 'block';
    // Limpar formulário
    document.getElementById('productName').value = '';
    document.getElementById('productCategory').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productStock').value = '';
    document.getElementById('productDescription').value = '';
}

function closeAddProduct() {
    document.getElementById('addProductModal').style.display = 'none';
}

function addProduct(event) {
    event.preventDefault();
    
    const newProduct = {
        id: Date.now(),
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        price: parseFloat(document.getElementById('productPrice').value),
        stock: parseInt(document.getElementById('productStock').value),
        status: 'active',
        description: document.getElementById('productDescription').value
    };
    
    dashboardData.products.push(newProduct);
    renderProducts();
    closeAddProduct();
    updateProductCount();
    showNotification('Produto adicionado com sucesso!');
}

// Editar produto
function editProduct(id) {
    const product = dashboardData.products.find(p => p.id === id);
    if (!product) return;
    
    dashboardData.currentEditingProduct = id;
    
    document.getElementById('editProductName').value = product.name;
    document.getElementById('editProductCategory').value = product.category;
    document.getElementById('editProductPrice').value = product.price;
    document.getElementById('editProductStock').value = product.stock;
    document.getElementById('editProductDescription').value = product.description;
    
    document.getElementById('editProductModal').style.display = 'block';
}

function closeEditProduct() {
    document.getElementById('editProductModal').style.display = 'none';
    dashboardData.currentEditingProduct = null;
}

function saveProductEdit(event) {
    event.preventDefault();
    
    const productIndex = dashboardData.products.findIndex(p => p.id === dashboardData.currentEditingProduct);
    if (productIndex === -1) return;
    
    dashboardData.products[productIndex] = {
        ...dashboardData.products[productIndex],
        name: document.getElementById('editProductName').value,
        category: document.getElementById('editProductCategory').value,
        price: parseFloat(document.getElementById('editProductPrice').value),
        stock: parseInt(document.getElementById('editProductStock').value),
        description: document.getElementById('editProductDescription').value
    };
    
    renderProducts();
    closeEditProduct();
    showNotification('Produto atualizado com sucesso!');
}

// Excluir produto
function deleteProduct(id) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        dashboardData.products = dashboardData.products.filter(p => p.id !== id);
        renderProducts();
        updateProductCount();
        showNotification('Produto excluído com sucesso!');
    }
}

// === PEDIDOS ===

function renderOrders() {
    const grid = document.getElementById('ordersGrid');
    if (!grid) return;
    
    grid.innerHTML = dashboardData.orders.map(order => `
        <div class="order-item" data-status="${order.status}">
            <div class="order-header">
                <div class="order-id">#${order.id}</div>
                <div class="order-status ${order.status}">
                    <i class="fas fa-${getOrderIcon(order.status)}"></i>
                    <span>${getOrderStatusName(order.status)}</span>
                </div>
            </div>
            <div class="order-customer">
                <div class="customer-info">
                    <h4>${order.customer}</h4>
                    <p>${order.email}</p>
                </div>
                <div class="order-date">
                    <span>${order.date}</span>
                </div>
            </div>
            <div class="order-items">
                <p>${order.items}</p>
            </div>
            <div class="order-footer">
                <div class="order-total">R$ ${order.total.toFixed(2).replace('.', ',')}</div>
                <div class="order-actions">
                    <button class="btn-icon" onclick="viewOrder(${order.id})" title="Ver Detalhes">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn-icon" onclick="editOrder(${order.id})" title="Editar">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getOrderIcon(status) {
    const icons = {
        'pending': 'clock',
        'processing': 'clock',
        'shipped': 'truck',
        'delivered': 'check-circle'
    };
    return icons[status] || 'clock';
}

function getOrderStatusName(status) {
    const names = {
        'pending': 'Pendente',
        'processing': 'Processando',
        'shipped': 'Enviado',
        'delivered': 'Entregue'
    };
    return names[status] || status;
}

function filterOrders(status) {
    const items = document.querySelectorAll('.order-item');
    items.forEach(item => {
        if (status === 'all' || item.dataset.status === status) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function viewOrder(id) {
    showNotification(`Visualizando pedido #${id}`, 'info');
}

function editOrder(id) {
    showNotification(`Editando pedido #${id}`, 'info');
}

// === ESTOQUE ===

function updateStock(id) {
    const newStock = prompt('Digite a nova quantidade em estoque:');
    if (newStock !== null && !isNaN(newStock)) {
        const product = dashboardData.products.find(p => p.id === id);
        if (product) {
            product.stock = parseInt(newStock);
            renderProducts();
            showNotification('Estoque atualizado com sucesso!');
        }
    }
}

function updateAllStock() {
    showNotification('Atualizando todo o estoque...', 'info');
    setTimeout(() => {
        showNotification('Estoque atualizado com sucesso!');
    }, 2000);
}

function showLowStockProducts() {
    showDashboardSection('produtos');
    // Filtrar produtos com estoque baixo
    setTimeout(() => {
        const items = document.querySelectorAll('.product-item');
        items.forEach(item => {
            const stockElement = item.querySelector('.stock');
            if (stockElement && stockElement.classList.contains('low')) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }, 100);
}

// === FINANCEIRO ===

function exportReport() {
    showNotification('Exportando relatório...', 'info');
    setTimeout(() => {
        showNotification('Relatório exportado com sucesso!');
    }, 2000);
}

// === UTILITÁRIOS ===

function updateProductCount() {
    const count = dashboardData.products.length;
    document.getElementById('productCount').textContent = count;
    document.getElementById('totalProducts').textContent = count;
}

function showCardMenu(element) {
    showNotification('Menu do card', 'info');
}

function showSettings() {
    showNotification('Abrindo configurações...', 'info');
}

// Fechar modais ao clicar fora
window.onclick = function(event) {
    const addModal = document.getElementById('addProductModal');
    const editModal = document.getElementById('editProductModal');
    
    if (event.target === addModal) {
        closeAddProduct();
    }
    if (event.target === editModal) {
        closeEditProduct();
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Animações de entrada
    const cards = document.querySelectorAll('.stat-card, .action-card, .product-item');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
    });
    
    // Simular gráficos
    setTimeout(() => {
        document.querySelectorAll('.mini-chart').forEach(chart => {
            chart.style.opacity = '1';
        });
    }, 500);
    
    // Renderizar dados iniciais
    renderProducts();
    renderOrders();
    updateProductCount();
});

// CSS para notificações
const notificationCSS = `
.notification {
    position: fixed;
    top: 90px;
    right: 20px;
    background: white;
    padding: 16px 20px;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 10000;
    animation: slideInRight 0.3s ease;
    border-left: 4px solid #22c55e;
}

.notification.error {
    border-left-color: #ef4444;
    color: #ef4444;
}

.notification.info {
    border-left-color: #3b82f6;
    color: #3b82f6;
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
`;

// Adicionar CSS das notificações
const style = document.createElement('style');
style.textContent = notificationCSS;
document.head.appendChild(style);