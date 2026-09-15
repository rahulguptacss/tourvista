const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'data', 'data.json');
let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Add services page
data.pages.services = {
  components: [
    { key: "ServicesHero", component: "variant-1" },
    { key: "ServicesList", component: "variant-1" },
    { key: "CarAnimation", component: "variant-1" }
  ]
};

// Add ServicesHero section
data.sections.ServicesHero = {
  variants: {
    "variant-1": {
      title: "Our Services",
      backgroundImage: "/breadcrumb/inner-banner.jpg"
    }
  }
};

// Add ServicesList section
data.sections.ServicesList = {
  variants: {
    "variant-1": {
      tagline: "Our Services",
      title: "Explore Our Wide Range of Travel Services",
      description: "From thrilling adventures to peaceful getaways, we provide carefully crafted travel experiences to make every journey unforgettable.",
      services: [
        {
          tagline: "BEST HOTELS",
          title: "Comfortable Stays, Memorable Experiences",
          description: "We partner with the best hotels around the world to ensure you get comfortable, clean, and premium stays at the best prices.",
          icon: "Building2",
          image: "https://images.unsplash.com/photo-1542314831-c6a4d27ce6a2?auto=format&fit=crop&q=80&w=1200",
          link: "/services/hotels",
          imagePosition: "right"
        },
        {
          tagline: "TRAVEL INSURANCE",
          title: "Travel with Confidence & Peace of Mind",
          description: "Our comprehensive travel insurance plans protect you against unexpected events, so you can travel worry-free anywhere in the world.",
          icon: "ShieldCheck",
          image: "https://images.unsplash.com/photo-1512813111408-36af5b117bc5?auto=format&fit=crop&q=80&w=1200",
          link: "/services/insurance",
          imagePosition: "left"
        },
        {
          tagline: "TOUR PACKAGES",
          title: "Handpicked Packages for Every Traveler",
          description: "From romantic getaways to family vacations and adventure tours, we have the perfect packages suited to your style and budget.",
          icon: "PlaneTakeoff",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
          link: "/packages",
          imagePosition: "right"
        },
        {
          tagline: "AIRPORT TRANSFERS",
          title: "Smooth Transfers, Hassle-Free Journeys",
          description: "Enjoy comfortable and on-time airport pickups and drop-offs with our reliable transfer services available 24/7.",
          icon: "Car",
          image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200",
          link: "/services/transfers",
          imagePosition: "left"
        }
      ]
    }
  }
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('data.json updated successfully for services page');
