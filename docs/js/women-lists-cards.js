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


// First range value
firstRange.addEventListener('change', () => {
  const newcards = cards.filter( (el) => {
    if(secondValue.hasAttribute('aria-valuenow')) {
      if (el.price >= firstValue.ariaValueNow && el.price <= secondValue.ariaValueNow) return el;
    } else {
      if (el.price >= firstValue.ariaValueNow && el.price <= secondRange.value) return el;
    }
  
    
    
}).map((el) => {
   return el = el.tag;
})


document.getElementById('new-lists').remove();
sectionPaste.insertAdjacentHTML('beforeend', lists);
document.getElementById('new-lists').insertAdjacentHTML('beforeend', newcards.join(''));
})


// Second range value
secondRange.addEventListener('change', () => {
  newcards = cards.filter( (el) => {
    if(firstValue.hasAttribute('aria-valuenow')) {
      if (el.price >= firstValue.ariaValueNow && el.price <= secondValue.ariaValueNow) return el;
    } else {
      if (el.price >= firstRange.value && el.price <= secondValue.ariaValueNow) return el;
    }
  
    
}).map((el) => {
   return el = el.tag;
})


document.getElementById('new-lists').remove();
sectionPaste.insertAdjacentHTML('beforeend', lists);
document.getElementById('new-lists').insertAdjacentHTML('beforeend', newcards.join(''));
})


// First price block
firstValue.addEventListener('input', () => {
  if(firstValue.value[0] == '$') {
    if(firstValue.hasAttribute('aria-valuenow')) firstValue.setAttribute('aria-valuenow', firstValue.value.slice(1));
    else firstValue.setAttribute('aria-valuenow', firstValue.value.slice(1))

    const newcards = cards.filter( (el) => {
      if(secondValue.hasAttribute('aria-valuenow')) {
        if (el.price >= firstValue.ariaValueNow && el.price <= secondValue.ariaValueNow) return el;
      } else {
        if (el.price >= firstValue.ariaValueNow && el.price <= secondRange.value) return el;
      }
      
  }).map((el) => {
     return el = el.tag;
  })
  
  
  document.getElementById('new-lists').remove();
  sectionPaste.insertAdjacentHTML('beforeend', lists);
  document.getElementById('new-lists').insertAdjacentHTML('beforeend', newcards.join(''));
  }
  else {
    if(firstValue.hasAttribute('aria-valuenow')) firstValue.setAttribute('aria-valuenow', firstValue.value);
    else firstValue.setAttribute('aria-valuenow', firstValue.value)

    const newcards = cards.filter( (el) => {
      if(secondValue.hasAttribute('aria-valuenow')) {
        if (el.price >= firstValue.ariaValueNow && el.price <= secondValue.ariaValueNow) return el;
      } else {
        if (el.price >= firstValue.ariaValueNow && el.price <= secondRange.value) return el;
      }
    
      
      
  }).map((el) => {
     return el = el.tag;
  })
  
  
  document.getElementById('new-lists').remove();
  sectionPaste.insertAdjacentHTML('beforeend', lists);
  document.getElementById('new-lists').insertAdjacentHTML('beforeend', newcards.join(''));
  }

})

// Second price block
secondValue.addEventListener('input', () => {
  if(secondValue.value[0] == '$') {
    if(secondValue.hasAttribute('aria-valuenow')) secondValue.setAttribute('aria-valuenow', secondValue.value.slice(1));
    else secondValue.setAttribute('aria-valuenow', secondValue.value.slice(1))

    const newcards = cards.filter( (el) => {
      if(secondValue.hasAttribute('aria-valuenow')) {
        if (el.price >= firstValue.ariaValueNow && el.price <= secondValue.ariaValueNow) return el;
      } else {
        if (el.price >= firstValue.ariaValueNow && el.price <= secondRange.value) return el;
      }
      
  }).map((el) => {
     return el = el.tag;
  })
  
  
  document.getElementById('new-lists').remove();
  sectionPaste.insertAdjacentHTML('beforeend', lists);
  document.getElementById('new-lists').insertAdjacentHTML('beforeend', newcards.join(''));
  }
  else {
    if(secondValue.hasAttribute('aria-valuenow')) secondValue.setAttribute('aria-valuenow', secondValue.value);
    else secondValue.setAttribute('aria-valuenow', secondValue.value)

    const newcards = cards.filter( (el) => {
      if(secondValue.hasAttribute('aria-valuenow')) {
        if (el.price >= firstValue.ariaValueNow && el.price <= secondValue.ariaValueNow) return el;
      } else {
        if (el.price >= firstValue.ariaValueNow && el.price <= secondRange.value) return el;
      }
    
      
      
  }).map((el) => {
     return el = el.tag;
  })
  
  
  document.getElementById('new-lists').remove();
  sectionPaste.insertAdjacentHTML('beforeend', lists);
  document.getElementById('new-lists').insertAdjacentHTML('beforeend', newcards.join(''));
  }

})