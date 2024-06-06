var products = [
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-7290011521035-1_350x.jpg?v=1668092705",
    name: "MOROCCANOIL",
    detail: "0.3 oz Moroccanoil Treatment",
    freeWith: "Free with any $50+ Moroccanoil purchase",
    desc: "A multitasking, argan oil-infused hair treatment that absorbs quickly, helps improve shine, softness, and hydration, and smooths frizz and flyaways.",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060445300948-1_350x.jpg?v=1668093509",
    name: "MZ SKIN",
    detail: "Mini Rest & Revive Restorative Placenta & Stem Cell Night Serum",
    freeWith: "Free with any MZ SKIN purchase",
    desc: "Rest & Revive - Look fresh and revitalized with this intelligent night serum. Unique with its innovative blend of ovine placenta and stem cells which are combined with peptides to detoxify, strengthen and repair the skin during its nightly rejuvenation. Stimulates collagen and elastin, replenishes moisture to plump and smooth fine lines and wrinkles. Results in revived, and hydrated skin.",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-087327008582-1_350x.jpg?v=1668543398",
    name: "LAKE & SKYE",
    detail: "0.5 fl oz 11 11 Eau De Parfum Purse Spray",
    freeWith: "Free with any $100+ Lake & Skye purchase",
    desc: "Sheer, clean and uplifting with an ethereal vibe, 11 11 has a crisp texture and transparency",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-685428000650-1_350x.jpg?v=1669038946",
    name: "BUMBLE AND BUMBLE",
    detail: ".6 oz Thickening Dryspun Texture Spray",
    freeWith: "With any Bumble and Bumble purchase",
    desc: "",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-725490819498-1_350x.jpg?v=1668093611",
    name: "TOCCA",
    detail: "0.2 oz Giulietta Eau de Parfum",
    freeWith: "Free with any $80+ Tocca purchase",
    desc: "Giulietta weds innocent love apples with pink and cream lover's florals to create a wild garden inspired fragrance worthy of a once in a lifetime romance.",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-008080089847-1_350x.jpg?v=1668541463",
    name: "MOLTON BROWN",
    detail: "3.4 oz Delicious Rhubarb & Rose Bath & Shower Gel",
    freeWith: "Free with any $85+ Molton Brown purchase",
    desc: "A deliciously scented bath and shower gel, infused with rhubarb, rose and zesty grapefruit.",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060367410411-1_350x.jpg?v=1668717006",
    name: "LEGOLOGY",
    detail: "1.69oz. Peach-Lite Super Lift For The Derrière",
    freeWith: "With any $90+ Legology purchase",
    desc: "",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060305127821-1_350x.jpg?v=1668093572",
    name: "PHILIP KINGSLEY",
    detail: "2 oz Perfecting Primer Heat Protection Spray",
    freeWith: "Free with any $50+ Philip Kingsley purchase",
    desc: "Perfecting Primer Heat Protecting Spray is the perfect blow dry primer with ingredients designed to smooth, soften, boost volume and nourish your hair. Simply spray our heat protection spray on the mid to end length of your hair and defend your hair from whatever life has to throw at it.",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060280375996-1_350x.jpg?v=1668092869",
    name: "111SKIN",
    detail: "Contour Firming Mask Mini",
    freeWith: "Receive this gift with any 111SKIN purchase",
    desc: "",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-090205025410-1_350x.jpg?v=1668093559",
    name: "ELTAMD",
    detail: "0.5 oz PM Therapy Facial Moisturizer",
    freeWith: "Free with any $100+ EltaMD purchase",
    desc: "",
  },
];

displayItem();

function displayItem() {
  products.map(function (elem) {
    var box = document.createElement("div");
    box.setAttribute("class", "products");

    var image = document.createElement("img");
    image.setAttribute("src", elem.Image_url);
    image.setAttribute("alt", elem.name);

    var name = document.createElement("p");
    name.textContent = elem.name;
    name.setAttribute("class", "nameOfProduct");

    var detail = document.createElement("p");
    detail.textContent = elem.detail;

    var freeWith = document.createElement("p");
    freeWith.textContent = elem.freeWith;

    var giftDetail = document.createElement("a");
    giftDetail.textContent = "VIEW GIFT DETAILS";
    giftDetail.style.cursor = "pointer";
    giftDetail.addEventListener("click", function () {
      showItem(elem);
    });

    box.append(image, name, detail, freeWith, giftDetail);
    document.getElementById("box").append(box);
  });
}

function showItem(elem) {
  localStorage.setItem("item-detail", JSON.stringify(elem));
  window.open("./displayFreeGift.html", "_self");
}
