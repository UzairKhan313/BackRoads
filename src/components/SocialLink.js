const SocialLink = ({ link, icon }) => {
  return (
    <li>
      <a href={link} target="_blank" className="nav-icon" rel="noreferrer">
        <i className={icon} />
      </a>
    </li>
  )
}
export default SocialLink
