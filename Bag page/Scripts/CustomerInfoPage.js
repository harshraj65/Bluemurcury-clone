document
      .querySelector("form")
      .addEventListener("submit", storecustomerinfo);
    var customerdata = JSON.parse(localStorage.getItem("customer-data")) || [];
    var totalprice = JSON.parse(localStorage.getItem("total-price"));
    document.querySelector("#subtot").textContent = "$" + totalprice;
    document.querySelector("#totprice").textContent = "USD $" + totalprice;
    
            
//Function to store customer informtion 
    function storecustomerinfo() {
      event.preventDefault();
      obj = {
        email: document.getElementById("email").value,
        country: document.getElementById("country").value,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        address1: document.getElementById("address1").value,
        address2: document.getElementById("address2").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        pincode: document.getElementById("pincode").value,
      };
      customerdata.push(obj);
      localStorage.setItem("customer-data", JSON.stringify(customerdata));
      window.location.href = "./shippingmethod.html";
    }
             
       
    //Function to display cart data on right side div                 
    var data = JSON.parse(localStorage.getItem("cart-items")) || [];
    var samples=JSON.parse(localStorage.getItem("samples"))
    displaycart(data);
    function displaycart(arr) {
      document.querySelector("tbody").textContent = "";
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
        document.querySelector("tbody").append(tr);
      });
    }
            
           
    //if 3 free samples selected appending to cart table                  
    if(samples==true){
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
        document.querySelector("tbody").append(tr);
    }


    //Function to check promo code 
    document.querySelector("#promobutton").addEventListener("click", promofunc);
    function promofunc() {
      event.preventDefault();
      var promo = document.querySelector("#promocode");
      
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