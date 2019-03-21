const products = [
  {
    title: 'product1',
    description: 'this is a a cool product',
    imgURL: 'https://picsum.photos/100/100/?random',
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
    imgURL: 'https://picsum.photos/100/100/?random',
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
    imgURL: 'https://picsum.photos/100/100/?random',
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
    imgURL: 'https://picsum.photos/100/100/?random',
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
    imgURL: 'https://picsum.photos/100/100/?random',
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
    domString += `<div class="col-4 product">`
    
    
    domString += `<div class="card">`
    domString += `  <div class="card-header">${product.title}</div>`
    domString += `  <img src=${product.imgURL} class="card-img-top" alt="...">`
    domString += `  <div class="card-body">`
    domString += `    <p class="card-text">${product.description}</p>`
    domString += `    <p class="card-text">${product.size}</p>`
    domString += `  </div>`
    domString += `</div>`
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
