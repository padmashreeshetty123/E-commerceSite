import './Header.css';
function Header() {
  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li href="#" style={{color:"white",marginLeft:"-15px"}}><a href="#">KOHLER</a></li>
        <li><a href="#">ANN&nbsp;SACKS</a></li>
        <li><a href="#">KALLISTA</a></li>
        <li><a href="#">ROBERN</a></li>
        <li><a href="#">STERLING</a></li>
        <li><a href="#">SPRIG</a></li>
        <li><a href="#">HOME&nbsp;ENERGY</a></li>
        <li><a href="#">DESTINATIONS</a></li>
      </ul>
      <ul className="navbar-right">
      <i className="fa fa-map-marker" style={{fontSize:22}}></i>
        <li>Find&nbsp;a&nbsp;Store</li>
        <li>United&nbsp;States&nbsp;-&nbsp;EN</li>
        <li id='userlogo'>
        <i className="fa fa-user-o" style={{fontSize:22}}></i>
        </li>
        <li>
        <i className="fa fa-heart-o" style={{fontSize:22}}></i>
        </li>
        <li>
    
          <i className="fa fa-shopping-cart" style={{fontSize:22}}></i>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
