import tourImg1 from "./assets/images/tour-1.jpeg";
import tourImg2 from "./assets/images/tour-2.jpeg";
import tourImg3 from "./assets/images/tour-3.jpeg";
import tourImg4 from "./assets/images/tour-4.jpeg";

export const pageLink = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];

export const socialLink = [
  { id: 1, href: "https://www.facebook.com", name: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", name: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", name: "fab fa-squarespace" },
];

export const serviceContent = [
  {
    id: 1,
    name: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 1,
    name: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 1,
    name: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tourData = [
  {
    id: 1,
    src: tourImg1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, quicorporis",
    location: "china",
    duration: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    src: tourImg2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    src: tourImg3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, quicorporis",
    location: "hong kong",
    duration: "8 days",
    price: "from $5000",
  },
  {
    id: 4,
    src: tourImg4,
    date: "december 5th, 2020",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, quicorporis",
    location: "kenya",
    duration: "20 days",
    price: "from $3300",
  },
];
