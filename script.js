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
        rating: 127,
        description: "Preenchedor facial de alta qualidade para tratamentos estéticos profissionais. Ideal para correção de rugas e aumento de volume.",
        applicationAreas: ["head"],
        applicationText: "Aplicação facial: rugas, sulcos, lábios"
    },
    2: {
        name: "Toxina Botulínica Tipo A",
        brand: "BioTox",
        price: "R$ 1.299,90",
        rating: 89,
        description: "Neurotoxina purificada para tratamento de rugas dinâmicas e hiperidrose.",
        applicationAreas: ["head", "arms"],
        applicationText: "Rosto: rugas de expressão | Axilas: hiperidrose"
    },
    3: {
        name: "Agulhas 30G Ultra Finas",
        brand: "MedNeedle",
        price: "R$ 89,90",
        rating: 203,
        description: "Agulhas descartáveis ultra finas para procedimentos estéticos minimamente invasivos.",
        applicationAreas: ["head", "torso", "arms", "legs"],
        applicationText: "Uso geral: face, corpo, membros"
    },
    4: {
        name: "Sérum Vitamina C",
        brand: "VitaDerm",
        price: "R$ 159,90",
        rating: 156,
        description: "Sérum antioxidante com vitamina C estabilizada para rejuvenescimento facial.",
        applicationAreas: ["head", "neck"],
        applicationText: "Aplicação tópica: rosto e pescoço"
    },
    5: {
        name: "Bioestimulador de Colágeno",
        brand: "CollaGen",
        price: "R$ 899,90",
        rating: 94,
        description: "Bioestimulador injetável para estímulo natural da produção de colágeno.",
        applicationAreas: ["head", "neck", "torso"],
        applicationText: "Face, pescoço e corpo: flacidez"
    },
    6: {
        name: "Peeling Químico TCA",
        brand: "ChemPeel",
        price: "R$ 189,90",
        rating: 78,
        description: "Ácido tricloroacético para peeling químico médio, renovação celular e tratamento de manchas.",
        applicationAreas: ["head"],
        applicationText: "Aplicação facial: manchas e fotoenvelhecimento"
    },
    7: {
        name: "Microagulhamento Roller",
        brand: "MicroDerm",
        price: "R$ 129,90",
        rating: 145,
        description: "Roller para microagulhamento facial, estimula produção de colágeno e melhora absorção de ativos.",
        applicationAreas: ["head", "neck"],
        applicationText: "Rosto e pescoço: cicatrizes, poros, rugas"
    },
    8: {
        name: "Laser CO2 Fracionado",
        brand: "LaserTech",
        price: "R$ 2.499,90",
        rating: 67,
        description: "Equipamento de laser CO2 fracionado para rejuvenescimento e tratamento de cicatrizes.",
        applicationAreas: ["head", "torso"],
        applicationText: "Face e corpo: cicatrizes, estrias, rejuvenescimento"
    },
    9: {
        name: "Hidroquinona 4%",
        brand: "DermaChem",
        price: "R$ 79,90",
        rating: 189,
        description: "Creme despigmentante com hidroquinona 4% para tratamento de melasma e manchas solares.",
        applicationAreas: ["head"],
        applicationText: "Aplicação facial: melasma e manchas"
    },
    10: {
        name: "Fios de PDO",
        brand: "ThreadLift",
        price: "R$ 349,90",
        rating: 112,
        description: "Fios de polidioxanona para lifting facial não cirúrgico e bioestimulação.",
        applicationAreas: ["head", "neck"],
        applicationText: "Face e pescoço: lifting, flacidez"
    },
    11: {
        name: "Radiofrequência Facial",
        brand: "RF-Tech",
        price: "R$ 1.899,90",
        rating: 98,
        description: "Equipamento de radiofrequência monopolar para tratamento de flacidez facial e corporal.",
        applicationAreas: ["head", "neck", "torso", "arms"],
        applicationText: "Face, pescoço, corpo: flacidez e celulite"
    },
    12: {
        name: "Criolipolise Portátil",
        brand: "CryoSlim",
        price: "R$ 3.299,90",
        rating: 76,
        description: "Equipamento portátil de criolipolise para redução de gordura localizada não invasiva.",
        applicationAreas: ["torso", "arms", "legs"],
        applicationText: "Corpo: abdome, flancos, braços, coxas"
    },
    13: {
        name: "Enzimas Lipolíticas",
        brand: "EnzymeLipo",
        price: "R$ 459,90",
        rating: 134,
        description: "Solução injetável com enzimas lipolíticas para redução de gordura localizada.",
        applicationAreas: ["torso", "arms", "legs"],
        applicationText: "Corpo: gordura localizada, papada, culote"
    },
    14: {
        name: "Ultrassom Microfocado",
        brand: "UltraLift",
        price: "R$ 2.799,90",
        rating: 89,
        description: "Equipamento de ultrassom microfocado para lifting facial não invasivo com precisão milimétrica.",
        applicationAreas: ["head", "neck"],
        applicationText: "Face e pescoço: lifting profundo"
    },
    15: {
        name: "Mesoterapia Capilar",
        brand: "HairMeso",
        price: "R$ 229,90",
        rating: 167,
        description: "Solução para mesoterapia capilar com peptídeos e vitaminas para tratamento da alopecia.",
        applicationAreas: ["head"],
        applicationText: "Couro cabeludo: alopecia, queda capilar"
    },
    16: {
        name: "Plasma Rico em Plaquetas",
        brand: "PRP-Med",
        price: "R$ 189,90",
        rating: 203,
        description: "Kit para preparo de PRP autólogo para rejuvenescimento facial e capilar.",
        applicationAreas: ["head", "neck"],
        applicationText: "Face, pescoço e couro cabeludo"
    },
    17: {
        name: "Carboxiterapia CO2",
        brand: "CarboxyDerm",
        price: "R$ 1.599,90",
        rating: 145,
        description: "Equipamento de carboxiterapia para infusão subcutânea de CO2 medicinal.",
        applicationAreas: ["head", "torso", "arms", "legs"],
        applicationText: "Face e corpo: circulação, celulite, olheiras"
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
    
    // Show products section by default
    document.querySelector('.products-section').style.display = 'block';
});

// Save CEP to localStorage
document.getElementById('cepInput')?.addEventListener('blur', (e) => {
    if (e.target.value.length >= 8) {
        localStorage.setItem('userCep', e.target.value);
    }
});

// Navigation functionality
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.products-section, .category-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
}

// Handle dropdown navigation
document.addEventListener('click', (e) => {
    if (e.target.closest('.dropdown-content a')) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
            const sectionId = href.substring(1);
            showSection(sectionId);
        }
    }
    
    // Handle main nav links
    if (e.target.classList.contains('nav-link') && e.target.getAttribute('href') === '#produto') {
        e.preventDefault();
        showSection('produto');
    }
    
    if (e.target.classList.contains('nav-link') && e.target.getAttribute('href') === '#produtos') {
        e.preventDefault();
        document.querySelector('.products-section').style.display = 'block';
        document.querySelectorAll('.category-section').forEach(section => {
            section.style.display = 'none';
        });
        document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
    }
});

// Cart functionality
function toggleCartPopup() {
    const popup = document.getElementById('cartPopup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    
    setTimeout(() => {
        popup.classList.toggle('active');
    }, 10);
}

function changeQuantity(itemId, change) {
    // Simulate quantity change
    console.log(`Changing quantity for item ${itemId} by ${change}`);
}

function removeFromCart(itemId) {
    // Simulate item removal
    console.log(`Removing item ${itemId} from cart`);
}

function goToCheckout() {
    window.location.href = 'carrinho.html';
}

// Product page functionality
let currentProductId = 1;

function viewProductPage() {
    window.location.href = `produto.html?id=${currentProductId}`;
}

// Update current product ID when modal opens
function openProductModal(productId) {
    currentProductId = productId;
    const modal = document.getElementById('productModal');
    const product = products[productId];
    
    if (product) {
        document.getElementById('modalProductName').textContent = product.name;
        document.getElementById('modalBrand').textContent = `Marca: ${product.brand}`;
        document.getElementById('modalPrice').textContent = product.price;
        
        // Add description to modal if element exists
        const descElement = document.getElementById('modalDescription');
        if (descElement) {
            descElement.textContent = product.description;
        }
        

    }
    
    modal.style.display = 'block';
}

// Close cart popup when clicking outside
document.addEventListener('click', (e) => {
    const popup = document.getElementById('cartPopup');
    const cartIcon = document.querySelector('[title="Carrinho"]');
    
    if (popup && popup.classList.contains('active') && 
        !popup.contains(e.target) && 
        !cartIcon.contains(e.target)) {
        toggleCartPopup();
    }
});