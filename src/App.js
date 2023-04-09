import React from 'react'
import ProductsPosting from './Pages/ProductsPosting'
import Productss from './Pages/Productss'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Productss/>}/>
          <Route path='/post' element={<ProductsPosting/>}/>
        </Routes>
      </Router>        
    </div>
  )
}
export default App
