// Carousel functionality
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
}

// Auto slide
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 5000);



// Product data
const products = {
    1: {
        name: "Ácido Hialurônico Premium",
        brand: "DermaTech",
        price: "R$ 299,90",
        image: "Produto 1"
    },
    2: {
        name: "Toxina Botulínica Tipo A",
        brand: "BioTox",
        price: "R$ 1.299,90",
        image: "Produto 2"
    },
    3: {
        name: "Agulhas 30G Ultra Finas",
        brand: "MedNeedle",
        price: "R$ 89,90",
        image: "Produto 3"
    },
    4: {
        name: "Sérum Vitamina C",
        brand: "VitaDerm",
        price: "R$ 159,90",
        image: "Produto 4"
    }
};

// Modal functionality
function openProductModal(productId) {
    const modal = document.getElementById('productModal');
    const product = products[productId];
    
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalBrand').textContent = `Marca: ${product.brand}`;
    document.getElementById('modalPrice').textContent = product.price;
    
    modal.style.display = 'block';
}

function showMoreDetails() {
    document.getElementById('productModal').style.display = 'none';
    document.getElementById('detailsModal').style.display = 'block';
}

// Close modals
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
        document.getElementById('productModal').style.display = 'none';
        document.getElementById('detailsModal').style.display = 'none';
    }
    
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Shipping calculator
function calcularFrete() {
    const cep = document.getElementById('cepInput').value;
    const result = document.getElementById('freteResult');
    
    if (cep.length === 8 || cep.length === 9) {
        // Simulate shipping calculation
        setTimeout(() => {
            result.innerHTML = `
                <div style="margin-top: 1rem;">
                    <p><strong>Opções de Entrega:</strong></p>
                    <p>📦 Sedex: R$ 25,90 - 2 dias úteis</p>
                    <p>🚚 PAC: R$ 15,90 - 5 dias úteis</p>
                    <p>🚀 Expressa: R$ 35,90 - 1 dia útil</p>
                </div>
            `;
        }, 1000);
        
        result.innerHTML = '<p>Calculando frete...</p>';
    } else {
        result.innerHTML = '<p style="color: red;">CEP inválido</p>';
    }
}

// Favorite functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('favorite-btn') || e.target.classList.contains('btn-favorite')) {
        e.stopPropagation();
        e.target.style.color = e.target.style.color === 'red' ? '' : 'red';
        
        // Show feedback
        const feedback = document.createElement('div');
        feedback.textContent = e.target.style.color === 'red' ? 'Adicionado aos favoritos!' : 'Removido dos favoritos!';
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #395f69;
            color: white;
            padding: 1rem;
            border-radius: 5px;
            z-index: 10000;
        `;
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 2000);
    }
});

// Body part interaction
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('body-part')) {
        const part = e.target.classList[1];
        const info = {
            face: 'Aplicação facial: Ideal para rugas de expressão, sulcos nasogenianos e aumento de lábios.',
            neck: 'Aplicação no pescoço: Tratamento de flacidez e linhas horizontais.',
            arms: 'Aplicação nos braços: Tratamento de flacidez e tonificação.',
            torso: 'Aplicação no tronco: Procedimentos de contorno corporal.',
            legs: 'Aplicação nas pernas: Tratamento de celulite e firmeza da pele.'
        };
        
        alert(info[part] || 'Área de aplicação selecionada');
    }
});

// Tab functionality
function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Search functionality
document.querySelector('.search-bar').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = e.target.value.toLowerCase();
        alert(`Buscando por: ${searchTerm}`);
        // Here you would implement actual search functionality
    }
});

// Category filter
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-item')) {
        const category = e.target.textContent;
        alert(`Filtrando por categoria: ${category}`);
        // Here you would implement category filtering
    }
});

// Add to cart functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-cart')) {
        const feedback = document.createElement('div');
        feedback.textContent = 'Produto adicionado ao carrinho!';
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #dcbb92;
            color: #1e2723;
            padding: 1rem;
            border-radius: 5px;
            z-index: 10000;
            font-weight: bold;
        `;
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 2000);
    }
});

// Smooth scrolling for navigation
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-promo')) {
        document.querySelector('.products-section').scrollIntoView({
            behavior: 'smooth'
        });
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Dr. Derm - Sistema carregado com sucesso!');
    
    // Simulate loading saved CEP
    const savedCep = localStorage.getItem('userCep');
    if (savedCep) {
        document.getElementById('cepInput').value = savedCep;
    }
});

// Save CEP to localStorage
document.getElementById('cepInput')?.addEventListener('blur', (e) => {
    if (e.target.value.length >= 8) {
        localStorage.setItem('userCep', e.target.value);
    }
});