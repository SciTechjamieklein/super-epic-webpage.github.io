if (localStorage.getItem("ycount") == null) {
  var yam = 0;
  localStorage.setItem("ycount", yam);
} else {
  localStorage.getItem("ycount");
  yam = localStorage.getItem("ycount");
  document.getElementById("yoy").innerHTML =
    "yippee = " + localStorage.getItem("ycount");
}
//my code is a surreal nightmare. even i have no idea of whats going on.
//IT WORKS!!! IT WORKS!!!
if (localStorage.getItem("icount") == null) {
  var icy = 0;
  localStorage.setItem("icount", icy);
} else {
  localStorage.getItem("icount");
  icy = localStorage.getItem("icount");
  document.getElementById("convert").innerHTML =
    "icy = " + localStorage.getItem("icount");
}
if (localStorage.getItem("pcount") == null) {
  var ponum = 0;
  localStorage.setItem("pcount", ponum);
} else {
  localStorage.getItem("pcount");
  yam = localStorage.getItem("pcount");
  document.getElementById("buyPo").innerHTML =
    "potato = " + localStorage.getItem("pcount");
}
var ah;
var txt;
function yoy() {
  yam++;
  localStorage.setItem("ycount", yam);
  document.getElementById("yoy").innerHTML ="yippee = " + localStorage.getItem("ycount");
  if (yam != 100) {
    alert(
      "yippee" + " you have " + localStorage.getItem("ycount") + " yippees"
    );
    document.getElementById("yoy").innerHTML =
      "yippee = " + localStorage.getItem("ycount");
  } else {
    alert("...you can stop now... you have...100 yippees.");
    document.getElementById("yoy").innerHTML =
      "yippee = " + localStorage.getItem("ycount");
  }
  document.getElementById("yoy").innerHTML =
    "yippee = " + localStorage.getItem("ycount");
  console.log(yam + " yam");
  console.log(localStorage.getItem("ycount") + " storage");
}
function convert() {
  if (confirm("convert 2 yippees to 1 icy?")) {
    if(ponum==null){
      ponum=0;
    }
    if (icy == null){
      icy=0;
    }
    if (yam >= 2) {
      yam = yam - 2;
      icy++;
      localStorage.setItem("icount", icy);
      txt = "icy = " + localStorage.getItem("icount");
      ah = "yippee = " + yam;
      localStorage.setItem("ycount", yam);
    } else {
      alert("you do not have enough yippees...");
      if (icy > 0) {
        localStorage.setItem("icount", icy);
        txt = "icy = " + localStorage.getItem("icount");
        ah = "yippee = " + yam;
      } else {
        localStorage.setItem("icount", icy);
        txt = "icy = " + localStorage.getItem("icount");
        ah = "yippee = " + yam;
      }
    }
  } else {
    alert("...");
    if (icy > 0) {
      localStorage.setItem("icount", icy);
      txt = "icy = " + localStorage.getItem("icount");
      ah = "yippee = " + yam;
    } else {
      localStorage.setItem("icount", icy);
      txt = "icy = " + localStorage.getItem("icount");
      ah = "yippee = " + yam;
    }
  }
  document.getElementById("yoy").innerHTML = ah;
  document.getElementById("convert").innerHTML = txt;
}
function buyPo() {
  var pota;
  if (confirm("buy a potato for 1 icy?")) {
    if (icy >= 1) {
      --icy;
      localStorage.setItem("icount", icy);
      ponum++;
      localStorage.setItem("pcount", ponum);
      pota = "potato = " + localStorage.getItem("pcount");
      txt = "icy = " + localStorage.getItem("icount");
    } else {
      alert("you do not have enough icy...");
      if (icy > 0) {
        pota = "potato = " + localStorage.getItem("pcount");
        txt = "icy = " + localStorage.getItem("icount");
      } else {
        pota = "potato = " + localStorage.getItem("pcount");
        txt = "icy = " + localStorage.getItem("icount");
      }
    }
  } else {
    alert("...");
    if (pota > 0) {
      pota = "potato = " + localStorage.getItem("pcount");
      txt = "icy = " + localStorage.getItem("icount");
    } else {
      pota = "potato = " + localStorage.getItem("pcount");
      txt = "icy = " + localStorage.getItem("icount");
    }
  }
  document.getElementById("buyPo").innerHTML = pota;
  document.getElementById("convert").innerHTML = txt;
}
console.log(
  "hi there. are you gonna cheat and give yourself yippees or icy or potato?"
);
console.log("that is fine with me! :3");
console.log(
  "have fun in Inspect! if you want, you can look at my mess of code while youre here."
);
function erase() {
  if (confirm("are you sure you want to clear all of your progress?")) {
    localStorage.clear();
    location.reload();
  }
}
