import "../../../css/style.css"
import logo from "../../../img/logo.png";

function NavLogo() {
  return (
    <div className="nav__logo logo">
      <img className="logo__image" src={logo} alt="logo" />
    </div>
  );
}

export default NavLogo
