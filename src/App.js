import React from 'react'
import ProductesPosting from './Pages/ProductesPosting'
import Product from './Pages/Product'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Product/>}/>
          <Route path='/post' element={<ProductesPosting/>}/>
        </Routes>
      </Router>        
    </div>
  )
}
export default App
