// @ts-ignore: corresponding type declarations.ts(2307)
import logo from '../../images/logo.svg'

function Nav() {
	return (
		<>
			<nav className="nav">
				<ul className="nav__container">
					<img className="nav__logo" src={logo} alt="logo" />

					<div className="nav__info">
						<li className="nav__item nav__item--info">
							<a href="#" className="nav__link">
								Features
							</a>
						</li>
						<li className="nav__item nav__item--info">
							<a href="#" className="nav__link">
								Pricing
							</a>
						</li>
						<li className="nav__item nav__item--info">
							<a href="#" className="nav__link">
								Resources
							</a>
						</li>
					</div>

					<div className="nav__auth">
						<li className="nav__item nav__item--auth">
							<a href="#" className="nav__link">
								Login
							</a>
						</li>
					</div>
					<li className="nav__item nav__item--active">
						<a href="#" className="nav__link">
							Sign Up
						</a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Nav
