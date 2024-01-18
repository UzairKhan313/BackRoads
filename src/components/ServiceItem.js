const ServiceItem = ({ title, icon, text }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon} />
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  )
}
export default ServiceItem
