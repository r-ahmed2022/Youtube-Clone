

function openSlidingDiv() {
  document.getElementById("sliding-menu-items").style.width = "20%";
  document.getElementById("container").style.backgroundColor="black";
  document.body.style.color = "white";
  document.getElementsByClassName('mic').style.backgroundColor ="white";

}

function closeSlidingDiv() {
  document.getElementById("sliding-menu-items").style.width = "0%";
  document.getElementById("container").style.backgroundColor="white";
  document.body.style.color = "black";
  document.getElementById("icon-section").style.backgroundColor="white";
}
