const fs = require('fs');
const path = require('path');

const packagesPath = path.join(__dirname, 'src', 'data', 'packages.json');
let data = JSON.parse(fs.readFileSync(packagesPath, 'utf8'));

data = data.map(pkg => {
  const title = pkg.title.toLowerCase();
  let imagePath = '/images/packages/spiritual.png'; // default fallback
  
  if (title.includes('kerala')) {
    imagePath = '/images/packages/kerala.png';
  } else if (title.includes('singapore')) {
    imagePath = '/images/packages/cityscape.png';
  } else if (title.includes('sri lanka')) {
    imagePath = '/images/packages/heritage.png';
  } else if (title.includes('andaman') || title.includes('lakshadweep') || title.includes('vietnam') || title.includes('thailand') || title.includes('pattaya') || title.includes('indonesia')) {
    imagePath = '/images/packages/beaches.png';
  } else if (title.includes('kathmandu') || title.includes('kashmir') || title.includes('uttarakhand') || title.includes('shimla') || title.includes('manali') || title.includes('nepal') || title.includes('bhutan') || title.includes('himalaya') || title.includes('sikkim') || title.includes('kumaon') || title.includes('garhwal') || title.includes('khangchenzongha')) {
    imagePath = '/images/packages/himalayas.png';
  } else if (title.includes('dwarka') || title.includes('somnath') || title.includes('varanasi') || title.includes('prayagraj') || title.includes('ayodhya') || title.includes('jyotirlinga') || title.includes('maheshwar') || title.includes('spiritual') || title.includes('dham') || title.includes('kedarnath') || title.includes('badrinath')) {
    imagePath = '/images/packages/spiritual.png';
  }

  return { ...pkg, image: imagePath };
});

fs.writeFileSync(packagesPath, JSON.stringify(data, null, 2));
console.log('Successfully updated packages.json with new images.');
