import { Link } from 'react-router-dom'
import './Header.scss'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="main-header">
    <input type="checkbox" id="menu" />

    <Navbar />

    <div className="search-bar"> 
      <div className="search-bar__logo-container"><img src="img/logo.webp" alt="" /></div>
      <form action="#" className="search-bar__form-container">
        <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
        <input type="search" className="search-bar__form-search" id="busqueda" />
        <input type="submit" className="search-bar__form-submit" value="Buscar" />
      </form>
      <Link className="search-bar__carrito-container" to="/carrito">C</Link>
      <div className="menu-toogle">
        <label htmlFor="menu" className="menu-toogle__label">
          <span className="menu-toogle__top-bread"></span>
          <span className="menu-toogle__meat"></span>
          <span className="menu-toogle__bottom-bread"></span>
        </label>
      </div>
    </div> 

  </header> 
  )
}

export default Header