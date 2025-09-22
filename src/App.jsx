import React from 'react'
import Header from './components/Header'
import Categories from './components/Categories'
import PromoCarousel from './components/PromoCarousel'
import ProductsCarousel from './components/ProductsCarousel'
import ProductsGrid from './components/ProductsGrid'
import ProductModal from './components/ProductModal'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <PromoCarousel />
      <ProductsCarousel />
      <ProductsGrid />
      <ProductModal />
    </div>
  )
}

export default App