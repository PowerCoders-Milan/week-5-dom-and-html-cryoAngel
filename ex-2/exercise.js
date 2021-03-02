function getAttributes() {
   
var a = document.getElementById("pwcdr");
var type = a.getAttribute("type");
var hreflang = a.getAttribute("hreflang");
var rel = a.getAttribute("rel");
var target = a.getAttribute("target");
document.getElementById("pwcdr").innerHTML = type;
document.getElementById("pwcdr").innerHTML = hreflang;
document.getElementById("pwcdr").innerHTML = rel;
document.getElementById("pwcdr").innerHTML = target;
}
