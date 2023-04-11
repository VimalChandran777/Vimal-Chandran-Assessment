localStorage,setItem('name','Dumbledore');

const verify=()=>{
    const name =localStorage.getitem('name');
    const input=document.getElementById('input')
    if (name === input.value)
    {
        location.pathname="/index.html"
    }
    else
    {
         const root =document.getElementById1('root')
         const div = document.createElement('div')
         div.innerHTML="Invalid credintial"
         root.appendChild(div)
    }
}

const logo =document.getElementsByid('logo');
logo.addEventListener('click',() =>
{
    logo,setAttribute('src','./Group 67.png')
})