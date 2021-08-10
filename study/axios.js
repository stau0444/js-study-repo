import axios from 'axios'

const body = document.querySelector('body')

const h1El = document.querySelector('h1');

const addBtn =  document.querySelector('.addButton');

const toTopBtn = document.querySelector('.toTopBtn')
toTopBtn.addEventListener('click',()=>{
    window.scrollTo(0,document.querySelector('body').offsetHeight)
})

const searchBtn = document.querySelector('.searchBtn')
searchBtn.addEventListener(
    'click',
    ()=>{
        const contents = document.querySelectorAll('.content')
        console.log(contents)
        if(contents.length !== 0){
            contents.forEach(c=>c.remove())
        }
        keyword = document.querySelector('input').value;
        fetchMovies(keyword);
    }
)

const lastContentNotice = document.createElement('button')
lastContentNotice.innerText="마지막 컨텐츠 입니다."

const apikey = 'f1ab98ec'

let keyword = "";

let totalPage = 0;

let lastDiv = null;

let clicked = 2;

fetchMovies(0)
addContent();

function addContent(){
    addBtn.addEventListener('click',()=>{
        const divs = document.querySelectorAll('.content');
        lastDiv = divs[divs.length-1]
        axios.get('https://www.omdbapi.com/?apikey='+apikey+'&s='+(keyword == null ?'parasite':keyword)+'&page='+clicked)
            .then((resp)=>{
                makeContentEls(resp,false);            
                if(totalPage == clicked){
                    addBtn.remove();
                    lastDiv.append(lastContentNotice)
                }
            }
        );
        clicked++
    })
}


function fetchMovies(keyword){    
    axios.get('https://www.omdbapi.com/?apikey='+apikey+'&s='+(keyword == null ?'parasite':keyword))
         .then((resp)=>{
            if(resp.data.Error !== undefined && resp.data.Error !== "Too many results."){
                const errorMsg = document.createElement('p');
                errorMsg.innerText = 'ERROR: '+resp.data.Error
                body.append(errorMsg)
                setTimeout(()=>errorMsg.remove(),3000)
            }
             makeContentEls(resp,true);
         })         
}


function makeContentEls(resp,isFirst){
    totalPage = Math.ceil(resp.data.totalResults/10);
    for(let i=0; i<resp.data.Search.length; i++){
        const d = document.createElement("div")
        d.classList.add('content')
        const h = document.createElement("h4")
        h.innerText = resp.data.Search[i].Title;
        const j = document.createElement("img")
        if(resp.data.Search[i].Poster == "N/A"){
            resp.data.Search[i].Poster = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
        }
        j.src = resp.data.Search[i].Poster;
        j.width = 240
        d.append(h)
        d.append(j)
        if(isFirst){
            h1El.append(d);
        }else{
            lastDiv.append(d);
        }
    }
}

