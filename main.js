var i;
var inc;
var inre;
var wrap = document.querySelector(".feature-wrapper");
var poster = document.querySelectorAll(".feature-poster-bottom");
var postend = document.querySelectorAll(".feature-poster-top");
var rtnbtn = document.querySelectorAll(".return-button");

function openPoster(id) {
  wrap.style.visibility = "hidden";
  wrap.style.top = "8px";
  poster[id].style.visibility = "visible";
  poster[id].style.top = "8px";
  poster[id].style.left = "50%";
  poster[id].style.transform = "translatex(-50%)";
  poster[id].style.opacity = "1";
  inc = id;
  setTimeout(openPostend, 2000);
}
function openPostend(id) {
  if (inc > -1) {
    postend[inc].style.position = "fixed";
    postend[inc].style.top = "8px";
    wrap.style.position = "fixed";
    wrap.style.position = "fixed";
    wrap.style.top = "8px";
  } else {
    postend[inc].style.position = "absolute";
    postend[inc].style.top = "8px";
    wrap.style.position = "absolute";
    wrap.style.top = "8px";
  }
  poster[inc].style.visibility = "hidden";
  poster[inc].style.opacity = "0";
  postend[inc].style.display = "block";
  setTimeout(resetPoster, 1000);
}
function resetPoster(id) {
  wrap.style.position = "absolute";
  wrap.style.top = "8px";
  postend[inc].style.position = "absolute";
  postend[inc].style.top = "8px";
  poster[inc].style.left = "100%";
  poster[inc].style.transform = "translatex(0%)";
}
function resetPostend(ids) {
  poster[incre].style.top = "8px";
  postend[incre].style.display = "none";
  postend[incre].style.left = "50%";
  postend[incre].style.transform = "translatex(-50%)";
}
function clearPostend(ids) {
  incre = ids - 10;
  poster[incre].style.top = "8px";
  postend[incre].style.left = "0%";
  postend[incre].style.transform = "translatex(-100%)";
  wrap.style.visibility = "visible";
  setTimeout(resetPostend, 1100);
}
