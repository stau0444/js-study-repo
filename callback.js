//콜백(Callback)
//함수의 인수로 사용되는 함수 

//setTimeout에서 첫번째인자인 함수는 콜백 함수이다.
//setTimeout(함수 , 시간)


//파라미터로 받은 함수를 함수 안에서 호출할 수 있다.
function timeout(cb){
    setTimeout(()=>{
        console.log('hihi')
        cb()        
    },3000)
}

//함수를 파라미터로 넘기고 있다 . 
//함수내에 로직 이후에 원하는 함수를 실행시킬 수 있다 .
//특정 실행 시점을 보장하는 용도로 활용된다.
timeout(()=>{
    console.log("done")
})


