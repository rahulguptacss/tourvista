export interface LinkItem {
  label: string;
  href: string;
}

export interface HeaderData {
  logo: string;
  links: LinkItem[];
}

export interface HeroData {
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  description: string;
  backgroundImage: string;
}

export interface AboutHeroData {
  title: string;
  backgroundImage: string;
}

export interface WhyChooseUsData {
  title: string;
  reasons: string[];
  contactNumber: string;
  buttonHref?: string;
  button?: string;
  callLabel?: string;
}

export interface CTABannerData {
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  titleHighlight?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage: string;
}

export interface DestinationItem {
  id: number;
  title: string;
  image: string;
  badge?: string;
  flag?: string;
  country?: string;
  rating?: string;
  reviews?: string;
  description: string;
}

export interface DestinationsData {
  subtitle: string;
  title: string;
  description: string;
  items: DestinationItem[];
}


export interface OurTeamMember {
  name: string;
  role: string;
  image: string;
}

export interface OurTeamData {
  tagline: string;
  title: string;
  members: OurTeamMember[];
}

export interface PackageItem {
  id: number;
  title: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  reviews: string;
  days: string;
  people: string;
  description?: string;
}

export interface PackagesData {
  subtitle: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  items: PackageItem[];
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface RecommendationData {
  subtitle: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  aboutDescriptions?: string[];
  yearsOfExperience: string;
  features: FeatureItem[];
  images: string[];
  happyCustomers?: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface StepsData {
  titlePrefix: string;
  titleSuffix: string;
  discount: string;
  mainImage: string;
  smallImage: string;
  items: StepItem[];
}

export interface TestimonialReview {
  title: string;
  text: string;
  travelersCount: string;
}

export interface TestimonialsData {
  subtitle: string;
  title: string;
  review: TestimonialReview;
  images: string[];
}

export interface BlogItem {
  title: string;
  image: string;
  date: string;
  type: 'small' | 'medium' | 'large';
  author?: string;
  category?: string;
}

export interface TravelBlogData {
  subtitle: string;
  title: string;
  blogs: BlogItem[];
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export interface VideoBannerData {
  titleLine1: string;
  titleHighlight: string;
  titleLine2: string;
  backgroundImage: string;
  stats: StatItem[];
}

export interface ContactData {
  phones: string[];
  emails: string[];
  address: string[];
}

export interface FooterData {
  description: string;
  quickLinks: LinkItem[];
  categories: LinkItem[];
  contact: ContactData;
}

export interface SiteData {
  header: HeaderData;
  hero: HeroData;
  whyChooseUs: WhyChooseUsData;
  ctaBanner: CTABannerData;
  destinations: DestinationsData;
  packages: PackagesData;
  recommendation: RecommendationData;
  steps: StepsData;
  testimonials: TestimonialsData;
  travelBlog: TravelBlogData;
  videoBanner: VideoBannerData;
  footer: FooterData;
}

export interface ServicesHeroData {
  title: string;
  backgroundImage: string;
}

export interface ServiceItem {
  tagline: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  link: string;
  imagePosition: 'left' | 'right';
}

export interface ServicesListData {
  tagline: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

export interface SectionsData {
  Hero: { variants: { "variant-1": HeroData } };
  ServicesHero: { variants: { "variant-1": ServicesHeroData } };
  ServicesList: { variants: { "variant-1": ServicesListData } };
  AboutHero: { variants: { "variant-1": AboutHeroData } };
  WhyChooseUs: { variants: { "variant-1": WhyChooseUsData } };
  CTABanner: { variants: { "variant-1": CTABannerData } };
  Destinations: { variants: { "variant-1": DestinationsData } };
  Packages: { variants: { "variant-1": PackagesData } };
  Recommendation: { variants: { "variant-1": RecommendationData } };
  Steps: { variants: { "variant-1": StepsData } };
  Testimonials: { variants: { "variant-1": TestimonialsData } };
  TravelExperience: { variants: { "variant-1": TravelBlogData } };
  VideoBanner: { variants: { "variant-1": VideoBannerData } };
  Stats: { variants: { "variant-1": any } };
  [key: string]: any;
}

export interface PageComponent {
  key: string;
  component: string;
}

export interface PageData {
  components: PageComponent[];
}

export interface PagesData {
  home: PageData;
  about: PageData;
  ourTeam?: {
    breadcrumb: {
      title: string;
      backgroundImage: string;
    };
    ourTeam: OurTeamData;
  };
  [key: string]: any;
}

export interface CommonData {
  Header: HeaderData;
  Footer: FooterData;
  Topbar: any;
}

export interface AppData {
  common: CommonData;
  pages: PagesData;
  sections: SectionsData;
}
