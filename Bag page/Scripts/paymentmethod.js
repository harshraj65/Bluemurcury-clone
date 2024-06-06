var customerdata = JSON.parse(localStorage.getItem("customer-data")) || [];
document
  .querySelector("#type_radio_2")
  .addEventListener("click", payment2fun);
document
  .querySelector("#type_radio_1")
  .addEventListener("click", payment1fun);
document
  .querySelector("#type2_radio_2")
  .addEventListener("click", billing2fun);
document
  .querySelector("#type2_radio_1")
  .addEventListener("click", billing1fun);
var methodtext = localStorage.getItem("method");
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
  var method = document.createElement("td");
  method.textContent = "Method";
  var methodtxt = document.createElement("td");
  methodtxt.textContent = methodtext;
  var change3 = document.createElement("td");
  var anchor3 = document.createElement("a");
  anchor3.textContent = "change";
  anchor3.setAttribute("href", "./shippingmethod.html");
  change3.append(anchor3);
  document.querySelector("#methodtr").append(method, methodtxt, change3);
}


//Function to choose the payment method
function payment1fun() {
  document.querySelector("#paymenttable").textContent = "";
}

function payment2fun() {
  document.querySelector("#paymenttable").textContent = "";
  var tr = document.createElement("tr");
  var cardno = document.createElement("input");
  cardno.setAttribute("id", "cardno");
  cardno.setAttribute("placeholder", "Card number");
  cardno.setAttribute("maxlength",12)
  cardno.setAttribute("type", "number");
  var cardname = document.createElement("input");
  cardname.setAttribute("placeholder", "Name on card");
  cardname.setAttribute("id", "cardname");
  var div1 = document.createElement("div");
  div1.setAttribute("id", "inputdiv");
  var date = document.createElement("input");
  date.setAttribute("id", "date");
  date.setAttribute("type", "text");
  date.setAttribute("placeholder", "Expiration date (MM/YY)");
  date.setAttribute("maxlength",5)
  var seccode = document.createElement("input");
  seccode.setAttribute("id", "seccode");
  seccode.setAttribute("placeholder", "Security code");
  seccode.setAttribute("maxlength",4)
  seccode.setAttribute("type","password")
  div1.append(date, seccode);
  tr.append(cardno, cardname, div1);
  document.querySelector("#paymenttable").append(tr);
}


//Functions to decide the display of credit card form
var inputDiv = document.getElementById("billingadd");
function billing1fun() {
  inputDiv.style.display = "none";
}

function billing2fun() {
  inputDiv.style.display = "flex";
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
 

//Functions to display popup window after placing order
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

btn.onclick = function() {
  modal.style.display = "block";
  var seccode=document.querySelector("#seccode")
  var date=document.querySelector("#date")
  var cardname=document.querySelector("#cardname")
  var cardno=document.querySelector("#cardno")
  var pincode=document.querySelector("#pincode")
  var state=document.querySelector("#state")
  var city=document.querySelector("#city")
  var address2=document.querySelector("#address2")
  var address1=document.querySelector("#address1")
  var lastname=document.querySelector("#lastname")
  var firstname=document.querySelector("#firstname")
  var country=document.querySelector("#country")
  if(seccode.value!="" || date.value!="" ||cardname.value!="" || cardno.value!="" ||pincode.value!="" || state.value!="" ||city.value!="" || address2.value!="" ||address1.value!="" || lastname.value!="" || firstname.value!="" || country.value!=""){

    document.querySelector("#seccode").value=""
    document.querySelector("#date").value=""
    document.querySelector("#cardname").value=""
    document.querySelector("#cardno").value=""
    document.querySelector("#pincode").value=""
    document.querySelector("#state").value=""
    document.querySelector("#city").value=""
    document.querySelector("#address2").value=""
    document.querySelector("#address1").value=""
    document.querySelector("#lastname").value=""
    document.querySelector("#firstname").value=""
    document.querySelector("#country").value=""
  }

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}