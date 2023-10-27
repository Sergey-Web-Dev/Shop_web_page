const lists = `<ul
id="new-lists"
class="lists d-flex justify-content-center align-items-center flex-wrap gap-4 pt-5 ps-0"></ul>`

const menCard1 = {
    tag: `<li class="list position-relative card-product">
    <img src="../img/product-1 men.png" alt="" class="card-1" />
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
          Red shirt with ....
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
  color: 'red',
  size: 'XS',
};

const menCard2 = {
    tag: `<li class="list position-relative card-product">
    <img src="../img/men-product-2.png" alt="" class="card-1" />
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
          Black T-shirt
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
  color: 'black',
  size: 'S',
};

const menCard3 = {
    tag: `<li class="list position-relative card-product">
    <img src="../img/men-product-3.png" alt="" class="card-1" />
    <div
      class="heart position-absolute bg-white px-2 pt-2 pb-0 rounded-circle top-5 end-5"
    >
      <span class="material-symbols-outlined"> favorite </span>
    </div>
    <div
      class="wrapper-nav d-flex justify-content-between align-items-center"
    >
      <div class="wrapper-naming mt-4">
        <h3 class="causten600 fs-16 text-card-naming">Brown T-shirt and ....</h3>
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
  color: 'broom',
  size: 'M',
};

const menCard4 = {
    tag: `<li class="list position-relative card-product">
    <img src="../img/men-product-4.png" alt="" class="card-1" />
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
          Leaves Polo blue...
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
  color: 'blue',
  size: 'XXL',
};

const menCard5 = {
    tag: `<li class="list position-relative card-product">
    <img src="../img/men-product-5.png" alt="" class="card-1" />
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
          Green Graphic Hoodie...
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
  color: 'green',
  size: 'XL',
};

const menCard6 = {
    tag: `<li class="list position-relative card-product">
    <img src="../img/men-product-6.png" alt="" class="card-1" />
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
          Gray Trouser's
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
  color: 'gray',
  size: 'XS',
};

const menCard7 = {
    tag: `<li class="list position-relative card-product">
    <img src="../img/men-product-7.png" alt="" class="card-1" />
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
          White T-shirt and Pink ...
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
  color: 'white',
  size: 'L',
};

const menCard8 = {
    tag: `<li class="list position-relative card-product">
    <img src="../img/men-product-8.png" alt="" class="card-1" />
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
          Sand-color Shirt and ...
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
  color: 'broom',
  size: 'XL',
};

const menCard9 = {
    tag: `<li class="list position-relative card-product">
    <img src="../img/men-product-9.png" alt="" class="card-1" />
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
          Fly Glasses with White T...
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
  color: 'white',
  size: '3XL',
};

const menCard10 = {
    tag: `<li class="list position-relative card-product">
    <img src="../img/men-product-10.png" alt="" class="card-1" />
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
           Blue Shirt 
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
  color: 'navy',
  size: '4XL',
}

const menCard11 = {
    tag: `<li class="list position-relative card-product">
    <div class="w-282 h-370 rounded-3 overflow-hidden">
      <img src="../img/bsz-5.jpg" alt="" class="card-1 position-relative scale-2 start-25 top-15"/>
    </div>
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
          White Flower T-Shirt ....
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
  color: 'Pink',
  size: 'XL',
}

const menCard12 = {
    tag: `<li class="list position-relative card-product">
    <div class="w-282 h-370 rounded-3 overflow-hidden">
      <img src="../img/card-product-3.jpg" alt="" class="card-1 position-relative scale-1-5 top-10 "/>
    </div>
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
  size: 'XXL',
}

const cards2 = [menCard1, menCard2,menCard3,menCard4,menCard5,menCard6,menCard7,menCard8,menCard9,menCard10,menCard11,menCard12];

var newColors = [];
var newSizes = [];
var filtedCards = [];

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
  
    if (filtedArr.length <= 7 && hidenDress.classList.contains('active-1')) clothingIndiaBlock.classList.add("active-1");
    else clothingIndiaBlock.classList.remove("active-1");
  
    filtedCards = filtedArr;
  
    filtedArr = filtedArr.map((el) => {
      return el = el.tag;
      }).join('');
  
    document.getElementById('new-lists').remove();
    sectionPaste.insertAdjacentHTML('beforeend', lists);
    document.getElementById('new-lists').insertAdjacentHTML('beforeend', filtedArr);
  }

// First range value
firstRange.addEventListener('change', () => filterCards(newColors,newSizes,cards2));

// Second range value
secondRange.addEventListener('change', () => filterCards(newColors,newSizes,cards2));

// First price block
firstValue.addEventListener('input', () => filterCards(newColors,newSizes,cards2))

// Second price block
secondValue.addEventListener('input', () => filterCards(newColors,newSizes,cards2))

// Color Block
colors.forEach( (el) => el.addEventListener('click', () => filterCards(newColors,newSizes,cards2)));

// Sizes Block
sizes.forEach( (el) => el.addEventListener('click', () => filterCards(newColors,newSizes,cards2)));