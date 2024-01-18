import { pageLinks, socialLinks } from '../data'
import Navlink from '../components/Navlink'

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((item) => (
          <Navlink
            key={item.id}
            link={item.href}
            text={item.text}
            footer={true}
          />
        ))}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((item) => {
          return (
            <li key={item.id}>
              <a
                href={item.href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={item.iconName} />
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
