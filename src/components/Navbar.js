import logo from '../images/logo.svg'
import Navlink from './Navlink'
import { pageLinks, socialLinks } from '../data'
import SocialLink from './SocialLink'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((item) => (
            <Navlink link={item.href} text={item.text} key={item.id} />
          ))}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((item) => (
            <SocialLink key={item.id} link={item.href} icon={item.iconName} />
          ))}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
