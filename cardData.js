const abstractImages = [
  '/images/abstract1.jpg',
  '/images/abstract2.jpg',
  '/images/abstract3.jpg',
  '/images/abstract4.jpg',
  '/images/abstract5.jpg',
  '/images/abstract6.jpg',
  '/images/abstract7.jpg',
  '/images/abstract8.jpg',
  '/images/abstract9.jpg'
];

const animalImages = {
  cat: '/images/cat.jpg',
  dog: '/images/dog.jpg',
  rabbit: '/images/rabbit.jpg',
  owl: '/images/owl.jpg',
  penguin: '/images/penguin.jpg'
};

const animals = ['cat', 'dog', 'rabbit', 'owl', 'penguin'];

function createAbstractImage(imagePath) {
  return `
    <img src="${imagePath}" 
         alt="abstract design" 
         style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;"
         onerror="this.src='/images/placeholder.jpg'"
    />
  `;
}

function createAnimalImage(type) {
  return `
    <img src="${animalImages[type]}" 
         alt="${type}" 
         style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;"
         onerror="this.src='/images/placeholder.jpg'"
    />
  `;
}

export function generateCards() {
  return abstractImages.map((abstractPath, index) => ({
    frontSvg: createAbstractImage(abstractPath),
    backContent: createAnimalImage(animals[index % animals.length])
  }));
}