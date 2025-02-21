const frontImage = '/images/front.jpg'; 
const backImages = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpg',
  '/images/9.jpg',
  '/images/10.jpg'
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
