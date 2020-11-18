// @ts-ignore: corresponding type declarations.ts(2307)
import illustration from '../../images/illustration-working.svg'
// import URLForm from './url-shortener'

function Header() {
  return (
    <>
      <section className="main">
        <div className="main__info-container">
          <h1 className="main__info-title">
            More than just
            <br />
            shorter links
          </h1>
          <p className="main__info-description">
            Build your brand’s recognition and get detailed
            <br /> insights on how your links are performing.
          </p>
          <button className="main_info-button">
            <a href="#" className="u-button-active">
              Get Started
            </a>
          </button>
        </div>

        <div className="main__image-container">
          <img src={illustration} alt="main-illustration" />
        </div>
      </section>
      {/* <URLForm /> */}
    </>
  )
}

export default Header
