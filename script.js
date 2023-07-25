if (localStorage.getItem("ycount") == null) {
  var yam = 0;
  localStorage.setItem("ycount", yam);
} else {
  localStorage.getItem("ycount");
  yam = localStorage.getItem("ycount");
}
//my code is a surreal nightmare. even i have no idea of whats going on.
//IT WORKS!!! IT WORKS!!!
if (localStorage.getItem("icount") == null) {
  var icy = 0;
  localStorage.setItem("icount", icy);
} else {
  localStorage.getItem("icount");
  icy = localStorage.getItem("icount");
}
if (localStorage.getItem("pcount") == null) {
  var ponum = 0;
  localStorage.setItem("pcount", ponum);
} else {
  localStorage.getItem("pcount");
  ponum = localStorage.getItem("pcount");
}
var ah;
var txt;
function yoy() {
  yam++;
  localStorage.setItem("ycount", yam);
  document.getElementById("yoy").innerHTML =
    "yippee = " + localStorage.getItem("ycount");
  if (yam == null) {
    yam = 0; //if this stops working i will actually scream
  }
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
    if (icy == null) {
      icy = 0;
    }
    if (yam >= 2) {
      yam = yam - 2;
      icy++;
      localStorage.setItem("icount", icy);
      localStorage.setItem("ycount", yam);
      txt = "icy = " + icy;
      ah = "yippee = " + yam;
      document.getElementById("yoy").innerHTML = ah;
      document.getElementById("convert").innerHTML = txt;
    } else {
      alert("you do not have enough yippees...");
      if (icy > 0) {
        localStorage.setItem("icount", icy);
        txt = "icy = " + icy;
        ah = "yippee = " + yam;
      } else {
        localStorage.setItem("icount", icy);
        txt = "icy = " + icy;
        ah = "yippee = " + yam;
      }
    }
  } else {
    alert("...");
    if (icy > 0) {
      localStorage.setItem("icount", icy);
      txt = "icy = " + icy;
      ah = "yippee = " + yam;
    } else {
      localStorage.setItem("icount", icy);
      txt = "icy = " + icy;
      ah = "yippee = " + yam;
    }
  }
}
function buyPo() {
  var pota;
  if (confirm("buy a potato for 1 icy?")) {
    if (ponum == null) {
      ponum = 0;
    }
    if (icy >= 1) {
      --icy;
      localStorage.setItem("icount", icy);
      ponum++;
      localStorage.setItem("pcount", ponum);
      pota = "potato = " + ponum;
      txt = "icy = " + icy;
      document.getElementById("yoy").innerHTML = ah;
      document.getElementById("convert").innerHTML = txt;
      document.getElementById("buyPo").innerHTML = pota;
    } else {
      alert("you do not have enough icy...");
      if (icy > 0) {
        pota = "potato = " + ponum;
        txt = "icy = " + icy;
        ocument.getElementById("yoy").innerHTML = ah;
        document.getElementById("convert").innerHTML = txt;
        document.getElementById("buyPo").innerHTML = pota;
      } else {
        pota = "potato = " + ponum;
        txt = "icy = " + icy;
        ocument.getElementById("yoy").innerHTML = ah;
        document.getElementById("convert").innerHTML = txt;
        document.getElementById("buyPo").innerHTML = pota;
      }
    }
  } else {
    alert("...");
    if (pota > 0) {
      pota = "potato = " + ponum;
      txt = "icy = " + icy;
      ocument.getElementById("yoy").innerHTML = ah;
      document.getElementById("convert").innerHTML = txt;
      document.getElementById("buyPo").innerHTML = pota;
    } else {
      pota = "potato = " + ponum;
      txt = "icy = " + icy;
      localStorage.setItem("pcount", ponum);
      ocument.getElementById("yoy").innerHTML = ah;
      document.getElementById("convert").innerHTML = txt;
      document.getElementById("buyPo").innerHTML = pota;
    }
  }
  document.getElementById("yoy").innerHTML = ah;
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
//coding is like baking while blindfolded but also you have to make sure the oven knows how to turn on and the cupcake batter is real before you put it in the oven
function makeDark() {
  var element = document.body;
  element.classList.toggle("accessib");
}

//coding is like baking while blindfolded but also you have to make sure the oven knows how to turn on and the cupcake batter is real before you put it in the oven
