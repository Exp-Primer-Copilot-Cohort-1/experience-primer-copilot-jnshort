function skillsMember() { 
    var x = document.getElementById("skillsMember");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("skillsMember").style.display = "flex";
    } else {
      x.style.display = "none";
    }
}