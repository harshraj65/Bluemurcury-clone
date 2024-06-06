var customerdata = JSON.parse(localStorage.getItem("customer-data")) || [];
document.querySelector("#type_radio_1").addEventListener("click", method1fun);
document.querySelector("#type_radio_2").addEventListener("click", method2fun);
var obj = customerdata[customerdata.length - 1];


//Function to display customer info got from customerinfopage
displayinfo();
function displayinfo() {
  var contact = document.createElement("td");
  contact.textContent = "Contact";
  var contacttext = document.createElement("td");
  contacttext.textContent = obj.email;
  var change1 = document.createElement("td");
  var anchor1 = document.createElement("a");
  anchor1.textContent = "change";
  anchor1.setAttribute("href", "./CustomerInfoPage.html");
  change1.append(anchor1);
  document.querySelector("#boxtr").append(contact, contacttext, change1);
  var shiptotr = document.createElement("tr");
  var shipto = document.createElement("td");
  shipto.textContent = "Ship to";
  var shiptotext = document.createElement("td");
  shiptotext.textContent =
    obj.address1 +
    "," +
    " " +
    obj.city +
    " " +
    obj.state +
    " " +
    obj.pincode +
    "," +
    " " +
    obj.country;
  var change2 = document.createElement("td");
  var anchor2 = document.createElement("a");
  anchor2.textContent = "change";
  anchor2.setAttribute("href", "./CustomerInfoPage.html");
  change2.append(anchor2);
  document.querySelector("#shiptotr").append(shipto, shiptotext, change2);
}


//updating the total price according to the shipping method
var totalprice = JSON.parse(localStorage.getItem("total-price"));
function method1fun() {
  localStorage.setItem("method", "Ground Shipping (7-10 days)");
}

function method2fun() {
  totalprice = Number(totalprice) + Number(10);
  localStorage.setItem("total-price", totalprice);
  localStorage.setItem(
    "method",
    "Two-Day Shipping (Excludes PO Box or APO/FPO)"
  );
  document.querySelector("#subtot").textContent = "$" + totalprice;
  document.querySelector("#totprice").textContent = "USD $" + totalprice;
  document.querySelector("#shipfreeupd").textContent="$" + 10
}


//Function to display cart data on right side div   
var data = JSON.parse(localStorage.getItem("cart-items")) || [];
var samples = JSON.parse(localStorage.getItem("samples"));
var totalprice = JSON.parse(localStorage.getItem("total-price"));

document.querySelector("#subtot").textContent = "$" + totalprice;
document.querySelector("#totprice").textContent = "USD $" + totalprice;
displaycart(data);
function displaycart(arr) {
  arr.map(function (elem, ind) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var div = document.createElement("div");
    div.setAttribute("id", "td1");
    var img = document.createElement("img");
    img.setAttribute("src", elem.img);
    img.setAttribute("id", "cartimg");
    var div2 = document.createElement("div");
    div2.setAttribute("id", "carttext");
    var name = document.createElement("p");
    name.textContent = elem.name;
    var desc = document.createElement("p");
    desc.textContent = elem.desc;
    div2.append(name, desc);
    div.append(img, div2);
    td1.append(div);
    var td2=document.createElement("td");
    td2.innerText="QTY - "+ elem.qty
    td2.setAttribute("id","qty")
    var td3 = document.createElement("td");
    var prodprice = Number(elem.price) * Number(elem.qty);
    td3.innerText = "$" + prodprice;
    tr.append(td1, td2,td3);
    document.querySelector("#carttablebody").append(tr);
  });
}

       
//if 3 free samples selected appending to cart table    
if (samples == true) {
  var tr = document.createElement("tr");
  var td3 = document.createElement("td");
  var samplediv=document.createElement("div")
  samplediv.setAttribute("id", "td2");
  var sampleimg=document.createElement("img")
  sampleimg.setAttribute("id", "sampleimg");
  sampleimg.setAttribute("src","https://cdn.shopify.com/s/files/1/0283/0185/2747/products/surprise-mystery-samples-1_1.jpg?v=1668695719")
  var div3 = document.createElement("div");
  div3.setAttribute("id", "sampletext");
  var blue = document.createElement("p");
  blue.textContent = "Bluemercury";
  var mystery = document.createElement("p");
  mystery.textContent = "3 MYSTERY SAMPLES";
  div3.append(blue, mystery);
  samplediv.append(sampleimg, div3);
  td3.append(samplediv);
  var td4=document.createElement("td");
  td4.innerText=""
  var td5 = document.createElement("td");
   td5.innerText="FREE"
  tr.append(td3,td4,td5);
  document.querySelector("#carttablebody").append(tr);
}

   
 //Function to check promo code 
document.querySelector("#promobutton").addEventListener("click", promofunc);
function promofunc() {
  event.preventDefault();
  var promo = document.querySelector("#promocode");
  console.log(promo.value);
  if (promo.value == "blue20") {
    alert("20% off on your bag");
    totalprice = (totalprice - totalprice * 0.2).toFixed(0);
    document.querySelector("#subtot").textContent = "$" + totalprice;
    document.querySelector("#totprice").textContent = "USD $" + totalprice;
    if (promo.value != "") {
      promo.value = "";
    }
  } else {
    alert("Invalid Promo Code");
    if (promo.value != "") {
      promo.value = "";
    }
  }
}