const fs = require('fs');
const path = require('path');

const packagesPath = path.join(__dirname, 'src', 'data', 'packages.json');
let data = JSON.parse(fs.readFileSync(packagesPath, 'utf8'));

data = data.map((pkg, index) => {
  let imagePath = '';
  
  if (index < 8) {
    // We generated 8 custom AI images
    imagePath = `/images/packages/pkg${index + 1}.png`;
  } else {
    // For the remaining 40, we use distinct Unsplash/Picsum placeholders so they are all separate
    // Using a seed ensures they are always the same image for the same package, but unique across packages
    imagePath = `https://picsum.photos/seed/travelpkg${index}/800/600`;
  }

  return { ...pkg, image: imagePath };
});

fs.writeFileSync(packagesPath, JSON.stringify(data, null, 2));
console.log('Successfully updated packages.json with 48 distinct images.');
