const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'data', 'data.json');
let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// 1. Add id to OurTeam members
const ourTeamMembers = data.sections.OurTeam.variants['variant-1'].members;
ourTeamMembers.forEach((member, index) => {
  member.id = `member-${index + 1}`;
});

// 2. Create a members array in TeamDetail based on OurTeam members
const baseDetail = data.sections.TeamDetail.variants['variant-1'].member;
const biography = data.sections.TeamDetail.variants['variant-1'].biography;

const teamDetails = ourTeamMembers.map((member) => {
  return {
    id: member.id,
    name: member.name,
    role: member.role,
    phone: "+2 123 654 7898",
    email: "info@example.com",
    speciality: "Tour Guide",
    experience: "15 Years",
    university: "Oxford University",
    image: member.image, // use their specific image
    socials: baseDetail.socials,
    biography: biography
  };
});

// Update TeamDetail data
data.sections.TeamDetail.variants['variant-1'].members = teamDetails;
// Remove the old single member and biography
delete data.sections.TeamDetail.variants['variant-1'].member;
delete data.sections.TeamDetail.variants['variant-1'].biography;

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('data.json updated successfully');
