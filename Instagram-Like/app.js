let cardimg = document.getElementById("card-img");
let imgoverlay = document.getElementById("imgoverlay");
let heart = document.getElementById("heart");
cardimg.ondblclick = () => {
  imgoverlay.style.display = "flex";
  heart.classList.toggle("liked");
};

setInterval(function () {
  if (imgoverlay.style.display === "flex") {
    imgoverlay.style.display = "none";
  }
}, 1000);
