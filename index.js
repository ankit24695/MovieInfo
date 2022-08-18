let url = "http://www.omdbapi.com/?i=tt3896198&apikey=100c4aaf"


let form = document.querySelector('#movieForm');
form.addEventListener("submit",myfunction)

function myfunction(){
    event.preventDefault();


    let movie = form.movie.value;


    url1 = url+"&t="+movie

async function getmoviename(){
try{
let user = await fetch(url1);
let mov = await user.json();
// let imdb = mov.imdbRating
// recom(imdb)
show(mov)


}
  catch(err){
   console.log(err)
}
}
getmoviename();
}

let parent = document.querySelector('#show');

function show(data){
    parent.innerHTML="";
    console.log(data)
    let div = document.createElement('div');


  let img = document.createElement('img');
  img.src = data.Poster
  img.style.display="block";

let h2 = document.createElement("h2")
h2.innerText =data.Title

let p = document.createElement("p")
p.innerText=data.Plot

let h4 = document.createElement("h4")
h4.innerText =data.Released

div.append(img, h2, p, h4)

parent.append(div)
}

// function abc(){

//     let img = document.createElement('img');
//     img.src = "https://media2.giphy.com/media/1VT3UNeWdijUSMpRL4/giphy.webp?cid=ecf05e47vx60vrdr6673bfgp8q8td60zro43zbmc04p33k1w&rid=giphy.webp&ct=g"

//     parent.append(img)
// }

function recom(imdb){
    url2 = url+"&imdbRating="+imdb

    async function getmovie(){
        try{
        let user = await fetch(url2);
        let mov = await user.json();
        console.log(mov)
        
        
        }
          catch(err){
           abc()
        }
        }



}

async function shoesearch(q){

    let url = `http://www.omdbapi.com/?apikey=100c4aaf&s=${q}`

try{
 
    let a = await fetch(url);

    let data = await a.json();

    return data.Search



}
catch(err){
    console.log(err)
}


}

let par = document.querySelector('#sug');

function showsug(data){
par.innerHTML=`<div id="showsug"></div>`;

let parm = document.querySelector('#showsug');


if(data===undefined){
    return false;
}
data.forEach(function(el){
    let p = document.createElement('p');
    p.innerText = el.Title;
    p.style.cursor = "pointer"
    p.style.backgroundColor = "lightblue"
    p.style.color="grey"
    p.addEventListener("click",function(){
        regfun(el)
    })

    parm.append(p)

})

}


function regfun(el){

    let input = document.querySelector('#movie');
    input.value = el.Title

}


async function main(){

 let query = document.querySelector('#movie').value;

 let x = shoesearch(query);

let y = await x;

showsug(y);

}


let id;

function debounce(func,delay){
if(id){
    clearTimeout(id)
}
id = setTimeout(function(){
   func()
},delay)

}