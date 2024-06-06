var pageCategory = [
  "Tools&Accessories",
  "Bath&Body",
  "Makeup",
  "Fragrance",
  "newArrival",
  "HairCare",
  "Skincare",
];
var All = JSON.parse(localStorage.getItem("mainProducts"));
var PageName = "Fragrance";

localStorage.setItem("mainProducts", JSON.stringify(All));

var PageProducts = All.filter((element) => {
  return element.pageCategory === "Fragrance";
});

displayProducts(PageProducts);

// Display function
function displayProducts(arr) {
  if (arr.length > 18) {
    arr = arr.slice(0, 18);
  }
  document.getElementById("container").innerHTML = "";
  arr.map((element, index) => {
    const container = document.getElementById("container");
    container.innerHTML += `
      <div class="product-container>
          <i class=""></i>     
          <p class="head">${element.merchbadge}<i class="fa-solid fa-2x fa-heart" id="heart${index}" onclick="wishlist(PageProducts[${index}], ${index})"></i></p>
          <p>${element.merchbadge1}</p>     
          <div class="quickview">
            <img src="${element.Image}" alt="${element.Title}" class="image" />
            <button id="quick${index}" class="quick" onclick="quickViewProduct(PageProducts[${index}], ${index})">QUICK VIEW</button>
          </div>
          <h3>${element.productcard__brand}</h3>
          <p>${element.Title}</p>
          <p>$${element.Price}</p>
      </div>
  
  `;
  });
}

// Quickview of products

function quickViewProduct(element, ind) {
  const box = document.querySelector(".ViewBox");
  box.classList.add("boxApply");
  box.innerHTML = `
    <div>
    <img src="${element.Image}">
      </div>
      <div>
          <h2>${element.productcard__brand}</h2>
          <p>${element.Title}</p>   
          <p>$${element.Price}</p>
          <div style="display:flex">${element.merchbadge} ${element.merchbadge1}</div>
          <p>${element.description}</p>
          <div style="display:flex; height: 35px">
                   <button onclick="decreaseQuantity(${ind})" class="quantityBtn">-</button>
                   <input type="tel" value="1" id="quantity${ind}" class="proQuantity"> 
                   <button onclick="increaseQuantity(${ind})" class="quantityBtn">+</button> 
                  <p class="heart"><i class="fa-solid fa-2x fa-heart" id="heart${ind}" onclick="wishlist(PageProducts[${ind}],${ind})"></i></p>
                  <p>WISHLIST</p>
          </div>
          <button id="cart${ind}" onclick="addToCart(PageProducts[${ind}], ${ind})"><i class="fa-solid fa-bag-shopping" ></i>ADD TO BAG</button>
       </div>
       <button onclick="cut()" id="x">X</button>
       <a href="${element.Title_URL}" class="details">VIEW FULL DETAILS</a>
    `;
}
// Increasing Quanttity
function increaseQuantity(ind) {
  let qty = Number(document.getElementById("quantity" + ind).value);
  qty++;
  document.getElementById("quantity" + ind).value = qty;
}

// Decreasing Quanttity
function decreaseQuantity(ind) {
  let qty = Number(document.getElementById("quantity" + ind).value);
  if (qty > 1) {
    qty--;
    document.getElementById("quantity" + ind).value = qty;
  }
}
// Function cut
function cut() {
  document.querySelector(".ViewBox").classList.remove("boxApply");
}
// Add To Cart
function addToCart(element, ind) {
  let cartItems = JSON.parse(localStorage.getItem("cart-items")) || [];
  let qtyOfItems = document.getElementById("quantity" + ind).value;
  if (element.cart === true) {
    document.getElementById("cart" + ind).innerText = "Product Already in Cart";
  } else {
    element.qty = qtyOfItems;
    element.img = element.Image;
    element.name = element.productcard__brand;
    element.desc = element.Title;
    if (element.Price.length > 3) {
      let pricearr = element.Price.split("-");
      element.price = pricearr[0];
    } else {
      element.price = element.Price;
    }
    element.cart = true;
    cartItems.push(element);
    document.getElementById("cart" + ind).innerText = "ADDED TO BAG";
  }
  localStorage.setItem("cart-items", JSON.stringify(cartItems));
}

//Addding to Whistlist
function wishlist(element, ind) {
  const newWhistlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (element.wishlist !== undefined) {
    const dia = document.querySelector(".d");
    dia.classList.add("applied");
    dia.innerHTML = `
      <div>
      <img src="${element.Image}">
      <p style="color:red">${element.Title} Already in Wishlist</p>
      <p>Price: $${element.Price}</p>
      <button onclick="ok()">Cancel</button>
      </div>
      `;
  } else {
    const dia = document.querySelector(".d");
    dia.classList.add("applied");

    dia.innerHTML = `
      <div class ="add">
      <img src="${element.Image}">
      <p style="color:green">${element.Title} Successfully added to Wishlist</p>
      <p>Price: $${element.Price}</p>
      <button onclick="ok()">Cancel</button>
      </div>
      `;
    element.wishlist = ind;
    newWhistlist.push(element);
  }
  document.getElementById("heart" + ind).style.color = "red";
  localStorage.setItem("wishlist", JSON.stringify(newWhistlist));
}
// Function OK
function ok() {
  let add = document.querySelector(".d");
  add.classList.remove("applied");
}

//Display Left Container
displayCategories(pageCategory, PageName);
function displayCategories(pageCategory, PageName) {
  document.getElementById("left-box").innerHTML = `
        <div id="category-box">
            <div>
              <h1>${PageName} CATEGORY</h1>
              <p>Select One to narrow results</p>
            </div>
              <p class="category-name"><a href="${pageCategory[0]}.html">${pageCategory[0]}</a></p>
              <p class="category-name"><a href="${pageCategory[1]}.html">${pageCategory[1]}</a></p>
              <p class="category-name"><a href="${pageCategory[2]}.html">${pageCategory[2]}</a></p>
              <p class="category-name"><a href="${pageCategory[3]}.html">${pageCategory[3]}</a></p>
              <p class="category-name"><a href="${pageCategory[4]}.html">${pageCategory[4]}</a></p>
              <p class="category-name"><a href="${pageCategory[5]}.html">${pageCategory[5]}</a></p>
              <p class="category-name"><a href="${pageCategory[6]}.html">${pageCategory[6]}</a></p>
  

      </div>
      <div class="type-container">
      <div class="select-btn">
        <span class="btn-text">Type Filter</span>
        <span class="arrow-dwn">
          <i class="fa-solid fa-2x fa-plus"></i>
        </span>
      </div>

      <ul class="list-items">
        <li class="item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">After Sun Care</span>
        </li>
        <li class="item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Body Wash</span>
        </li>
        <li class="item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Brush Sets</span>
        </li>
        <li class="item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Conditioners</span>
        </li>
        <li class="item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Curling Irons</span>
        </li>
        <li class="item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Diffusers</span>
        </li>
        <li class="item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Exercise Bands</span>
        </li>
        <li class="item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Eye Creams</span>
        </li>
        <li class="item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Eye Palette</span>
        </li>
        <li class="item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Face Mask</span>
        </li>
        <li class="item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Face Wash</span>
        </li>
      </ul>
    </div>

    <div class="type-container">
      <div class="select-btn" id="brand-filter">
        <span class="btn-text">Brand Filter</span>
        <span class="arrow-dwn">
          <i class="fa-solid fa-2x fa-plus"></i>
        </span>
      </div>

      <ul class="list-items">
        <li class="brand-item item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Bumble And Bumble</span>
        </li>
        <li class="brand-item item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">M-61</span>
        </li>
        <li class="brand-item item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Ourself</span>
        </li>
        <li class="brand-item item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Seen</span>
        </li>
        <li class="brand-item item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">SkinCeuticals</span>
        </li>
        
      </ul>
    </div>

    <div class="type-container">
      <div class="select-btn" id="concern-filter">
        <span class="btn-text">Concern Filter</span>
        <span class="arrow-dwn">
          <i class="fa-solid fa-2x fa-plus"></i>
        </span>
      </div>

      <ul class="list-items">
        <li class="item concern-item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Acne And Blemishes</span>
        </li>
        <li class="item concern-item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Black Heads And Visible Pores</span>
        </li>
        <li class="item concern-item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Dullness</span>
        </li>
        <li class="item concern-item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Fine Lines And Wrinkles</span>
        </li>
        <li class="item concern-item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Loss Of Firmness</span>
        </li>
        <li class="item concern-item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Rough/Bumpy Skin</span>
        </li>
        <li class="item concern-item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Sun Damage</span>
        </li>
        
      </ul>
    </div>

    <div class="type-container">
      <div class="select-btn" id="size-filter">
        <span class="btn-text">Size Filter</span>
        <span class="arrow-dwn">
          <i class="fa-solid fa-2x fa-plus"></i>
        </span>
      </div>

      <ul class="list-items">
        <li class="size-item item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Jumbo And Value Size</span>
        </li>
        <li class="size-item item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Travel Size</span>
        </li>
        <li class="size-item item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Classic</span>
        </li>
        <li class="size-item item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Votive</span>
        </li>
        
      </ul>
    </div>

    <div class="type-container">
      <div class="select-btn" id="ingredient-filter">
        <span class="btn-text">Ingredient</span>
        <span class="arrow-dwn">
          <i class="fa-solid fa-2x fa-plus"></i>
        </span>
      </div>

      <ul class="list-items">
        <li class="ingredient-item item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Naturally Derived</span>
        </li>
        <li class="ingredient-item item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Retinols</span>
        </li>
        <li class="ingredient-item item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Bakuchiol</span>
        </li>
        <li class="ingredient-item item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Salicylic Acid</span>
        </li>
        <li class="ingredient-item item">
          <span class="checkbox">
            <i class="fa-solid fa-check check-icon"></i>
          </span>
          <span class="item-text">Vitamin B5</span>
        </li>
        
      </ul>
    </div>
  
  `;
}
//thing to update -- whislist pop up and arr.slice insted of arr.splice
//First Filter
const filter = document.getElementById("filter");
filter.addEventListener("change", () => {
  let value = filter.value;
  let newProductArray = [];
  if (value === "Low to High" || value === "High to Low") {
    // sorting
    if (value === "Low to High") {
      PageProducts.sort((a, b) => {
        return a.Price - b.Price;
      });
    } else {
      PageProducts.sort((a, b) => {
        return b.Price - a.Price;
      });
    }
    displayProducts(PageProducts);
  } else {
    //Filtering
    if (value === "Featured") {
      PageProducts = All.filter((element) => {
        return element.merchbadge1 === "LIMITED EDITION";
      });
    } else if (value === "New Arrivals") {
      PageProducts = All.filter((element) => {
        return element.merchbadge === "NEW";
      });
    } else if (value === "Best Sellers") {
      PageProducts = All.filter((element) => {
        return element.merchbadge1 === "CONSCIOUS BEAUTY";
      });
    }
    displayProducts(PageProducts);
  }
});

//Left Side Filter

// let typefilter = document.getElementById("type-filter");
// typefilter.addEventListener("change", () => {
//   let value = typefilter.value;
//   PageProducts = All.filter((element) => {
//     return element.type === value;
//   });
//   displayProducts(PageProducts);
// });

// let brandfilter = document.getElementById("brand-filter");
// brandfilter.addEventListener("change", () => {
//   let value = brandfilter.value;
//   PageProducts = All.filter((element) => {
//     return element.productcard__brand === value;
//   });
//   displayProducts(PageProducts);
// });

// let concernfilter = document.getElementById("concern-filter");
// concernfilter.addEventListener("change", () => {
//   let value = concernfilter.value;
//   PageProducts = All.filter((element) => {
//     return element.concern === value;
//   });
//   displayProducts(PageProducts);
// });

// let sizefilter = document.getElementById("size-filter");
// sizefilter.addEventListener("change", () => {
//   let value = sizefilter.value;
//   PageProducts = All.filter((element) => {
//     return element.size === value;
//   });
//   displayProducts(PageProducts);
// });

// let ingredientfilter = document.getElementById("ingredient-filter");
// ingredientfilter.addEventListener("change", () => {
//   let value = ingredientfilter.value;
//   PageProducts = All.filter((element) => {
//     return element.ingredient === value;
//   });
//   displayProducts(PageProducts);
// });

const selectBtn = document.querySelector(".select-btn");
const brandFilter = document.querySelector("#brand-filter");
const concernfilter = document.querySelector("#concern-filter");
const sizefilter = document.querySelector("#size-filter");
const ingredientfilter = document.querySelector("#ingredient-filter");

selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
  items = document.querySelectorAll(".item");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("checked");
      let value = item.innerText;
      PageProducts = All.filter((element) => {
        return element.type === value;
      });
      displayProducts(PageProducts);
    });
  });
});

brandFilter.addEventListener("click", () => {
  brandFilter.classList.toggle("open");
  items = document.querySelectorAll(".brand-item");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("checked");
      let value = item.innerText;
      PageProducts = All.filter((element) => {
        return element.productcard__brand === value;
      });
      displayProducts(PageProducts);
    });
  });
});

concernfilter.addEventListener("click", () => {
  concernfilter.classList.toggle("open");
  items = document.querySelectorAll(".concern-item");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("checked");
      let value = item.innerText;
      PageProducts = All.filter((element) => {
        return element.concern === value;
      });
      displayProducts(PageProducts);
    });
  });
});

sizefilter.addEventListener("click", () => {
  sizefilter.classList.toggle("open");
  items = document.querySelectorAll(".size-item");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("checked");
      let value = item.innerText;
      console.log(value);
      PageProducts = All.filter((element) => {
        return element.size === value;
      });
      displayProducts(PageProducts);
    });
  });
});

ingredientfilter.addEventListener("click", () => {
  ingredientfilter.classList.toggle("open");
  items = document.querySelectorAll(".ingredient-item");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("checked");
      let value = item.innerText;
      console.log(value);
      PageProducts = All.filter((element) => {
        return element.ingredient === value;
      });
      displayProducts(PageProducts);
    });
  });
});

var xshop = document.getElementById("dropdown_shop");
function showshop() {
  xevent.style.display = "none";
  xshop.style.display = "block";
  xshop.style.display = "flex";
  xshop.display.border.color = "1px solid crimson";
}
function hideshop() {
  xshop.style.display = "none";
}

var xnew = document.getElementById("new_box");
function shownew() {
  xshop.style.display = "none";
  xbrand.style.display = "none";
  xreward.style.display = "none";
  xroutine.style.display = "none";
  xevent.style.display = "none";
  xnew.style.display = "block";
  xnew.display.border.color = "1px solid crimson";
}

function hidenew() {
  xnew.style.display = "none";
}

var xbrand = document.getElementById("brand_box");
function showbrand() {
  xnew.style.display = "none";
  xevent.style.display = "none";
  xexplore.style.display = "none";
  xreward.style.display = "none";
  xroutine.style.display = "none";
  xbrand.style.display = "block";
}

function hidebrand() {
  xbrand.style.display = "none";
}

var xexplore = document.getElementById("explore_box");
function showexplore() {
  xbrand.style.display = "none";
  xnew.style.display = "none";
  xreward.style.display = "none";
  xevent.style.display = "none";
  xroutine.style.display = "none";
  xexplore.style.display = "block";
}

function hideexplore() {
  xexplore.style.display = "none";
}

var xevent = document.getElementById("event_box");
function showevent() {
  xbrand.style.display = "none";
  xnew.style.display = "none";
  xreward.style.display = "none";
  xroutine.style.display = "none";
  xevent.style.display = "block";
}

function hideevent() {
  xevent.style.display = "none";
}

var xreward = document.getElementById("reward_box");
function showreward() {
  xbrand.style.display = "none";
  xnew.style.display = "none";
  xevent.style.display = "none";
  xexplore.style.display = "none";
  xroutine.style.display = "none";
  xreward.style.display = "block";
}

function hideevent() {
  xevent.style.display = "none";
}

var xroutine = document.getElementById("routine_box");
function showroutine() {
  xbrand.style.display = "none";
  xnew.style.display = "none";
  xevent.style.display = "none";
  xexplore.style.display = "none";
  xreward.style.display = "none";
  xroutine.style.display = "block";
}

function hideroutine() {
  xroutine.style.display = "none";
}
