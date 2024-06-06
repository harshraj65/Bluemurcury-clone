
//********FUNCTION TO FETCH JSON DATA ****** */
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

    async function getTechProducts() {
        let SkinCare=[];
        let showPage = document.querySelector('#category');
        console.log(showPage);
        
            let response1 = await fetch("/projectData copy/jsondata/Skincare _ bluemercury.json");
            SkinCare = await response1.json();
            SkinCare = SkinCare.map(function(ele){
               ele.id = uuidv4();
               ele.qty = 1;
               return ele;
            })
           
      
      SkinCare.forEach(function(ele,ind){
        if(ind%3==0){
            ele.sell="Best Seller";
            ele.benefits= "Anti-Aging";
             ele.concern="Dark-Circle";
        }
        else{
            ele.sell="New Arrival";
            ele.benefits ="Brighting";
            ele.concern="Ancne And Blemishes";
        }
        // console.log(ele);
      })

      SkinCare.forEach(function(ele,ind){
        if(ind%3==0){
             ele.cleanser ="Eye Care";
        }
        else if(ind%7==0){
            
            ele.cleanser="Lip Care";
        }
        // console.log(ele);
      })
    
      displaySkinCare(SkinCare);
    
 
    //********************** DISPLAY PRODUCT FUNCTION*********************** */
   
    function displaySkinCare(data){
        data.map(function(ele,ind){
                     
            let div = document.createElement('div');
            div.setAttribute('id',"card");

            let wishList = document.createElement('div');
            wishList.setAttribute('id',"wishlist");

            let button = document.createElement('div');
            button.innerHTML=`<i class="fa-solid fa-heart"></i>`;
            button.addEventListener('click',function(){
                // console.log(event.target.parentNode.innerHTML + "hii");
                addToWishList(ele,ind);                                                    //WISHLIST EventListener
            });

            let box = document.createElement('div');
            let edition = document.createElement('p');
            edition.innerText = ele.edition;

            let category = document.createElement('p');
            category.innerText = ele.category;

            let div1 = document.createElement('div');
            div1.setAttribute('id',"card");

            let image_box = document.createElement('div');
            image_box.setAttribute('id',"image-box");

            let quickView = document.createElement('button');
            quickView.innerText ='QUICK VIEW';
             quickView.setAttribute('id',`quick_btn_${ele.id}`);
            quickView.setAttribute('class','quick-view');
            let tempEle = ele;

            quickView.addEventListener('mouseover',function(){
               document.getElementById(`quick_btn_${ele.id}`).style.display='block';  
                                                                                             
            })

            quickView.addEventListener('click',function(){
                displayAddToCartModal(tempEle);                                               //displayAddToCartPage EVENT HERE
            })

            //********************* QUICK_VIEW MouseOver FUNCTION STARTS HERE ******************** */

            let img = document.createElement('img');
            img.setAttribute('src',ele.Image_URL);
            img.setAttribute('id',` skincare_img_${ele.id}`);
            // let tempEle = ele;
            img .addEventListener('mouseover',function(ele){                          //QUICK-VIEW mouseover event here
                let btnID =ele.target.id.split("_")[2];
                document.getElementById(`quick_btn_${btnID}`).style.display='block'              
                
            })
            img.addEventListener('mouseout',function(ele){                               //QUICK-VIEW mouseover event here
                let btnID =ele.target.id.split("_")[2];
                // console.log(ele.id , ele.target.id);
                document.getElementById(`quick_btn_${btnID}`).style.display='none'                       
            })

             //********************* QUICK_VIEW MouseOver FUNCTION ENDS HERE ******************** */
           



            let product_data = document.createElement('div');
            product_data.setAttribute('class','product-data')
            let brand = document.createElement('p');
            brand.innerText = ele.brand;

            let name = document.createElement('p');
            name.innerText= ele.name;
            name.style.cursor='pointer';

            name.addEventListener('click',function(){
                window.scrollTo(0, 200);
                // function pageScroll() {
                //     window.scrollBy(0,1);
                //     scrolldelay = setTimeout(pageScroll,10);
                // }
                displayDetailsOfProducts(ele);                                 //display products detail event
                // name.addEventListener('click','autoScroll');
            });
           

            let price = document.createElement('p');
            price.innerText= '$ '+ele.price;

           box.append(edition,category);
           wishList.append(button,box);
           product_data.append(brand,name,price);
           image_box.append(quickView,img);
            div.append(wishList,image_box,product_data);

            document.querySelector('#container').append(div);
            //console.log(div);
        })
    }

    // *********************** Add to Cart *************/

    
 let cartDataArray = JSON.parse(localStorage.getItem("cart-items")) || [];
     
 function addToCartFunction(ele){
 
     if(cartDataArray.includes(ele)){  
          alert(`${ele.name} Already In the cart`); 
          event.target.style.cursor='pointer';       
     }
     else{
         alert(`${ele.name}Added To The Cart `);
         event.target.style.cursor='no-drop';   
         cartDataArray.push(ele);
         localStorage.setItem("cart-items",JSON.stringify(cartDataArray));
     }
 }
 

    //**************SORTING FUNCTION ************************* */

    let sorting = document.querySelector('#Select');
    sorting.addEventListener('change', sortByprice);
    //console.log(sorting);

    //*****************  CREATING DUPLICATE ARRAY TO MAINTAIN SEQUENCE OF ORIGINAL ARRAY  ************** */
    let arrSort = [...SkinCare];

    
    function sortByprice(){
       document.querySelector('#container').innerHTML = null;
       let selected = document.querySelector('#Select').value;
      
        if(selected == 'low-to-high'){
            arrSort.sort(function(a,b){
                return a.price - b.price;
            });
            displaySkinCare(arrSort);
        }
        else if(selected == 'high-to-low'){
            arrSort.sort(function(a,b){
                return b.price - a.price;
            });
            displaySkinCare(arrSort);
        }
        else if(selected == 'Featured'){
            displaySkinCare(SkinCare);
        }
        else{
           let filteredSell = SkinCare.filter(function(ele){
               return ele.sell == selected;
           })
           console.log(filteredSell);
           displaySkinCare(filteredSell);
        }  
            
    }

    /*************************addtoWishList******************* */

    let wishListArray = JSON.parse(localStorage.getItem("wish-list")) || [];
     
    function addToWishList(ele,ind){
    
        if(wishListArray.includes(ele)){
            event.target.style.webkitTextFillColor='#fff';
            console.log(wishListArray,ind);
            wishListArray.splice(ind,1);
            localStorage.setItem("wish-list",JSON.stringify(wishListArray));
             alert(`${ele.name}Removed from Wishlist`); 
             event.target.style.cursor='pointer';       
        }
        else{
            event.target.style.webkitTextFillColor='#12284c';
            alert(`${ele.name}Aded To Wishlist `);
            event.target.style.cursor='no-drop';   
            wishListArray.push(ele);
            localStorage.setItem("wish-list",JSON.stringify(wishListArray));
        }
        //console.log(wishListArray);
    }
    
    // ******************** function displayAddToCartModal module ************\\

function displayAddToCartModal(ele){

    document.getElementById(`quick_btn_${ele.id}`).style.display = 'none';

   let div =  document.createElement('div');
    div.setAttribute('id', 'product-desc')
   
    let div1 = document.createElement('div'); 
    let img = document.createElement('img');
    img.setAttribute('src',ele.Image_URL);

    let div2 = document.createElement('div');
    div2.setAttribute('id','checkoutBox');
    let icon = document.createElement('p');
    icon.innerHTML = `<span id="span"  onclick="document.querySelector('#add-to-cart-modal').style.display='none';"> <i class="fa fa-close" style="font-size:24px"></i></span>`;
    icon.setAttribute('id','cross-icon')
   
            
    let brand = document.createElement('h4');
    brand.innerText = ele.brand;

    let name = document.createElement('p');
    name.innerText= ele.name;

    let box = document.createElement('div');
    box.style.display="flex";
    
    let edition = document.createElement('h5');
     edition.innerText = ele.edition;
     edition.style.marginRight="30px";

    let category = document.createElement('h5');
    category.innerText = ele.category;

    
    let priceBox = document.createElement('div');
    let price = document.createElement('p');
    price.innerText= '$ '+ele.price;

    let cartlistBox = document.createElement('div');
    cartlistBox.setAttribute('id','cartListBox');

    let quantityBox = document.createElement('div');
    quantityBox.setAttribute('id','quantityBox');

    let qty = document.createElement('button');
    qty.innerText = ele.qty;
    qty.setAttribute('id','qty');

    let dec = document.createElement('button');
    dec.innerText = ' - ';
    dec.style.cursor='pointer';


    // ****************** Decrement Quantity of products********************\\

    dec.addEventListener('click', function(){
        let qty = document.getElementById('qty').innerText;
       if(Number(qty)>1){
        qty = Number(qty)-1;
       }
       ele.qty=qty;
        //  console.log(qty);
        document.getElementById('qty').innerText = qty;
    })

    let inc = document.createElement('button');
    inc.innerText = ' + ';
    inc.style.cursor='pointer';

     // ****************** Increament Quantity of products********************\\

    inc.addEventListener('click', function(){
        let qty = document.getElementById('qty').innerText;
        qty = Number(qty)+1;
       ele.qty=qty;
    // console.log((qty));
        document.getElementById('qty').innerText = qty;
    })


    

    let wishlistBox = document.createElement('div');
    wishlistBox.setAttribute('id','wishlistBox');

    let button = document.createElement('p');
    button.innerHTML=`<i class="fa-solid fa-2x fa-heart"></i>`;
    button.addEventListener('click',function(){
                addToWishList(ele);                            // &**************add to WishList ***************\\
    });

    let p = document.createElement('h4');
    p.innerText = 'WISHLIST';

 
    let viewDetail = document.createElement('button');
    viewDetail.innerText = 'VIEW FULL DETAIL';
    

    let description = document.createElement('p');
    description.innerText= ele.description;

    let AddToCartBtn = document.createElement('button');
    AddToCartBtn.setAttribute('id','addToCartBtn');
    AddToCartBtn.innerHTML = `<i class="fa-sharp fa-solid fa-cart-plus"></i> <span> ADD TO CART</span>`
    AddToCartBtn.style.cursor='pointer';
    // console.log(AddToCartBtn);
    AddToCartBtn.addEventListener('click',function(){
        addToCartFunction(ele);
    });
    div1.append(img);
    box.append(edition,category);
    //priceBox.append(price,span);
    cartlistBox.append(quantityBox,wishlistBox)
    div2.append(icon,brand,price,name,box,description,cartlistBox,AddToCartBtn);

    quantityBox.append(dec,qty,inc);
    wishlistBox.append(button,p);

   let viewDetailsBox = document.createElement('div');
    viewDetailsBox.setAttribute('id','viewDetailsBox');

    let hr = document.createElement('hr');
    
   let viewDetails= document.createElement('h3');
   viewDetails.innerText= 'VIEW FULL DETAILS';

   
   viewDetails.addEventListener('click', function(){
    console.log(ele);
    document.getElementById('products-details').innerHTML=null;
    document.getElementById('add-to-cart-modal').style.display='none';
    displayDetailsOfProducts(ele);
   })
    viewDetailsBox.append(viewDetails);
   div1.append(hr,viewDetails);
    div.append(div1,div2)
    document.querySelector('#add-to-cart-modal').append(div);
    document.getElementById('add-to-cart-modal').style.display='block';
}





//********************FUNCTION DISPLAY DETAILS OD PRODUCTS ******************** */
function displayDetailsOfProducts(ele){
    document.querySelector('#products-details').innerHTML = "";
    document.querySelector('#product_Info').innerHTML ="";

    let parent =  document.createElement('div');
    parent.style.display="flex";
    
   let div1 = document.createElement('div');
   div1.setAttribute('id','ViewImage');


    let div =  document.createElement('div');
   
      function showImagesOnCart(el) {
        let smallImgContainer = document.querySelector(".small-img-container>img:nth-child(1)").setAttribute("src",el.Image_URL);
        let selectedImgContainer = document.querySelector(".small-img-container>img:nth-child(1)").classList.add("selected-img");
        document.querySelector(".small-img-container>img:nth-child(2)").setAttribute("src",el.Image_URL1);
        document.querySelectorAll(".small-img-container img").forEach((el)=>{
            el.addEventListener("click",function(el){
                document.querySelectorAll(".small-img-container img").forEach((el)=>{
                    el.classList.remove("selected-img");
                    console.log(document.querySelectorAll(".small-img-container>img"));
                })
                el.target.classList.add("selected-img");
                 console.log(document.querySelector(".target-img-container>img"));
                document.querySelector(".target-img-container>img").setAttribute("src",el.target.src)
            })
        })
        // console.log(el.Image_URL);
        document.querySelector(".target-img-container").style.display='block';
        document.querySelector(".target-img-container>img").setAttribute("src",el.Image_URL1);
    }
    showImagesOnCart(ele);
   

     let brand = document.createElement('h4');
     brand.innerText = ele.brand;
 
     let name = document.createElement('p');
     name.innerText= ele.name;
 
     let box = document.createElement('div');
     box.setAttribute('id','box');
     box.style.display="flex";
     
     let edition = document.createElement('h5');
      edition.innerText = ele.edition;
      edition.style.marginRight="30px";
 
     let category = document.createElement('h5');
     category.innerText = ele.category;
 
     
     let priceBox = document.createElement('div');
     let price = document.createElement('p');
     price.innerText= '$ '+ele.price;

     let span = document.createElement('span');
 
     let anchor = document.createElement('a');
     anchor.innerText = 'Learn More';
     anchor.setAttribute('href',ele.link);
 
     let more = document.createElement('span');
     more.innerText=`4 interest-free payments of $81.25 with Klarna.`;

     let giftVoucher = document.createElement('div');
     giftVoucher.setAttribute('id','giftVoucher');
     
    let giftVoucherImage = document.createElement('img');
    giftVoucherImage.setAttribute('src','https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-850026597295-1.jpg?v=1671736674');


    let giftCard = document.createElement('div');
    let p = document.createElement('p');
    p.innerText ='Free Gift with purchase' ;

     let gift = document.createElement('p');
      gift.innerText = ele.gift;
      gift.style.marginRight="30px";
 
     let offer = document.createElement('h5');
     offer.innerText = ele.offer;
 
 
 
 
     let description = document.createElement('p');
     description.innerText= ele.description;
 
     let AddToCartBtn = document.createElement('button');
     AddToCartBtn.setAttribute('id','addToBagBtn');
     AddToCartBtn.style.cursor='pointer'
     AddToCartBtn.addEventListener('click',function(){
        addToCartFunction(ele);
     })

     let bagIcon = document.createElement('p');
     bagIcon.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;

     let AddToCart = document.createElement('p');
     AddToCart.innerText = 'ADD TO BAG';

     let ItemPrice = document.createElement('p');
     ItemPrice.innerText=ele.price;


     let CartBox = document.createElement('div');
     CartBox.setAttribute('id','CartBox');

    let cartlistBox = document.createElement('div');
     cartlistBox.setAttribute('id','cartListBox');
 
     let quantityBox = document.createElement('div');
     quantityBox.setAttribute('id','quantityBox');
 
     let qty = document.createElement('button');
     qty.innerText = ele.qty;
     qty.setAttribute('id','qty');
 
     let dec = document.createElement('button');
     dec.innerText = ' - ';
     dec.style.cursor='pointer';
     dec.addEventListener('click', function(){
         let qty = document.getElementById('qty').innerText;
        if(Number(qty)>1){
         qty = Number(qty)-1;
        }
        ele.qty=qty;
          //console.log(ele);
         document.getElementById('qty').innerText = qty;
     })
 
     let inc = document.createElement('button');
     inc.innerText = ' + ';
     inc.style.cursor='pointer';
     inc.addEventListener('click', function(){
         let qty = document.getElementById('qty').innerText;
         qty = Number(qty)+1;
        ele.qty=qty;
         // console.log(typeof(qty));
         document.getElementById('qty').innerText = qty;
     })
 
      let wishlistBox = document.createElement('div');
     wishlistBox.setAttribute('id','wishlistBox');
 
     let button = document.createElement('div');
     button.innerHTML=`<i class="fa-solid fa-2x fa-heart"></i>`;
     button.style.cursor='pointer';
     button.addEventListener('click',function(){
                 addToWishList(ele);
     });
 

    
   
     box.append(edition,category);
     priceBox.append(price,span);
     giftCard.append(p,gift,offer);
     giftVoucher.append(giftVoucherImage,giftCard);
     AddToCartBtn.append(bagIcon,AddToCart,ItemPrice);  
     quantityBox.append(dec,qty,inc);
     wishlistBox.append(button);
     cartlistBox.append(quantityBox,wishlistBox) 
     CartBox.append(AddToCartBtn,cartlistBox) 
     div1.append(brand,name,price,box,priceBox,description,giftVoucher,CartBox);
 
    
     let info = document.createElement('h3');
     info.innerText = 'Product Information';
    let para = document.createElement('p');
    para.innerText ='Uniquely designed to firm, hydrate, and smooth, this cult-classic duo is the perfect way to treat yourself or introduce a loved one to these amazing products. These two creams are all you need to keep your skin smooth and radiant. '
     
    let benefits=document.createElement('h3')
    benefits.innerText='Key Benefits';
    let para1 = document.createElement('p');
    para1.innerText = 'This gentle rinse off foaming cleanser fights this new enemy “germ warfare,” containing a unique and patented form of medical grade silver MicroSilver BG that offers powerful anti-bacterial and anti-viral properties that eliminate and defend against pathogens and environmental hazards, invisibly remaining on the skin surface where it is needed most.'
    console.log(document.querySelector('#product_Info'))
    document.querySelector('#product_Info').append(info,para,benefits,para1);
    //div.append(div1,div2);
    parent.append(div1);
   
     document.querySelector('#products-details').append(div1);
    console.log(document.querySelector('.cart-img-container').innerHTML)

 }

let selectedCategory = document.querySelector('.category').innerText;
console.log(selectedCategory);


 let selectedBrand = document.querySelector('#brands');
//  console.log(selectedBrand);
 selectedBrand.addEventListener('click', HandleByFilterByBrands);

 function HandleByFilterByBrands(){
    console.log(selectedCategory);
    document.querySelector('#container').innerHTML=null;
   let selected =event.target.innerText;
   if(selected == 'All Brands'){
    displaySkinCare(SkinCare);
   }
   else{
    let filteredBrand = SkinCare.filter(function(ele){
        return ele.brand==selected;
      })
    //   console.log(filteredBrand);
    //   displaySkinCare(filteredBrand);
   
   if(filteredBrand.length>0){
    displaySkinCare(filteredBrand);
    }
    else{
        let div = document.createElement("div");
    let h2 =  document.createElement("h2");
    h2.innerText ="Sorry! Not Available";
    h2.style.textAlign="center";
    div.style.width='60%';
    div.style.margin='auto';

        let img =document.createElement("img");
        img.setAttribute('src',"https://www.pngfind.com/pngs/m/272-2727925_continue-shopping-empty-cart-png-transparent-png.png");
        div.append(h2,img);
        document.querySelector('#container').append(div);
    }

    }
  
 }
 


 let selectedPrice = document.querySelector('#price');
  console.log(selectedPrice);
  selectedPrice.addEventListener('click', FilterByPrice)

  let priceSort = [...SkinCare];
function  FilterByPrice() {
    document.querySelector('#container').innerHTML=null;
    let selected =event.target.innerText;
    let filteredPrice =[];
    //     SkinCare.forEach(function(ele){
    //       ele.qty = 1;
    //   })
         if(selected == '$500+' || selected == "All Products"){
            displaySkinCare(SkinCare);
         }
         else{
             if(selected == '$0 To $50'){
                let filteredPrice = priceSort.filter(function(ele){
                    return ele.price>0 && ele.price<=50;
                })
                
             }
             else if(selected == '$50 To $100'){
                 filteredPrice = priceSort.filter(function(ele){
                    return ele.price>50 && ele.price<=100;
                })
                
             }
             else if(selected == '$100 To $200'){
                 filteredPrice = priceSort.filter(function(ele){
                    return ele.price>100 && ele.price<=200;
                })
                
             }
             else if(selected == '$200 To $ 500'){
                 filteredPrice = priceSort.filter(function(ele){
                    return ele.price>200 && ele.price<=500;
                })
                // 
             }
             if(filteredPrice.length>0){
                displaySkinCare(filteredPrice);
            }else{
                let div = document.createElement("div");
               let h2 =  document.createElement("h2");
               h2.innerText ="Sorry! Not Available";
               h2.style.textAlign="center";
               div.style.width='60%';
               div.style.margin='auto';

                let img =document.createElement("img");
                img.setAttribute('src',"https://www.pngfind.com/pngs/m/272-2727925_continue-shopping-empty-cart-png-transparent-png.png");
                div.append(h2,img);
                document.querySelector('#container').append(div);
        
        
            }
             
         }       
     }   
    
     
    
     let selectedConcern = document.querySelector('#concern');
//  console.log(selectedBrand);
    selectedConcern.addEventListener('click', HandleByFilterByselectedConcern);

    function HandleByFilterByselectedConcern(){
        document.querySelector('#container').innerHTML=null;
        let selected =event.target.innerText;
        let filteredConcern = SkinCare.filter(function(ele){
            return ele.concern==selected;
        })
        if(filteredConcern.length>0){
            displaySkinCare(filteredConcern);
        }else{
            let div = document.createElement("div");
           let h2 =  document.createElement("h2");
           h2.innerText ="Sorry! Out Of Stock";
           h2.style.textAlign="center";
           div.style.width='60%';
           div.style.margin='auto';
            let img =document.createElement("img");
            img.setAttribute('src',"https://www.pngfind.com/pngs/m/272-2727925_continue-shopping-empty-cart-png-transparent-png.png");
            div.append(h2,img);
            document.querySelector('#container').append(div);
    
    
        }
  
 }



 let selectedBenefit = document.querySelector('#benefits');
//  console.log(selectedBrand);
selectedBenefit.addEventListener('click', HandleByFilterByselectedBenefit);

 function HandleByFilterByselectedBenefit(){
    document.querySelector('#container').innerHTML=null;
    let selected =event.target.innerText;
    let filteredBenefits = SkinCare.filter(function(ele){
        return ele.benefits==selected;
    })
    console.log(filteredBenefits);
    if(filteredBenefits.length>0){
        displaySkinCare(filteredBenefits);
    }else{
        let div = document.createElement("div");
       let h2 =  document.createElement("h2");
       h2.innerText ="Sorry! Out Of Stock";
       h2.style.textAlign="center";
       div.style.width='60%';
       div.style.margin='auto';
        let img =document.createElement("img");
        img.setAttribute('src',"https://www.pngfind.com/pngs/m/272-2727925_continue-shopping-empty-cart-png-transparent-png.png");
        div.append(h2,img);
        document.querySelector('#container').append(div);


    }
    
 }

//  let selectedCleanser = document.querySelector('#cleansers-list');
// //  console.log(selectedBrand);
// selectedCleanser.addEventListener('click', HandleByFilterByselectedCleanser);

//  function HandleByFilterByselectedCleanser(){
//     document.querySelector('#container').innerHTML=null;
//     let selected =event.target.innerText;
//     let filteredCleanser = SkinCare.filter(function(ele){
//         console.log(selected==ele.cleanser);
//         return ele.cleanser==selected;
//     })
//     console.log(filteredCleanser);
//     if(filteredCleanser.length>0){
//         displaySkinCare(filteredCleanser);
//     }else{
//         let div = document.createElement("div");
//        let h2 =  document.createElement("h2");
//        h2.innerText ="Sorry! Out Of Stock";
//        h2.style.textAlign="center";
//        div.style.width='60%';
//        div.style.margin='auto';
//         let img =document.createElement("img");
//         img.setAttribute('src',"https://www.pngfind.com/pngs/m/272-2727925_continue-shopping-empty-cart-png-transparent-png.png");
//         div.append(h2,img);
//         document.querySelector('#container').append(div);
//     }
    
//  }

 
    
}
  getTechProducts();

 