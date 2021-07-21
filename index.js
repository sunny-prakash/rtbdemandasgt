let adBlock = document.getElementById("advertise_block");
let animBlock = document.getElementById("sticky_anim");

function closeAd(elemId) {
    if (elemId === "advertise_block") {
        adBlock.style.display = "none";
    } else if (elemId === "sticky_anim") {
        animBlock.style.display = "none";
    }
}
