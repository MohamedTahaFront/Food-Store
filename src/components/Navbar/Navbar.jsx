import "./Navbar.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaUser,
  FaCartShopping,
} from "react-icons/fa6";
import { FaSearch, FaRegEdit, FaArrowAltCircleUp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import phone from "../../assets/images/phone.svg";
import logo from "../../assets/images/logo.svg";
import clock from "../../assets/images/clock.svg";
import { useContext, useEffect, useState } from "react";
import { MdClose, MdDelete } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cartContext } from "../../context/CartContext";
import { scrollContext } from "../../context/ScrollContext";

function Navbar() {
  //-------------------- Scroll -------------------//
  const { scrollActive , setScrollActive , top } = useContext(scrollContext);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      setScrollActive("");
    }

    const timeOut = setTimeout(() => {
      if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView();
        }
      }
    }, 100);
    return ()=>clearTimeout(timeOut)

  }, [location, setScrollActive]);
  //-------------------------------- -------------------//


  // =============================cart=============================//
  const {cart , deleteProduct , increase, decrease} = useContext(cartContext)
  const [isOpen, setIsOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const total = cart.reduce((sum,product)=> sum + product.price * product.quantity , 0)
  // =============================cart=============================//


  return (
    <>
      <button className={`top ${top?"active" : ""}`} onClick={()=>window.scrollTo({top:0})}><FaArrowAltCircleUp /></button>
      {/* --------------Cart----------------- */}
      <div className={`cartBox ${openCart ? "active" : ""}`}>
        <MdClose className="close" onClick={() => setOpenCart(false)} />
        <h2>Cart Items</h2>
        <div className="cart-body">
          {cart.length < 1 
          ? <h3 style={{textAlign:"center", color:"red"}}>There are no products here</h3>
          :
          cart.map(product=>{
            return(
            <div className="details" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="info">
                <h4>{product.title} </h4>
                <p className="price">${product.price.toFixed(2)}</p>
              </div>
              <div className="quantity">
                <button onClick={()=>increase(product.id)}>+</button>
                <span>{product.quantity}</span>
                <button onClick={()=>decrease(product.id)}>-</button>
              </div>
              <MdDelete className="delete" onClick={()=>deleteProduct(product)} />
            </div>
            )
          })
        }
        </div>
        <div className="total">
          <h3>total</h3>
          <p className="price">${total.toFixed(2)}</p>
        </div>
      </div>
    {/* --------------Cart----------------- */}

  {/* ========================== navbar ========================== */}
    <div className={`Navbar ${top?"active" : ""}`} >
      <div className="nav-top">
        <div className="container">
          <div className="icons">
            <a href="/">
              <FaFacebookF />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <FaSearch />
            </a>
          </div>

          <div className="user-menu">
            <div className="login">
              <FaUser /> <a href="/">login</a>
            </div>
            <div className="login">
              <FaRegEdit /> <a href="/">Regester Now</a>
            </div>
            <div className="cart" onClick={() => setOpenCart(true)}>
              <FaCartShopping /> <span>({cart.length})</span>
            </div>
          </div>
          <div className="menu" onClick={() => setIsOpen(!isOpen)}>
            <IoMenu />
          </div>
        </div>
      </div>

      <div className="nav-center">
        <div className="container">
          <div className="info">
            <img src={phone} alt="phone" />
            <div className="details">
              <h4>Call Us : (+20) 1556158856</h4>
              <p>E-mail : mohamedelsaidmedo192003@gmail.com</p>
            </div>
          </div>

          <img src={logo} alt="logo" />

          <div className="info media">
            <img src={clock} alt="clock" />
            <div className="details">
              <h4>Working Hours :</h4>
              <p>Sun - Wen ( 3.00pm - 6.00pm )</p>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-bottom">
        <div className="container">
          <ul className={isOpen ? `active` : ""}>
            <li>
              <NavLink className={'page'} to={"/"} onClick={() => window.scrollTo({ top: 0 })}>
                Home
              </NavLink>
            </li>
            <li>
              <Link className={scrollActive === 'about' ? "active":""} onClick={(e)=>e.target.classList.add("active")} to={'/#about'}>About Us</Link>
            </li>
            <li>
              <Link className={scrollActive === 'services' ? "active":""} onClick={(e)=>e.target.classList.add("active")} to={'/#services'}>Our Services</Link>
            </li>
            <li>
              <NavLink className={'page'} to={"/products"} onClick={()=>window.scrollTo({top:0})}>Products</NavLink>
            </li>
            <li>
              <Link className={scrollActive === 'blogs' ? "active":""} onClick={(e)=>e.target.classList.add("active")} to={'/#blogs'}>Blogs</Link>
            </li>
            <li>
              <Link className={scrollActive === 'contact' ? "active":""} onClick={(e)=>e.target.classList.add("active")} to={'/#contact'}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Navbar;
