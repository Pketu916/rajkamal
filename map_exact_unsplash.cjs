const fs = require('fs');
const path = require('path');

const packagesPath = path.join(__dirname, 'src', 'data', 'packages.json');
let data = JSON.parse(fs.readFileSync(packagesPath, 'utf8'));

// High quality travel photo IDs mapping for packages 9-48
const unsplashIds = [
  "photo-1544735716-392fe2489ffa", // 9. Spiritual Varanasi Prayagraj and Ayodhya
  "photo-1590050752117-238cb061295a", // 10. Feel Spiritual in Uttar Pradesh
  "photo-1533854775446-95c4709de4e9", // 11. Delight Kathmandu and Pokhara
  "photo-1605649487212-47bdab064df7", // 12. Charming Kumaon
  "photo-1568454537842-d933259bb258", // 13. Exotic Shimla Manali
  "photo-1507525428034-b723cf961d3e", // 14. Andaman Fun filled
  "photo-1593693397690-362cb9666fc2", // 15. Discover Kerala
  "photo-1584346133934-a3afd2a38c57", // 16. Splendour Himalaya
  "photo-1626082927389-6cd097cdc6ec", // 17. Best Of Uttarakhand
  "photo-1533105079780-92b9be482077", // 18. Himalayan Golden Triangle
  "photo-1612438214708-f428a707dd4e", // 19. EXOTIC VARANASI
  "photo-1526712376127-6f81e72e1e07", // 20. Cultural and Wildlife Wonders of Nepal
  "photo-1500530855697-b586d89ba3ee", // 21. Andamans Iconic Nature
  "photo-1533854775446-95c4709de4e9", // 22. Nepal Heritage, Wildlife and Spiritual Journey
  "photo-1506929562872-bb421503ef21", // 23. Lakshadweep Island
  "photo-1584346133934-a3afd2a38c57", // 24. North-East Beauty
  "photo-1626082927389-6cd097cdc6ec", // 25. Eastern Himalayan Jewels
  "photo-1605649487212-47bdab064df7", // 26. Divine Do Dham Yatra (Without Helicopter)
  "photo-1533105079780-92b9be482077", // 27. Sweet Memory of Khangchenzongha
  "photo-1588598126707-160b73c4ec5f", // 28. Glimpses Of Garhwal
  "photo-1584346133934-a3afd2a38c57", // 29. Breathless Sikkim
  "photo-1588747447475-7b561c28c8ef", // 30. Kedarnath and Badrinath Yatra
  "photo-1568454537842-d933259bb258", // 31. Holy Char Dham Yatra without Helicopter
  "photo-1588747447475-7b561c28c8ef", // 32. Spritual Kedarnath by Helicopter
  "photo-1605649487212-47bdab064df7", // 33. Wings of Devotion Char Dham Helicopter Tour
  "photo-1528127269322-539801943592", // 34. Wonders of Vietnam
  "photo-1509060464153-4466739f7e0e", // 35. Vintage Vietnam
  "photo-1476514525535-07fb3b4ae5f1", // 36. Enigmatic Vietnam
  "photo-1537996194471-e657df975ab4", // 37. Blissful Indonesia
  "photo-1508009603885-50cf7c579365", // 38. Delight Thailand
  "photo-1528181304800-2f531b7245f3", // 39. Enticing Pattaya
  "photo-1552465011-b4e21bf6e79a", // 40. Majestic Thailand
  "photo-1528181304800-2f531b7245f3", // 41. Best of Thailand
  "photo-1525625293386-3f8f99389edd", // 42. Singapore Delight
  "photo-1565967511849-76a60a516170", // 43. Discover Singapore
  "photo-1586861635167-e5223aadc9fe", // 44. Chiling Sri Lanka
  "photo-1546708973-24151a61c314", // 45. Mystic Sri Lanka
  "photo-1586861635167-e5223aadc9fe", // 46. Delight Sri Lanka
  "photo-1546708973-24151a61c314", // 47. Majestic Sri Lanka
  "photo-1490750967868-88aa4486c944"  // 48. Bhutan Nature Trails
];

data = data.map((pkg, index) => {
  let imagePath = '';
  
  if (index < 8) {
    // Keep the custom AI ones we generated
    imagePath = `/images/packages/pkg${index + 1}.png`;
  } else {
    // Replace Picsum placeholder with a highly relevant, real photographic Unsplash URL
    const id = unsplashIds[index - 8];
    imagePath = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;
  }

  return { ...pkg, image: imagePath };
});

fs.writeFileSync(packagesPath, JSON.stringify(data, null, 2));
console.log('Successfully updated packages.json with proper stock images.');
