//Data
// var cart = [
//   {
//     id: 1,
//     img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060552905975-1_240x240.jpg?v=1671541617",
//     name: "AUGUSTINUS BADER",
//     desc: "The Hydration Heroes With The Rich Cream",
//     price: "325",
//     qty: 1,
//   },
//   {
//     id: 2,
//     img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-7649990366029-1_240x240.jpg?v=1671325105",
//     name: "VVARDIS",
//     desc: "New White Enamel Anti-Aging Serum",
//     price: "100",
//     qty: 1,
//   },
//   {
//     id: 3,
//     img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700458602937-1_240x240.jpg?v=1672420173",
//     name: "MEMO PARIS",
//     desc: "French Leather Eau de Parfum",
//     price: "325",
//     qty: 1,
//   },
//   {
//     id: 4,
//     img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011958-1_240x240.jpg?v=1671800868",
//     name: "M-61",
//     desc: "Vitablast C® 30% Serum Concentrate",
//     price: "325",
//     qty: 1,
//   },
// ];

//Cart display function
// localStorage.setItem("cart-items", JSON.stringify(cart));
var data = JSON.parse(localStorage.getItem("cart-items")) || [];
var totalprice = 0;
displaycart(data);
function displaycart(arr) {
  totalprice = 0;
  document.querySelector("tbody").textContent = "";
  arr.map(function (elem, ind) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var div = document.createElement("div");
    div.setAttribute("id", "td1");
    var img = document.createElement("img");
    img.setAttribute("src", elem.img);
    var div2 = document.createElement("div");
    var name = document.createElement("p");
    name.textContent = elem.name;
    var desc = document.createElement("p");
    desc.textContent = elem.desc;
    div2.append(name, desc);
    div.append(img, div2);
    td1.append(div);
    var td2 = document.createElement("td");
    td2.innerText = elem.price;
    var td3 = document.createElement("td");
    var plus = document.createElement("button");
    plus.innerText = "+";
    plus.addEventListener("click", function () {
      plusfunc(elem, ind);
    });
    var qty = document.createElement("button");
    qty.setAttribute("id", "qty");
    qty.innerText = elem.qty;
    var minus = document.createElement("button");
    minus.innerText = "-";
    minus.addEventListener("click", function () {
      minusfunc(elem, ind);
    });
    var div = document.createElement("div");
    div.setAttribute("id", "removebtn");
    var remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.addEventListener("click", function () {
      removefunc(elem, ind);
    });
    div.append(remove);
    td3.append(plus, qty, minus, div);
    var td4 = document.createElement("td");
    var prodprice = Number(elem.price) * Number(elem.qty);
    td4.innerText = "$" + prodprice;
    totalprice += prodprice;
    document.querySelector("#total").innerText = totalprice;
    localStorage.setItem("total-price", JSON.stringify(totalprice));
    tr.append(td1, td2, td3, td4);
    document.querySelector("tbody").append(tr);
    var table = document.getElementById("tableId");
    var items = table.tBodies[0].rows.length;
    document.querySelector("#items").innerText = items;
  });
}

//Quatity Plus function
function plusfunc(elem, ind) {
  elem.qty = Number(elem.qty) + 1;
  localStorage.setItem("cart-items", JSON.stringify(data));
  displaycart(data);
}

//Quatity minus function
function minusfunc(elem, ind) {
  if (elem.qty == 1) {
    removefunc(elem, ind);
  }
  elem.qty = Number(elem.qty) - 1;
  localStorage.setItem("cart-items", JSON.stringify(data));
  displaycart(data);
}

//Item remove function
function removefunc(elem, ind) {
  data.splice(ind, 1);
  localStorage.setItem("cart-items", JSON.stringify(data));
  displaycart(data);
}

//Gift samples function
localStorage.setItem("samples", false);
document.querySelector("#samples").addEventListener("click", samplefunc);
function samplefunc() {
  event.preventDefault();
  if (document.querySelector("#samples").innerText == "Remove 3 samples") {
    localStorage.setItem("samples", false);
    document.querySelector("#samples").innerText = "Add 3 Samples";
  } else {
    localStorage.setItem("samples", true);
    document.querySelector("#samples").innerText = "Remove 3 samples";
  }
}

//if the cart is empty
if (data.length == 0) {
  var parent = document.querySelector("#parent");
  parent.style.display = "none";
  var footer = document.querySelector(".footer-part");
  footer.style.display = "none";
  var emptydiv = document.createElement("div");
  emptydiv.setAttribute("id", "emptydiv");
  var emptymsg = document.createElement("p");
  emptymsg.innerText = "YOUR CART IS EMPTY";
  emptymsg.setAttribute("id", "emptymsg");
  var emptybutton = document.createElement("button");
  emptybutton.innerText = "SHOP OUR PRODUCTS";
  emptybutton.setAttribute("id", "emptybtn");
  emptybutton.setAttribute("href", "./projectData/HTML/Gifts.html");
  emptydiv.append(emptymsg, emptybutton);
  document.querySelector("body").append(emptydiv);
}
document.getElementById("emptybtn").addEventListener("click", emptycallshop);
function emptycallshop() {
  window.location.href = "../NewArrival/newArrival.html";
}
