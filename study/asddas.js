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
    d.append(h)
    d.append(j)
    lastDiv.append(d);
}

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
    h1El.append(d);
}