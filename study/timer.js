
const timer = setTimeout(()=>{console.log('hi there')},3000)


document.querySelector('p').addEventListener('click' , ()=>{
    console.log('stoped')
    clearTimeout(timer)
})


const timer = setInterval(()=>{console.log('hi there')},3000);

document.querySelector('p').addEventListener('click',()=>{
    clearInterval(timer)
})