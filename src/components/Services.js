import { services } from '../data'
import ServiceItem from './ServiceItem'
import Title from './Title'
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title={'our'} subTitle={'services'} />
      <div className="section-center services-center">
        {services.map((item) => (
          <ServiceItem key={item.id} title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  )
}
export default Services
