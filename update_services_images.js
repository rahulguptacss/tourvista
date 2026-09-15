const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'data', 'data.json');
let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Update services page images
if (data.sections.ServicesList && data.sections.ServicesList.variants["variant-1"]) {
  const services = data.sections.ServicesList.variants["variant-1"].services;
  if (services && services.length >= 4) {
    services[0].image = "/service/1.png";
    services[1].image = "/service/2.png";
    services[2].image = "/service/3.png";
    services[3].image = "/service/4.png";
  }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('data.json updated successfully for service images');
