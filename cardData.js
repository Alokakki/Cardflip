const frontImage = '/images/front.jpeg'; 
const backImages = [
  '/images/1.jpeg',
  '/images/2.jpeg',
  '/images/3.jpeg',
  '/images/4.jpeg',
  '/images/5.jpeg',
  '/images/6.jpeg',
  '/images/7.jpeg',
  '/images/8.jpeg',
  '/images/9.jpeg',
  '/images/10.jpeg'
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
