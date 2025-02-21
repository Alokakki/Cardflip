const frontImage = 'Images/front.jpg'; 
const backImages = [
  'Images/1.jpeg',
  'Images/2.jpeg',
  'Images/3.jpeg',
  'Images/4.jpeg',
  'Images/5.jpeg',
  'Images/6.jpeg',
  'Images/7.jpeg',
  'Images/8.jpeg',
  'Images/9.jpeg',
  'Images/10.jpeg'
];

function createImage(imagePath, alt = 'card image') {
  return `
    <img src="${imagePath}" 
         alt="${alt}" 
         style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;"
         onerror="this.src='/images/placeholder.jpg'"
    />
  `;
}

export function generateCards() {
  return backImages.map(backImagePath => ({
    frontSvg: createImage(frontImage, 'front design'),
    backContent: createImage(backImagePath, 'back image')
  }));
}
