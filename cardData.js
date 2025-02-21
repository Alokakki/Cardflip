const abstractImages = [
  '/image/front.jpg',
  '/images/abstract2.jpg',
  

const animalImages = {
  one: '/image/1.jpg',
  two: '/image/2.jpg',
  rabbit: '/images/rabbit.jpg',
  owl: '/images/owl.jpg',
  penguin: '/images/penguin.jpg'
};

const animals = ['one', 'two', 'rabbit', 'owl', 'penguin'];

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
