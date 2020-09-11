function Nav() {
  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__feat__item">
            <a href="#" className="navigation__link">
              Features
            </a>
          </li>
          <li className="navigation__feat__item">
            <a href="#" className="navigation__link">
              Pricing
            </a>
          </li>
          <li className="navigation__feat__item">
            <a href="#" className="navigation__link">
              Resources
            </a>
          </li>

          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Login
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
