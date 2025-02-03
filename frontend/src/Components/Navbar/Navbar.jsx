import  { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_logo from '../Assets/cart_icon.png'
import dropdown from '../Assets/image.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {
  const [menu,setMenu] = useState("SHOP");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();


  const dropdown_toggle = (e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
  
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOOPIN</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown} alt="" />
        <ul ref={menuRef} className="navmenu">
          <li onClick={()=> setMenu('SHOP')}> <Link to='/' style={{textDecoration:'none'}}>SHOP</Link> {menu==='SHOP'?<hr/>:<></>}</li> 
          <li onClick={()=> setMenu('MEN')}> <Link to='/men' style={{textDecoration:'none'}}>MEN</Link>{menu==='MEN'?<hr/>:<></>}</li>
          <li onClick={()=> setMenu('WOMEN')}><Link to='/women' style={{textDecoration:'none'}}>WOMEN </Link>{menu==='WOMEN'?<hr/>:<></>}</li>
          <li onClick={()=> setMenu('KIDS')}><Link to='/kids' style={{textDecoration:'none'}}>KIDS</Link> {menu==='KIDS'?<hr/>:<></>}</li>
        </ul>
        <div className="shop-cart">
          <Link to='/login'><button>login</button></Link>
          <Link to='/cart'><img src={cart_logo} alt="cart-logo" /></Link>
          <div className="shop-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>

  )
}

export default Navbar