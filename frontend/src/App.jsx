/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'
import Footer from './Components/Footer/Footer'
import Shopcategory from './Pages/Shopcategory'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/men' element={<Shopcategory  banner={men_banner} category='men'></Shopcategory>}></Route>
          <Route path='/women' element={<Shopcategory banner={women_banner} category='women'></Shopcategory>}></Route>
          <Route path='/kids' element={<Shopcategory  banner ={kids_banner}category='kid'></Shopcategory>}></Route>
          <Route path='/product' element={<Product></Product>}>
          <Route path=':productId' element={<Product></Product>}></Route>
          </Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/login' element={<LoginSignUp></LoginSignUp>}></Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
    </>
  )
}


export default App
