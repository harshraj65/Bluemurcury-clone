var area = [
  {
    time: "Open Today Until 10:00PM",
    name: "Canaught Place Delhi",
    address: "Shop No. 120, Pole no. 10, Canaught Palace, Delhi 110001",
    phone: "(201) 930-9500",
    pin: 110001,
  },
  {
    time: "Open Today Until 10:00PM",
    name: "Lucknow",
    address: "shop 112, Market, Lucknow, U.P 226001",
    phone: "(201) 930-9500",
    pin: 226001,
  },
  {
    time: "Open Today Until 10:00PM",
    name: "F station yelahanka",
    address: "Shop No.2, Banglore, Karnatka 560063",
    phone: "(201) 930-9500",
    pin: 560063,
  },
  {
    time: "Open Today Until 10:00PM",
    name: "Abiramapuram",
    address: "Shop No. 10, Tamil Nadu, Chennai, 600018",
    phone: "(201) 930-9500",
    pin: 600018,
  },
];

function search() {
  document.getElementById("area").textContent = "";
  var zip = document.getElementById("zipCode").value;
  var code = area.filter(function (elem) {
    return parseInt(zip) === elem.pin;
  });
  console.log(code);
  if (code.length === 0) {
    document.getElementById("area").textContent =
      "Their are no Bluemercury shop here. Please try another input address to search for locations.";
  } else {
    var openTime = document.createElement("p");
    openTime.textContent = code[0].time;

    var name = document.createElement("h2");
    name.textContent = code[0].name;

    var address = document.createElement("p");
    address.textContent = code[0].address;

    var phone = document.createElement("p");
    phone.textContent = "Phone No." + code[0].phone;

    var service = document.createElement("p");
    service.textContent = "Spa Service Available";

    document
      .getElementById("area")
      .append(openTime, name, address, phone, service);
    document.getElementById("area").style.boxShadow =
      "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
  }
}
