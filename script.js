let yam = 0;
let icy = 0;
function yoy() {
  yam++;
  if (yam != 100) {
    alert("yippee" + " you have " + yam + " yippees");
  } else {
    alert("...you can stop now... you have...100 yippees.");
  }
}
function convert() {
  var txt;
  if (confirm("convert 2 yippees to 1 icy?")) {
    if (yam >= 2) {
      yam = yam - 2;
      icy++;
      txt = "icy count = " + icy;
    } else {
      alert("you do not have enough yippees...");
      if(icy>0){
      txt = "icy count = "+icy;}else{
        txt=":["''
      }
    }
  } else {
    alert("...");
    if (icy > 0) {
      txt = "icy count = " + icy;
    } else {
      txt = "...";
    }
  }
  document.getElementById("convert").innerHTML = txt;
}
