const a = location.href.split("?")[1]
const img = document.getElementById("img")
img.setAttribute("src",`../img/${a}.png`)