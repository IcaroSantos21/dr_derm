import React from 'react'
import ReactDOM from 'react-dom/client'
import ProductsCarousel from './components/ProductsCarousel'

const carouselRoot = document.getElementById('products-carousel-root')
if (carouselRoot) {
  ReactDOM.createRoot(carouselRoot).render(<ProductsCarousel />)
}