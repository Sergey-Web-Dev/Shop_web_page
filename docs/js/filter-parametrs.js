const colors = document.querySelectorAll('.color');
const sizes = document.querySelectorAll('.size');
const newPage = document.getElementById('new');
const recPage = document.getElementById('rec');
const sectionPaste = document.getElementById('section-paste')

// Men Page
const recommendMen = `<ul
id="recommend-lists"
class="lists recommended-lists d-flex justify-content-center align-items-center flex-wrap gap-4 pt-5 ps-0"
>
  <li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
</ul>`;
const newListsMen =  `<ul
id="new-lists"
class="lists d-flex justify-content-center align-items-center flex-wrap gap-4 pt-5 ps-0"
>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>

</ul>`;

// Women Page
const newListsWomen = `<ul 
id="new-lists"
class="lists d-flex justify-content-center align-items-center flex-wrap gap-4 pt-5 ps-0"
>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>

</ul>`;
const recommendWomen = `<ul
id="recommend-lists"
class="lists d-flex justify-content-center align-items-center flex-wrap gap-4 pt-5 ps-0"
>

<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>
<li class="list position-relative card-product">
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
</li>

</ul>`;

colors.forEach((el) => {
    el.addEventListener("click", () => el.classList.toggle('actived'));
    
})

sizes.forEach((el) => {
    el.addEventListener("click", () => el.classList.toggle('actived'));
    
})

newPage.addEventListener("click", () => {
    if(recPage.classList.contains('actived')) {
        newPage.classList.toggle('actived');
        recPage.classList.toggle('actived')

        if(sectionPaste.classList.contains('men')) {
            document.getElementById('recommend-lists').remove();
            sectionPaste.insertAdjacentHTML("beforeend", newListsMen);
            } else {
            document.getElementById('recommend-lists').remove();
            sectionPaste.insertAdjacentHTML("beforeend", newListsWomen);
            }
        
    }
});

recPage.addEventListener("click", () => {
    if(newPage.classList.contains('actived')) {
        recPage.classList.toggle('actived');
        newPage.classList.toggle('actived');

        if(sectionPaste.classList.contains('men')) {
            document.getElementById('new-lists').remove();
            sectionPaste.insertAdjacentHTML("beforeend", recommendMen);
            } else {
            document.getElementById('new-lists').remove();
            sectionPaste.insertAdjacentHTML("beforeend", recommendWomen);
            }
        
    }
});
