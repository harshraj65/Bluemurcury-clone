var products = [
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-7290011521035-1_350x.jpg?v=1668092705",
    name: "MOROCCANOIL",
    detail: "0.3 oz Moroccanoil Treatment",
    freeWith: "Free with any $50+ Moroccanoil purchase",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060445300948-1_350x.jpg?v=1668093509",
    name: "MZ SKIN",
    detail: "Mini Rest & Revive Restorative Placenta & Stem Cell Night Serum",
    freeWith: "Free with any MZ SKIN purchase",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-087327008582-1_350x.jpg?v=1668543398",
    name: "LAKE & SKYE",
    detail: "0.5 fl oz 11 11 Eau De Parfum Purse Spray",
    freeWith: "Free with any $100+ Lake & Skye purchase",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-685428000650-1_350x.jpg?v=1669038946",
    name: "BUMBLE AND BUMBLE",
    detail: ".6 oz Thickening Dryspun Texture Spray",
    freeWith: "With any Bumble and Bumble purchase",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-725490819498-1_350x.jpg?v=1668093611",
    name: "TOCCA",
    detail: "0.2 oz Giulietta Eau de Parfum",
    freeWith: "Free with any $80+ Tocca purchase",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-008080089847-1_350x.jpg?v=1668541463",
    name: "MOLTON BROWN",
    detail: "3.4 oz Delicious Rhubarb & Rose Bath & Shower Gel",
    freeWith: "Free with any $85+ Molton Brown purchase",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060367410411-1_350x.jpg?v=1668717006",
    name: "LEGOLOGY",
    detail: "1.69oz. Peach-Lite Super Lift For The Derrière",
    freeWith: "With any $90+ Legology purchase",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060305127821-1_350x.jpg?v=1668093572",
    name: "PHILIP KINGSLEY",
    detail: "2 oz Perfecting Primer Heat Protection Spray",
    freeWith: "Free with any $50+ Philip Kingsley purchase",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060280375996-1_350x.jpg?v=1668092869",
    name: "111SKIN",
    detail: "Contour Firming Mask Mini",
    freeWith: "Receive this gift with any 111SKIN purchase",
  },
  {
    Image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-090205025410-1_350x.jpg?v=1668093559",
    name: "ELTAMD",
    detail: "0.5 oz PM Therapy Facial Moisturizer",
    freeWith: "Free with any $100+ EltaMD purchase",
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
    giftDetail.setAttribute("href", "");
    giftDetail.textContent = "VIEW GIFT DETAILS";

    box.append(image, name, detail, freeWith, giftDetail);
    document.getElementById("box").append(box);
  });
}
