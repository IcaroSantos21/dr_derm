import React, { useState, useEffect } from 'react'

const ProductsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const products = [
    { id: 1, name: 'Ácido Hialurônico Premium', brand: 'DermaTech', price: 'R$ 299,90', rating: 127 },
    { id: 2, name: 'Toxina Botulínica Tipo A', brand: 'BioTox', price: 'R$ 1.299,90', rating: 89 },
    { id: 3, name: 'Agulhas 30G Ultra Finas', brand: 'MedNeedle', price: 'R$ 89,90', rating: 203 },
    { id: 4, name: 'Sérum Vitamina C', brand: 'VitaDerm', price: 'R$ 159,90', rating: 156 },
    { id: 5, name: 'Bioestimulador de Colágeno', brand: 'CollaGen', price: 'R$ 899,90', rating: 94 },
    { id: 6, name: 'Peeling Químico TCA', brand: 'ChemPeel', price: 'R$ 189,90', rating: 78 }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev >= 1 ? 0 : prev + 1)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="products-carousel-section">
      <div className="container">
        <h2>Produtos em Destaque</h2>
        <div className="products-carousel">
          <div 
            className="products-wrapper"
            style={{ transform: `translateX(-${currentSlide * 50}%)` }}
          >
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <div className="placeholder-img">Produto {product.id}</div>
                  <span className="favorite-btn">❤️</span>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="brand">Marca: {product.brand}</p>
                  <div className="rating">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span>({product.rating})</span>
                  </div>
                  <p className="price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsCarousel