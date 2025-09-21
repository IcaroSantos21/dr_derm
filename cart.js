// Cart data
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Product data
const products = {
    1: { name: "Ácido Hialurônico Premium", price: 299.90, image: "Produto 1" },
    2: { name: "Toxina Botulínica Tipo A", price: 1299.90, image: "Produto 2" },
    3: { name: "Agulhas 30G Ultra Finas", price: 89.90, image: "Produto 3" },
    4: { name: "Sérum Vitamina C", price: 159.90, image: "Produto 4" }
};

// Load cart on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
});

function loadCart() {
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    
    if (cart.length === 0) {
        cartItems.style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }
    
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const product = products[item.id];
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="item-image">${product.image}</div>
            <div class="item-details">
                <h4>${product.name}</h4>
                <p>Produto dermatológico profissional</p>
            </div>
            <div class="item-controls">
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <div class="item-price">R$ ${(product.price * item.quantity).toFixed(2).replace('.', ',')}</div>
                <button class="remove-btn" onclick="removeItem(${index})">×</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    updateSummary();
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    loadCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    loadCart();
}

function updateSummary() {
    const subtotal = cart.reduce((sum, item) => {
        return sum + (products[item.id].price * item.quantity);
    }, 0);
    
    document.getElementById('subtotal').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    
    const shipping = subtotal > 500 ? 0 : 25.90;
    document.getElementById('shipping').textContent = `R$ ${shipping.toFixed(2).replace('.', ',')}`;
    
    const total = subtotal + shipping;
    document.getElementById('total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function calculateShipping() {
    const cep = document.getElementById('cepCart').value;
    if (cep.length >= 8) {
        alert('Frete calculado! Valores atualizados.');
        updateSummary();
    } else {
        alert('CEP inválido!');
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Carrinho vazio!');
        return;
    }
    
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    if (!isLoggedIn) {
        alert('Faça login para finalizar a compra!');
        window.location.href = 'login.html';
        return;
    }
    
    alert('Pedido finalizado com sucesso!');
    cart = [];
    saveCart();
    loadCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add to cart function (called from main page)
function addToCart(productId) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    
    saveCart();
}