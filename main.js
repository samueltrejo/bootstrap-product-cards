const products = [
  {
    title: 'product1',
    description: 'this is a a cool product',
    imgURL: 'https://picsum.photos/200/300/?random',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    availability: '04/01/2016',
  },
  {
    title: 'product2',
    description: 'this is a a cool product',
    imgURL: 'https://picsum.photos/200/300/?random',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    availability: '04/01/2016',
  },
  {
    title: 'product3',
    description: 'this is a a cool product',
    imgURL: 'https://picsum.photos/200/300/?random',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    availability: '04/01/2016',
  },
  {
    title: 'product4',
    description: 'this is a a cool product',
    imgURL: 'https://picsum.photos/200/300/?random',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    availability: '04/01/2016',
  },
  {
    title: 'product5',
    description: 'this is a a cool product',
    imgURL: 'https://picsum.photos/200/300/?random',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    availability: '04/01/2016',
  },
]


const domStringBuilder = () => {
  let domString = '';
  products.forEach((product) => {
    domString += `<div class="product">`
    domString += `<h2>${product.title}</h2>`
    // domString += `<div>${product.description}</div>`
    // domString += `<img src=${product.imgURL}>`
    // domString += `<div>${product.size}</div>`
    // domString += `<div>${product.weight}</div>`
    // domString += `<div>${product.availability}</div>`
    // domString += `<div>${product.price1}</div>`
    // domString += `<div>${product.price2}</div>`
    // domString += `<div>${product.price3}</div>`
    domString += `</div>`
  })
  printToDom('products-container', domString);
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const init = () => {
  domStringBuilder();
};

init();
