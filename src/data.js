import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#service', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', iconName: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', iconName: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', iconName: 'fab fa-squarespace' },
]
export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'endless hiking',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw"',
    title: 'saving money',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    img: tour1,
    location: ' china',
    days: 6,
    price: 2100,
  },
  {
    id: 2,
    date: 'august 26th, 2020',
    title: 'best of java',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    img: tour2,
    location: 'indonesia',
    days: 11,
    price: 1400,
  },
  {
    id: 3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    img: tour3,
    location: 'hong kong',
    days: 8,
    price: 5000,
  },
  {
    id: 4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    location: 'kenya',
    img: tour4,
    days: 20,
    price: 3300,
  },
  {
    id: 5,
    date: 'august 30th, 2020',
    title: 'best of lara',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    img: tour2,
    location: 'Malysia',
    days: 18,
    price: 1800,
  },
]
