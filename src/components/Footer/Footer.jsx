import facebookIcon from '../../assets/facebook.svg'
import instagramIcon from '../../assets/instagram.svg'
import twitterIcon from '../../assets/twitter.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import './Footer.styles.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerLinks">
        <a
          href="https://www.facebook.com/tina.hastenreiter"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebookIcon} alt="Ícone do Facebook" />
        </a>
        <a
          href="https://twitter.com/ValentinaHaste1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitterIcon} alt="Ícone do Twitter" />
        </a>
        <a
          href="https://www.instagram.com/v.hasten/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Ícone do Instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/valentina-hastenreiter-0b268a21a/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Ícone do LinkedIn" />
        </a>
      </div>
      <div className="footerAutora">
        <p>Feito com amor por Valentina, aluna da Reprograma </p>
      </div>
    </footer>
  )
}

export default Footer
