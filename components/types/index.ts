export interface LinkItem {
  label: string;
  href: string;
}

export interface NavLink extends LinkItem {
  hasDropdown?: boolean;
  dropdown?: LinkItem[];
}

export interface HeaderButton {
  label: string;
  href: string;
}

export interface HeaderData {
  logo: string;
  links: NavLink[];
  button?: HeaderButton;
  logoImage?: string;
}

export interface TopbarSocial {
  platform: string;
  href: string;
}

export interface TopbarData {
  email: string;
  phone: string;
  socials: TopbarSocial[];
}

export interface HeroData {
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  description: string;
  backgroundImage: string;
  button1?: string;
  button2?: string;
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
  description?: string;
}

export interface DestinationsData {
  subtitle: string;
  title: string;
  description: string;
  items: DestinationItem[];
}

export interface DestinationsPageData {
  pageSize: number;
  items: DestinationItem[];
}

export interface GalleryItem {
  id: number;
  image: string;
  title?: string;
}

export interface GalleryPageData {
  pageSize: number;
  items: GalleryItem[];
}


export interface OurTeamMember {
  id?: string;
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
  category?: string;
  categoryId?: string;
}

export interface PackageFilter {
  id: string;
  label: string;
  icon: string;
}

export interface PackagesData {
  subtitle: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  items: PackageItem[];
}

export interface PackagesListData extends PackagesData {
  filters: PackageFilter[];
}

export interface PackageTab {
  id: string;
  label: string;
}

export interface PackageTerm {
  title: string;
  text: string;
}

export interface PackageDelight {
  title: string;
  text?: string;
}

export interface PackageItineraryDay {
  day: string;
  title: string;
  points: string[];
  images?: string[];
}

export interface PackageIncludeItem {
  icon: string;
  label: string;
}

export interface PackageDetailLabels {
  overviewTitle: string;
  delightsTitle: string;
  itineraryTitle: string;
  itineraryDayPrefix: string;
  itineraryDayBadge: string;
  inclusionTitle: string;
  exclusionTitle: string;
  termsTitle: string;
  startingFrom: string;
  perPerson: string;
  emiPrefix: string;
  seeOption: string;
  enquireNow: string;
  enquireLink: string;
  durationLabel: string;
  placesLabel: string;
  packageIncludes: string;
}

export interface PackageDetailExtra {
  headline: string;
  ratingLabel?: string;
  nightsLine?: string;
  heroImage?: string;
  overviewText?: string;
  subtitle?: string;
  type?: string;
  durationLabel?: string;
  durationFull?: string;
  oldPrice?: number;
  emiPrice?: number;
  discount?: string;
  gallery?: string[];
  overview?: string[];
  delights?: PackageDelight[];
  itinerary?: PackageItineraryDay[];
}

export interface PackageDetailSectionData {
  tabs: PackageTab[];
  bookText?: string;
  fromLabel?: string;
  labels: PackageDetailLabels;
  includes: PackageIncludeItem[];
  inclusions: string[];
  exclusions: string[];
  terms: PackageTerm[];
  details: Record<string, PackageDetailExtra>;
}

export interface PackageDetailViewData extends PackageItem, PackageDetailExtra {
  tabs: PackageTab[];
  bookText?: string;
  fromLabel?: string;
  labels: PackageDetailLabels;
  includes: PackageIncludeItem[];
  inclusions: string[];
  exclusions: string[];
  terms: PackageTerm[];
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
  avatars?: string[];
}

export interface TestimonialItem {
  title: string;
  text: string;
  image: string;
  travelersCount?: string;
  avatars?: string[];
}

export interface TestimonialsData {
  subtitle: string;
  title?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  description?: string;
  limit?: number;
  layout?: "accordion" | "grid";
  review?: TestimonialReview;
  images?: string[];
  items?: TestimonialItem[];
}

export interface BlogItem {
  id?: number;
  title: string;
  image: string;
  date: string;
  type?: "small" | "medium" | "large";
  author?: string;
  category?: string;
}

export interface TravelBlogData {
  subtitle: string;
  title: string;
  blogs: BlogItem[];
}

export interface BlogDestinationItem {
  name: string;
  listings: string;
}

export interface BlogPageData {
  subtitle: string;
  title: string;
  pageSize: number;
  posts: BlogItem[];
  recentTitle: string;
  recentPosts: BlogItem[];
  destinationsTitle: string;
  destinations: BlogDestinationItem[];
  galleryTitle: string;
  galleries: string[][];
}

export interface BlogDetailContent {
  intro: string;
  quote: string;
  quoteAuthor: string;
  afterQuote: string;
  secondImage: string;
  contentImages?: string[];
  secondTitle: string;
  secondText: string;
  precautionsTitle: string;
  precautions: string[];
}

export interface BlogDetailViewData extends BlogItem, BlogDetailContent {
  recentTitle: string;
  recentPosts: BlogItem[];
  destinationsTitle: string;
  destinations: BlogDestinationItem[];
  galleryTitle: string;
  galleries: string[][];
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
  stats?: StatItem[];
}

export interface StatsData {
  items: StatItem[];
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

export interface PackagesHeroData {
  title: string;
  backgroundImage: string;
  showBreadcrumb?: boolean;
}

export interface ServicesHeroData {
  title: string;
  backgroundImage: string;
}

export interface ServiceItem {
  id?: string;
  tagline: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  link: string;
  imagePosition: "left" | "right";
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceDetailData {
  hero: PackagesHeroData;
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  enquireLink: string;
  mainFeatures: ServiceFeature[];
  whyChooseUs: {
    title: string;
    description: string;
    features: ServiceFeature[];
  };
  experienceComfort: {
    title: string;
    description: string;
    image: string;
    checklist: string[];
  };
  sidebar: {
    image: string;
    highlights: string[];
    needHelp: {
      phone: string;
      email: string;
      liveChat: string;
    };
  };
  cta: CTABannerData;
}

export interface MissionBlock {
  title: string;
  description: string;
  image: string;
}

export interface MissionVisionData {
  subtitle: string;
  titlePrefix: string;
  titleSuffix: string;
  description: string;
  mission: MissionBlock;
  vision: MissionBlock;
}

export interface AwardItem {
  title: string;
  description: string;
  icon: string;
}

export interface AwardsRecognitionData {
  subtitle: string;
  title: string;
  trophyImage: string;
  awardsList: AwardItem[];
}

export interface WhyChooseUsV2Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseUsV2Data {
  tagline: string;
  title: string;
  description: string;
  features: WhyChooseUsV2Feature[];
  buttonText: string;
  buttonLink: string;
  happyTravelers: {
    count: string;
    text: string;
    avatars: string[];
  };
  images: {
    main: string;
    topRight: string;
    bottomLeft: string;
    bottomRight: string;
  };
}

export interface ExploreCard {
  title: string;
  icon: string;
}

export interface ExploreBannerData {
  backgroundImage: string;
  title: string;
  sealText: string;
  cards: ExploreCard[];
}

export interface TeamSocial {
  platform: string;
  url: string;
  icon: string;
}

export interface TeamBiography {
  title: string;
  paragraphs: string[];
  image: string;
}

export interface TeamMemberDetail {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  speciality: string;
  experience: string;
  university: string;
  image: string;
  socials: TeamSocial[];
  biography: TeamBiography;
}

export interface TeamDetailSectionData {
  members: TeamMemberDetail[];
}

export interface TeamDetailViewData {
  member: {
    name: string;
    role: string;
    phone: string;
    email: string;
    speciality: string;
    experience: string;
    university: string;
    image: string;
    socials: TeamSocial[];
  };
  biography: TeamBiography;
}


export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqStat {
  value: string;
  label: string;
  icon: string;
}

export interface FaqPageData {
  subtitle: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  image: string;
  items: FaqItem[];
  stats: FaqStat[];
  helpTitle: string;
  helpText: string;
  helpButton: string;
  helpLink: string;
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
  ServiceDetail: { variants: { "variant-1": ServiceDetailData } };
  PackagesHero: { variants: { "variant-1": PackagesHeroData } };
  PackagesList: { variants: { "variant-1": PackagesListData } };
  PackageDetail: { variants: { "variant-1": PackageDetailSectionData } };
  PackageDetailHero: { variants: { "variant-1": PackagesHeroData } };
  AboutHero: { variants: { "variant-1": AboutHeroData } };
  WhyChooseUs: { variants: { "variant-1": WhyChooseUsData } };
  WhyChooseUsHero: { variants: { "variant-1": PackagesHeroData } };
  WhyChooseUsV2: { variants: { "variant-1": WhyChooseUsV2Data } };
  ExploreBanner: { variants: { "variant-1": ExploreBannerData } };
  CTABanner: { variants: { "variant-1": CTABannerData } };
  Destinations: { variants: { "variant-1": DestinationsData } };
  DestinationsHero: { variants: { "variant-1": PackagesHeroData } };
  DestinationsPage: { variants: { "variant-1": DestinationsPageData } };
  GalleryHero: { variants: { "variant-1": PackagesHeroData } };
  GalleryPage: { variants: { "variant-1": GalleryPageData } };
  Packages: { variants: { "variant-1": PackagesData } };
  Recommendation: { variants: { "variant-1": RecommendationData } };
  Steps: { variants: { "variant-1": StepsData } };
  Testimonials: { variants: { "variant-1": TestimonialsData } };
  TestimonialsHero: { variants: { "variant-1": PackagesHeroData } };
  TestimonialsPage: { variants: { "variant-1": TestimonialsData } };
  FaqHero: { variants: { "variant-1": PackagesHeroData } };
  FaqPage: { variants: { "variant-1": FaqPageData } };
  TravelExperience: { variants: { "variant-1": TravelBlogData } };
  BlogHero: { variants: { "variant-1": PackagesHeroData } };
  BlogPage: { variants: { "variant-1": BlogPageData } };
  BlogDetailHero: { variants: { "variant-1": PackagesHeroData } };
  BlogDetail: { variants: { "variant-1": BlogDetailContent } };
  VideoBanner: { variants: { "variant-1": VideoBannerData } };
  Stats: { variants: { "variant-1": StatsData } };
  MissionVisionHero: { variants: { "variant-1": PackagesHeroData } };
  MissionVision: { variants: { "variant-1": MissionVisionData } };
  AwardsHero: { variants: { "variant-1": PackagesHeroData } };
  AwardsRecognition: { variants: { "variant-1": AwardsRecognitionData } };
  OurTeamHero: { variants: { "variant-1": PackagesHeroData } };
  OurTeam: { variants: { "variant-1": OurTeamData } };
  TeamDetailHero: { variants: { "variant-1": PackagesHeroData } };
  TeamDetail: { variants: { "variant-1": TeamDetailSectionData } };
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
  about?: PageData;
  team_detail?: PageData;
  "mission-vision"?: PageData;
  awards?: PageData;
  "why-choose-us"?: PageData;
  "our-team"?: PageData;
}

export interface CommonData {
  Header: HeaderData;
  Footer: FooterData;
  Topbar: TopbarData;
}

export interface FooterLayoutData {
  footer: FooterData;
  header: HeaderData;
}

export interface AppData {
  common: CommonData;
  pages: PagesData;
  sections: SectionsData;
}
