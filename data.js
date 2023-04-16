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

const setData = (data) => {
    const houseImage = document.getElementById('houseLogo');
    const innerCard = document.getElementById('inner-card');
    const card = document.getElementById('container');
    const photo = document.getElementById('photo');
    const name = document.getElementById('name');
    name.innerHTML = data.name;
    if (data.image && data.image != "") {
        photo.setAttribute('src', data.image)
    } else {
        photo.setAttribute('src', `../home/staff/${Number(location.href.split('?')[1].split(':')[1]) + 1}.png`)
    }
    photo.style.borderRadius = '5px'
    houseImage.setAttribute('src', `./${data.house}.png`)
    card.style.background = houses[data.house];
    innerCard.style.background = houses[data.house]
    setInfo(data)
}

const setInfo = (data) => {
    const container = document.querySelector('#detail').children;
    for(let i=0; i<container.length; i++) {
        const properties = container.item(i).id;
        const element = document.getElementById(properties);
        const newElement = document.createElement('div');
        if (properties !== 'wand') {
            newElement.innerHTML = data[properties];
        } else {
            newElement.innerHTML = `${data[properties].wood}, ${data[properties].core}`
        }
        element.appendChild(newElement)
   }
}