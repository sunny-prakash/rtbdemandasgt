const adBlock = document.getElementById("advertise_block");
const animBlock = document.getElementById("sticky_anim");
const addList1 = document.getElementById("adList1");
const addList2 = document.getElementById("adList2");
const addList3 = document.getElementById("adList3");

const xhttp = new XMLHttpRequest();

function closeAd(elemId) {
    if (elemId === "advertise_block") {
        adBlock.style.display = "none";
    } else if (elemId === "sticky_anim") {
        animBlock.style.display = "none";
    }
}
xhttp.onload = function () {
    let data = JSON.parse(xhttp.responseText);
    addList1.innerHTML = `${data[0].id}<br/>${data[0].username}`;
    addList2.innerHTML = `${data[1].id}<br/>${data[1].username}`;
    addList3.innerHTML = `${data[2].id}<br/>${data[2].username}`;
};

xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
xhttp.send();
// 'https://jsonplaceholder.typicode.com/users'
