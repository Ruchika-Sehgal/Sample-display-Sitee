document.getElementsByClassName("logo")[0].onclick = function () {
    window.location.href = "https://www.yahoo.com";
}
document.getElementsByClassName("staticHL")[0].onclick = function () {
    window.location.href = "https://www.yahoo.com";
}
var introExploreBtn = document.getElementById("intro3").firstChild
introExploreBtn.onclick = function () {
    window.location.href = "https://www.google.com";
}
introExploreBtn.style.cursor = "pointer";

let observer = new IntersectionObserver(entries => {
    let header = document.getElementsByClassName("staticH")[0];
    document.querySelector('.hiddenHeader').appendChild(header);
    header.style.display = "none";
})
observer.observe(document.querySelector("#bg-setter"));
let normalizingObs = new IntersectionObserver(function (entries) {
    let header = document.getElementsByClassName("staticH")[0];
    document.body.appendChild(header);
    header.style.display = "flex";
})
normalizingObs.observe(document.querySelector("#FeatureP"));

