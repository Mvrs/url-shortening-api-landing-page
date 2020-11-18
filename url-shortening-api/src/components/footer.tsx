// @ts-ignore: corresponding type declarations.ts(2307)
import logo from '../../images/logo-w.svg'
// @ts-ignore: corresponding type declarations.ts(2307)
import facebook from '../../images/icon-facebook.svg'
// @ts-ignore: corresponding type declarations.ts(2307)
import twitter from '../../images/icon-twitter.svg'
// @ts-ignore: corresponding type declarations.ts(2307)
import pinterest from '../../images/icon-pinterest.svg'
// @ts-ignore: corresponding type declarations.ts(2307)
import instagram from '../../images/icon-instagram.svg'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <img className="footer__logo" src={logo} alt="logo" />
          <div className="footer__container-links">
            <div className="footer__container-resources">
              <div className="footer__container-header">
                <h3 className="footer__container-title">Features</h3>
                <h3 className="footer__container-title">Resources</h3>
                <h3 className="footer__container-title">Company</h3>
              </div>
              <div className="footer__container-shared">
                <div className="footer__column-1">
                  <p className="footer__container-info">Link Shortening</p>
                  <p className="footer__container-info">Branded Links</p>
                  <p className="footer__container-info">Analytics</p>
                </div>

                <div className="footer__column-2">
                  <p className="footer__container-info">Blog</p>
                  <p className="footer__container-info">Developers</p>
                  <p className="footer__container-info">Support</p>
                </div>

                <div className="footer__column-3">
                  <p className="footer__container-info">About</p>
                  <p className="footer__container-info">Our Team</p>
                  <p className="footer__container-info">Careers</p>
                  <p className="footer__container-info">Contact</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__social-links">
            <img className="facebook" src={facebook} alt="facebook-logo" />
            <img className="twitter" src={twitter} alt="twitter-logo" />
            <img className="pinterest" src={pinterest} alt="pinterest-logo" />
            <img className="instagram" src={instagram} alt="instagram-logo" />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
