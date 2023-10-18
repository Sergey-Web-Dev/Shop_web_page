const lists = `<ul
id="new-lists"
class="lists d-flex justify-content-center align-items-center flex-wrap gap-4 pt-5 ps-0"></ul>`


const womenCard1 = {
    tag: `<li class="list position-relative card-product">
    <img src="../img/product-1.png" alt="" class="card-1" />
    <div
      class="heart position-absolute bg-white px-2 pt-2 pb-0 rounded-circle top-5 end-5"
    >
      <span class="material-symbols-outlined"> favorite </span>
    </div>
    <div
      class="wrapper-nav d-flex justify-content-between align-items-center"
    >
      <div class="wrapper-naming mt-4">
        <h3 class="causten600 fs-16 text-card-naming">
          Black Sweatshirt with ....
        </h3>
        <p class="causten500 fs-14 text-card-naming-2">
          Jhanvi’s Brand
        </p>
      </div>
      <div
        class="causten700 fs-14 text-gray-card bg-nav-item py-2 px-3 rounded-3"
      >
        $123.00
      </div>
    </div>
  </li>`,
  price: 123,
  color: 'black',
  size: 'XS',
};

const womenCard2 = {
    tag: `<li class="list position-relative card-product">
    <img src="../img/product-6.png" alt="" class="card-1" />
    <div
      class="heart position-absolute bg-white px-2 pt-2 pb-0 rounded-circle top-5 end-5"
    >
      <span class="material-symbols-outlined"> favorite </span>
    </div>
    <div
      class="wrapper-nav d-flex justify-content-between align-items-center"
    >
      <div class="wrapper-naming mt-4">
        <h3 class="causten600 fs-16 text-card-naming">
          White T-shirt
        </h3>
        <p class="causten500 fs-14 text-card-naming-2">Helen’s  Brand</p>
      </div>
      <div
        class="causten700 fs-14 text-gray-card bg-nav-item py-2 px-3 rounded-3"
      >
        $11.00
      </div>
    </div>
  </li>`,
  price: 11,
  color: 'white',
  size: 'S',
};

const womenCard3 = {
    tag: `<li class="list position-relative card-product">
    <img src="../img/product-4.png" alt="" class="card-1" />
    <div
      class="heart position-absolute bg-white px-2 pt-2 pb-0 rounded-circle top-5 end-5"
    >
      <span class="material-symbols-outlined"> favorite </span>
    </div>
    <div
      class="wrapper-nav d-flex justify-content-between align-items-center"
    >
      <div class="wrapper-naming mt-4">
        <h3 class="causten600 fs-16 text-card-naming">Levender Hoodie with ....</h3>
        <p class="causten500 fs-14 text-card-naming-2">Nike’s  Brand</p>
      </div>
      <div
        class="causten700 fs-14 text-gray-card bg-nav-item py-2 px-3 rounded-3"
      >
        $119.00
      </div>
    </div>
  </li>`,
  price: 119,
  color: 'purple',
  size: 'M',
};

const womenCard4 = {
  tag: `<li class="list position-relative card-product">
  <img src="../img/product-7.png" alt="" class="card-1" />
  <div
    class="heart position-absolute bg-white px-2 pt-2 pb-0 rounded-circle top-5 end-5"
  >
    <span class="material-symbols-outlined"> favorite </span>
  </div>
  <div
    class="wrapper-nav d-flex justify-content-between align-items-center"
  >
    <div class="wrapper-naming mt-4">
      <h3 class="causten600 fs-16 text-card-naming">
        Leaves Pattern White...
      </h3>
      <p class="causten500 fs-14 text-card-naming-2">paypal’s  Brand</p>
    </div>
    <div
      class="causten700 fs-14 text-gray-card bg-nav-item py-2 px-3 rounded-3"
    >
      $77.00
    </div>
  </div>
</li>`,
price: 77,
color: 'white',
size: 'XXL',
};

const womenCard5 = {
  tag: `<li class="list position-relative card-product">
  <img src="../img/product-5.png" alt="" class="card-1" />
  <div
    class="heart position-absolute bg-white px-2 pt-2 pb-0 rounded-circle top-5 end-5"
  >
    <span class="material-symbols-outlined"> favorite </span>
  </div>
  <div
    class="wrapper-nav d-flex justify-content-between align-items-center"
  >
    <div class="wrapper-naming mt-4">
      <h3 class="causten600 fs-16 text-card-naming">
        White Graphic Crop Top
      </h3>
      <p class="causten500 fs-14 text-card-naming-2">woden’s  Brand</p>
    </div>
    <div
      class="causten700 fs-14 text-gray-card bg-nav-item py-2 px-3 rounded-3"
    >
      $29.00
    </div>
  </div>
</li>`,
price: 29,
color: 'white',
size: 'L',
};

const womenCard6 = {
  tag: `<li class="list position-relative card-product">
  <img src="../img/product-3.png" alt="" class="card-1" />
  <div
    class="heart position-absolute bg-white px-2 pt-2 pb-0 rounded-circle top-5 end-5"
  >
    <span class="material-symbols-outlined"> favorite </span>
  </div>
  <div
    class="wrapper-nav d-flex justify-content-between align-items-center"
  >
    <div class="wrapper-naming mt-4">
      <h3 class="causten600 fs-16 text-card-naming">
        Black Shorts
      </h3>
      <p class="causten500 fs-14 text-card-naming-2">MM’s  Brand</p>
    </div>
    <div
      class="causten700 fs-14 text-gray-card bg-nav-item py-2 px-3 rounded-3"
    >
      $37.00
    </div>
  </div>
</li>`,
price: 37,
color: 'black',
size: '3XL',
};

const womenCard7 = {
  tag: `<li class="list position-relative card-product">
  <img src="../img/product-8.png" alt="" class="card-1" />
  <div
    class="heart position-absolute bg-white px-2 pt-2 pb-0 rounded-circle top-5 end-5"
  >
    <span class="material-symbols-outlined"> favorite </span>
  </div>
  <div
    class="wrapper-nav d-flex justify-content-between align-items-center"
  >
    <div class="wrapper-naming mt-4">
      <h3 class="causten600 fs-16 text-card-naming">
        Barboreal Gray Sweats...
      </h3>
      <p class="causten500 fs-14 text-card-naming-2">Priya’s  Brand</p>
    </div>
    <div
      class="causten700 fs-14 text-gray-card bg-nav-item py-2 px-3 rounded-3"
    >
      $77.00
    </div>
  </div>
</li>`,
price: 77,
color: 'gray',
size: 'XL',
};

const womenCard8 = {
  tag: `<li class="list position-relative card-product">
  <img src="../img/product-9.png" alt="" class="card-1" />
  <div
    class="heart position-absolute bg-white px-2 pt-2 pb-0 rounded-circle top-5 end-5"
  >
    <span class="material-symbols-outlined"> favorite </span>
  </div>
  <div
    class="wrapper-nav d-flex justify-content-between align-items-center"
  >
    <div class="wrapper-naming mt-4">
      <h3 class="causten600 fs-16 text-card-naming">
        Yellow Sweatshirt
      </h3>
      <p class="causten500 fs-14 text-card-naming-2">woden’s  Brand</p>
    </div>
    <div
      class="causten700 fs-14 text-gray-card bg-nav-item py-2 px-3 rounded-3"
    >
      $29.00
    </div>
  </div>
</li>`,
price: 29,
color: 'yellow',
size: 'S',
};

const womenCard9 = {
  tag: `<li class="list position-relative card-product">
  <img src="../img/product-10.png" alt="" class="card-1" />
  <div
    class="heart position-absolute bg-white px-2 pt-2 pb-0 rounded-circle top-5 end-5"
  >
    <span class="material-symbols-outlined"> favorite </span>
  </div>
  <div
    class="wrapper-nav d-flex justify-content-between align-items-center"
  >
    <div class="wrapper-naming mt-4">
      <h3 class="causten600 fs-16 text-card-naming">
        Flower Pattern Black C...
      </h3>
      <p class="causten500 fs-14 text-card-naming-2">MM’s  Brand</p>
    </div>
    <div
      class="causten700 fs-14 text-gray-card bg-nav-item py-2 px-3 rounded-3"
    >
      $37.00
    </div>
  </div>
</li>`,
price: 37,
color: 'black',
size: 'XXS',
};

const womenCard10 = {
  tag: `<li class="list position-relative card-product">
  <img src="../img/product-11.png" alt="" class="card-1" />
  <div
    class="heart position-absolute bg-white px-2 pt-2 pb-0 rounded-circle top-5 end-5"
  >
    <span class="material-symbols-outlined"> favorite </span>
  </div>
  <div
    class="wrapper-nav d-flex justify-content-between align-items-center"
  >
    <div class="wrapper-naming mt-4">
      <h3 class="causten600 fs-16 text-card-naming">
        I Don’t Graphic T-shirt 
      </h3>
      <p class="causten500 fs-14 text-card-naming-2">Nisargi’s  Brand</p>
    </div>
    <div
      class="causten700 fs-14 text-gray-card bg-nav-item py-2 px-3 rounded-3"
    >
      $77.00
    </div>
  </div>
</li>`,
price: 77,
color: 'orange',
size: '4XL',
};

const womenCard11 = {
  tag: `<li class="list position-relative card-product">
  <img src="../img/product-12.png" alt="" class="card-1" />
  <div
    class="heart position-absolute bg-white px-2 pt-2 pb-0 rounded-circle top-5 end-5"
  >
    <span class="material-symbols-outlined"> favorite </span>
  </div>
  <div
    class="wrapper-nav d-flex justify-content-between align-items-center"
  >
    <div class="wrapper-naming mt-4">
      <h3 class="causten600 fs-16 text-card-naming">
        Blue Flower Print Crop ....
      </h3>
      <p class="causten500 fs-14 text-card-naming-2">Mellon’s  Brand</p>
    </div>
    <div
      class="causten700 fs-14 text-gray-card bg-nav-item py-2 px-3 rounded-3"
    >
      $29.00
    </div>
  </div>
</li>`,
price: 29,
color: 'blue',
size: 'M',
};

const womenCard12 = {
  tag: `<li class="list position-relative card-product">
  <img src="../img/product-2.png" alt="" class="card-1" />
  <div
    class="heart position-absolute bg-white px-2 pt-2 pb-0 rounded-circle top-5 end-5"
  >
    <span class="material-symbols-outlined"> favorite </span>
  </div>
  <div
    class="wrapper-nav d-flex justify-content-between align-items-center"
  >
    <div class="wrapper-naming mt-4">
      <h3 class="causten600 fs-16 text-card-naming">
        line Pattern Black H...
      </h3>
      <p class="causten500 fs-14 text-card-naming-2">AS’s  Brand</p>
    </div>
    <div
      class="causten700 fs-14 text-gray-card bg-nav-item py-2 px-3 rounded-3"
    >
      $29.00
    </div>
  </div>
</li>`,
price: 29,
color: 'black',
size: 'L',
};

const cards = [womenCard1, womenCard2, womenCard3, womenCard4, womenCard5, womenCard6, womenCard7, womenCard8, womenCard9, womenCard10, womenCard11, womenCard12];

var newColors = [];
var newSizes = [];

const filterCards = (activedColors,activedSizes,oldArr) => {
  
  activedColors = [];
  
  activedSizes = [];

  for (color of colors) {
    if(color.classList.contains('actived')) activedColors.push(color.getAttribute('color')) 
  }
  
  for (size of sizes) {
    if(size.classList.contains('actived')) activedSizes.push(size.getAttribute('size')) 
  }

  var filtedArr = oldArr.filter( (el) => { if (el.price >= firstValue.ariaValueNow && el.price <= secondValue.ariaValueNow) return el; 
})

  filtedArr = filtedArr.filter( (el) => {
  if(activedColors.length == 0) return filtedArr = filtedArr;
  else {
    for (someColor of activedColors) {
      if (el.color == someColor) {
        return el;
      } else {
        continue;
      }
    }
  }
  });

  filtedArr = filtedArr.filter( (el) => {
  if(activedSizes.length == 0) return filtedArr = filtedArr;
  else {
    for (someSize of activedSizes) {
      if (el.size == someSize) {
        return el;
      } else {
        continue;
      }
    }
  }
  });

  document.getElementById('new-lists').remove();
  sectionPaste.insertAdjacentHTML('beforeend', lists);
  document.getElementById('new-lists').insertAdjacentHTML('beforeend', filtedArr.map((el) => {
    return el = el.tag;
    }).join(''));
}

// First range value
firstRange.addEventListener('change', () => filterCards(newColors,newSizes,cards));

// Second range value
secondRange.addEventListener('change', () => filterCards(newColors,newSizes,cards));

// First price block
firstValue.addEventListener('input', () => filterCards(newColors,newSizes,cards))

// Second price block
secondValue.addEventListener('input', () => filterCards(newColors,newSizes,cards))

// Color Block
colors.forEach( (el) => el.addEventListener('click', () => filterCards(newColors,newSizes,cards)));

// Sizes Block
sizes.forEach( (el) => el.addEventListener('click', () => filterCards(newColors,newSizes,cards)));