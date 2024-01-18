import Title from './Title'
import { tours } from '../data'
import TourItem from './TourItem'
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title={'featured'} subTitle={'tours'} />
      <div className="section-center featured-center">
        {tours.map((item) => (
          <TourItem
            key={item.id}
            date={item.date}
            title={item.Title}
            text={item.text}
            icon={item.icon}
            location={item.location}
            days={item.days}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </section>
  )
}
export default Tours
