const frontImage = '/images/abstract-front.jpg'; 
const backImages = [
  '/images/back1.jpg',
  '/images/back2.jpg',
  '/images/back3.jpg',
  '/images/back4.jpg',
  '/images/back5.jpg',
  '/images/back6.jpg',
  '/images/back7.jpg',
  '/images/back8.jpg',
  '/images/back9.jpg',
  '/images/back10.jpg'
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