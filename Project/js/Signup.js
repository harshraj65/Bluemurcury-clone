var arr=JSON.parse(localStorage.getItem("account-data")) || [];
document.querySelector("form").addEventListener("submit",myform);
function myform(){
  event.preventDefault();
  var obj={
     name:document.getElementById("name").value,
     email:document.getElementById("email").value,
     pass:document.getElementById("password").value,
  }
  arr.push(obj);
  localStorage.setItem("account-data",JSON.stringify(arr));
  alert("Signup success");
  // window.location.href="signin.html";
  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("password").value="";
}
var xshop=document.getElementById("dropdown_shop");
function showshop(){
  xevent.style.display="none";
  xshop.style.display="block";
  xshop.style.display="flex";
  xshop.display.border.color="1px solid crimson"
}
function hideshop(){
  xshop.style.display="none";
}

var xnew=document.getElementById("new_box");
function shownew(){
  xshop.style.display="none";
  xbrand.style.display="none";
  xreward.style.display="none";
  xroutine.style.display="none"; 
  xevent.style.display="none";
  xnew.style.display="block";
  xnew.display.border.color="1px solid crimson"
}

function hidenew(){
  xnew.style.display="none";
}

var xbrand=document.getElementById("brand_box");
function showbrand(){
  xnew.style.display="none";
  xevent.style.display="none";
  xexplore.style.display="none";
  xreward.style.display="none";
  xroutine.style.display="none"; 
  xbrand.style.display="block";
  
}

function hidebrand(){
  xbrand.style.display="none";
}




var xexplore =document.getElementById("explore_box");
function showexplore(){
  xbrand.style.display="none";
  xnew.style.display="none";
  xreward.style.display="none";
  xevent.style.display="none";
  xroutine.style.display="none"; 
  xexplore.style.display="block";
  
}

function hideexplore(){
  xexplore.style.display="none";
}



var xevent =document.getElementById("event_box");
function showevent(){
  xbrand.style.display="none";
  xnew.style.display="none";
  xreward.style.display="none";
  xroutine.style.display="none"; 
  xevent.style.display="block";

  
  
}

function hideevent(){
  xevent.style.display="none";
}


var xreward =document.getElementById("reward_box");
function showreward(){
  xbrand.style.display="none";
  xnew.style.display="none";
  xevent.style.display="none";
  xexplore.style.display="none";
  xroutine.style.display="none"; 
  xreward.style.display="block"; 
}

function hideevent(){
  xevent.style.display="none";
}



var xroutine =document.getElementById("routine_box");
function showroutine(){
  xbrand.style.display="none";
  xnew.style.display="none";
  xevent.style.display="none";
  xexplore.style.display="none";
  xreward.style.display="none";
  xroutine.style.display="block"; 
}

function hideroutine(){
  xroutine.style.display="none";
}
