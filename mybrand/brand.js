var xshop=document.getElementById("dropdown_shop");
function showshop(){
  xevent.style.display="none";
  xnew.style.display="none";
  xshop.style.display="block";
  xshop.style.display="flex";
  xshop.display.border.color="1px solid black"
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

function hidereward(){
  xreward.style.display="none";
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




const newsletter_emails = [];


function overlaymsg(e) {
    e.preventDefault();
    var mail = document.getElementById("newsletter-mail-input").value;
    console.log(mail)
    if (mail.trim() == "") {
        alert("Please do not leave the field blank");
        console.log("Here")
        return 0;
    } else {
        newsletter_emails.push(mail);
        localStorage.setItem('newsletter-list', JSON.stringify(newsletter_emails));
        document.getElementById("success-msg").innerText = null;
        document.getElementById("success-msg").innerText = `${mail} you will soon hear from us.`;
        document.getElementById("mail-submission-success-overlay").style.display = "block";
        mail = "";
    }
}

function overlayMsgHide() {
    mail = "";
    document.getElementById("mail-submission-success-overlay").style.display = "none";   
}


