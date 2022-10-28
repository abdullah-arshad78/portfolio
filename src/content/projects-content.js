import yelpCampImg from "../assets/yelp-camp-img.png";
import ahmedSolImg from "../assets/ahmed-sol-img.png";
import breakoutGameImg from "../assets/breakout-game.png";
import exchangeRateImg from "../assets/exchange-rate-calculator.png";
import expenseTrackerImg from "../assets/expense-tracker-img.png";
import hotelOverviewImg from "../assets/hotel-overview-img.png";
import infiniteScrollImg from "../assets/infinite-scroll-img.png";
import mealFinderImg from "../assets/meal-finder-img.png";
import natoursImg from "../assets/natours-project-img.png";
import nexterImg from "../assets/nexter.png";
import relaxerImg from "../assets/relaxer-app-img.png";
import sortableListImg from "../assets/sortable-list-img.png";
import ptSite from "../assets/pt-site-img.png";
import foodOrderImg from "../assets/food-order-app.png";
import reduxMiniImg from "../assets/redux-mini.png";

const projectsContent = [
  {
    id: "p1",
    name: "Personal Trainer Site",
    image: ptSite,
    tags: ["responsive", "frontend", "workout"],
    tools: ["React", "SCSS", "EmailJS"],
    views: {
      sourceCode: "https://github.com/abdullah-arshad78/pt-site",
      liveSite: "https://capable-kangaroo-217048.netlify.app/",
    },
    desktopOnly: false,
  },
  {
    id: "p2",
    name: "Mini Redux App",
    image: reduxMiniImg,
    tags: ["responsive", "frontend", "e-commerce"],
    tools: ["React", "SCSS", "Redux"],
    views: {
      sourceCode: "https://github.com/abdullah-arshad78/redux-mini-app",
      liveSite: "https://mini-redux-app.netlify.app/",
    },
    desktopOnly: false,
  },

  {
    id: "p3",
    name: "Yelp Camp",
    image: yelpCampImg,
    tags: ["responsive", "fullstack", "camping"],
    tools: ["Node.js", "MongoDB", "EJS"],
    views: {
      sourceCode: "https://github.com/abdullah-arshad78/yelp-camp",
      liveSite: "https://limitless-plains-12527.herokuapp.com/",
    },
    desktopOnly: false,
  },
  {
    id: "p4",
    name: "Food Order App",
    image: foodOrderImg,
    tags: ["responsive", "frontend", "food"],
    tools: ["React", "Context API", "Stripe"],
    views: {
      sourceCode: "https://github.com/abdullah-arshad78/food-order",
    },
    desktopOnly: false,
  },

  {
    id: "p5",
    name: "Ahmed Solutions",
    image: ahmedSolImg,
    tags: ["responsive", "frontend", "marketing"],
    tools: ["Bootstrap", "SCSS", "Animations"],
    views: {
      sourceCode: "https://github.com/abdullah-arshad78/ahmed-sol",
      liveSite: "https://abdullah-arshad78.github.io/ahmed-sol/",
    },
    desktopOnly: false,
  },
  {
    id: "p6",
    name: "Hotel Overview",
    image: hotelOverviewImg,
    tags: ["responsive", "frontend", "hotels"],
    tools: ["Flexbox", "SCSS", "Animations"],
    views: {
      sourceCode: "https://github.com/abdullah-arshad78/hotel-overview",
      liveSite: "https://abdullah-arshad78.github.io/hotel-overview/",
    },
    desktopOnly: false,
  },
  {
    id: "p7",
    name: "Nexter",
    image: nexterImg,
    tags: ["responsive", "frontend", "real estate"],
    tools: ["Grid", "SCSS", "Flexbox"],
    views: {
      sourceCode: "https://github.com/abdullah-arshad78/nexter",
      liveSite: "https://abdullah-arshad78.github.io/nexter/",
    },
    desktopOnly: false,
  },

  {
    id: "p8",
    name: "Natours",
    image: natoursImg,
    tags: ["responsive", "frontend", "nature"],
    tools: ["HTML", "SCSS", "Animations"],
    views: {
      sourceCode: "https://github.com/abdullah-arshad78/natours-project",
      liveSite: "https://abdullah-arshad78.github.io/natours-project/",
    },
    desktopOnly: false,
  },
  {
    id: "p9",
    name: "Expense Tracker",
    image: expenseTrackerImg,
    tags: ["frontend", "finances"],
    tools: ["HTML", "CSS", "JavaScript"],
    views: {
      sourceCode: "https://github.com/abdullah-arshad78/expensetracker",
      liveSite: "https://abdullah-arshad78.github.io/expensetracker/",
    },
    desktopOnly: false,
  },
  {
    id: "p10",
    name: "Exchange Rate Calculator",
    image: exchangeRateImg,
    tags: ["frontend", "finances"],
    tools: ["HTML", "CSS", "JavaScript"],
    views: {
      sourceCode:
        "https://github.com/abdullah-arshad78/exchange-rate-calculator",
      liveSite: "https://abdullah-arshad78.github.io/exchange-rate-calculator/",
    },
    desktopOnly: true,
  },
  {
    id: "p11",
    name: "Sortable List",
    image: sortableListImg,
    tags: ["frontend", "draggable"],
    tools: ["HTML", "CSS", "JavaScript"],
    views: {
      sourceCode: "https://github.com/abdullah-arshad78/sortable-list",
      liveSite: "https://abdullah-arshad78.github.io/sortable-list/",
    },
    desktopOnly: true,
  },
  {
    id: "p12",
    name: "Meal Finder",
    image: mealFinderImg,
    tags: ["frontend", "API"],
    tools: ["HTML", "CSS", "JavaScript"],
    views: {
      sourceCode: "https://github.com/abdullah-arshad78/meal-finder",
      liveSite: "https://abdullah-arshad78.github.io/meal-finder/",
    },
    desktopOnly: true,
  },
  {
    id: "p13",
    name: "Breakout Game",
    image: breakoutGameImg,
    tags: ["frontend", "game"],
    tools: ["CSS", "JavaScript", "Canva Api"],
    views: {
      sourceCode: "https://github.com/abdullah-arshad78/breakout-game",
      liveSite: "https://abdullah-arshad78.github.io/breakout-game/",
    },
    desktopOnly: true,
  },
  {
    id: "p14",
    name: "Relaxer App",
    image: relaxerImg,
    tags: ["frontend", "breathing"],
    tools: ["HTML", "CSS", "JavaScript"],
    views: {
      sourceCode: "https://github.com/abdullah-arshad78/relaxer-app",
      liveSite: "https://abdullah-arshad78.github.io/relaxer-app/",
    },
    desktopOnly: true,
  },
  {
    id: "p15",
    name: "Infinite Scroll",
    image: infiniteScrollImg,
    tags: ["frontend", "scroll"],
    tools: ["HTML", "CSS", "JavaScript"],
    views: {
      sourceCode: "https://github.com/abdullah-arshad78/infinite-scroll",
      liveSite: "https://abdullah-arshad78.github.io/infinite-scroll/",
    },
    desktopOnly: true,
  },
];

export default projectsContent;
