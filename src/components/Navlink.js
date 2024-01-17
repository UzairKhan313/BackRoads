const Navlink = ({ link, text }) => {
  return (
    <li>
      <a href={`#${link}`} className="nav-link">
        {text}
      </a>
    </li>
  )
}
export default Navlink
