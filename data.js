const a = location.href.split("?")[1]
const img = document.getElementById("img")
img.setAttribute("src",`../img/${a}.png`)

const staff = 
    {
        'dumbel': '#FFECE8',
        'hagridd':'#FFECE8',
        'lup':'#FFECE8',
        'mc':'#FFECE8',
        'umbr':'#D9F7F7',
        'snap':'#D9F7F7'
    }
const student =
    {
        'cho':'#DEFAFA',
        'dracoo':'#D9F7F7',
        'harry':'#FFECE8',
        'ron':'#FFECE8',
        'cegridd':'#FFFFDF',
        'hermo':'#FFECE8'
    }
const isStaff = staff[a]
if (isStaff) {
    document.body.style.backgroundColor = staff[a]
} else {
    document.body.style.backgroundColor = student[a]
}