const select = location.href.split('?');
const imga = select[1];

const image = document.getElementById('img');
image.setAttribute('src', `./${img}.png`)

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
const fetchstudentData = async( ) =>
{
    const res = await fetch('https://hp-api.onrender.com/api/characters/students');
    const data = await res.json();
    console.log(data);
    return data;
}
fetchstudentData()

const fetchstaffdata = async ( ) =>

{
    const resa = await fetch('https://hp-api.onrender.com/api/characters/staff');
    const dataa = await resa.json();
    console.log(dataa);
    return dataa;
}
fetchstaffdata()
