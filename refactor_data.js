const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'data', 'data.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Move why_choose_us data
if (data.pages.why_choose_us.Banner) {
  data.sections.WhyChooseUsHero = { variants: { "variant-1": data.pages.why_choose_us.Banner } };
}
if (data.pages.why_choose_us.WhyChooseUsV2) {
  data.sections.WhyChooseUsV2 = { variants: { "variant-1": data.pages.why_choose_us.WhyChooseUsV2 } };
}
if (data.pages.why_choose_us.ExploreBanner) {
  data.sections.ExploreBanner = { variants: { "variant-1": data.pages.why_choose_us.ExploreBanner } };
}

// Move ourTeam data
if (data.pages.ourTeam.breadcrumb) {
  data.sections.OurTeamHero = { variants: { "variant-1": data.pages.ourTeam.breadcrumb } };
}
if (data.pages.ourTeam.ourTeam) {
  data.sections.OurTeam = { variants: { "variant-1": data.pages.ourTeam.ourTeam } };
}

// Clean up pages
data.pages.why_choose_us = {};
data.pages.ourTeam = {};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Refactoring complete');
