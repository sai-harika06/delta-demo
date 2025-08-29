let url="http://universities.hipolabs.com/search?name=";

let inp=document.querySelector("input");
let btn=document.getElementById("btn");
let ul = document.querySelector("ul");
btn.addEventListener("click",async function(){
    let country=inp.value;
    let colleges=await getColleges(country);
    list(colleges);
})
async function getColleges(country){
    let res=await axios.get(url+country);
    let college=await res.data
    return college;
}

function list(colleges){
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of colleges){
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}