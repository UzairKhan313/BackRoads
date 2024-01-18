const Navlink = ({ link, text, footer }) => {
  return (
    <li>
      <a href={`#${link}`} className={`${footer ? 'footer-link' : 'nav-link'}`}>
        {text}
      </a>
    </li>
  )
}
export default Navlink
