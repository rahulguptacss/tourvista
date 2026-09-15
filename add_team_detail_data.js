const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'data', 'data.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Add TeamDetailHero and TeamDetail to sections
data.sections.TeamDetailHero = {
  "variants": {
    "variant-1": {
      "title": "Team Detail",
      "backgroundImage": "/breadcrumb/inner-banner.jpg"
    }
  }
};

data.sections.TeamDetail = {
  "variants": {
    "variant-1": {
      "member": {
        "name": "Malissa Fierro",
        "role": "Tourist Guide",
        "phone": "+2 123 654 7898",
        "email": "info@example.com",
        "speciality": "Tour Guide",
        "experience": "15 Years",
        "university": "Oxford University",
        "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
        "socials": [
          { "platform": "facebook", "url": "#", "icon": "Facebook" },
          { "platform": "twitter", "url": "#", "icon": "Twitter" },
          { "platform": "instagram", "url": "#", "icon": "Instagram" },
          { "platform": "linkedin", "url": "#", "icon": "Linkedin" },
          { "platform": "youtube", "url": "#", "icon": "Youtube" }
        ]
      },
      "biography": {
        "title": "Biography",
        "paragraphs": [
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
          "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
          "Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        ],
        "image": "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=900&q=80"
      }
    }
  }
};

data.pages.team_detail = {
  "components": [
    { "key": "TeamDetailHero", "component": "variant-1" },
    { "key": "TeamDetail", "component": "variant-1" },
    { "key": "CTABanner", "component": "variant-1" },
    { "key": "CarAnimation", "component": "variant-1" }
  ]
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Added Team Detail data');
