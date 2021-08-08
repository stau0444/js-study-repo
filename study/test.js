//변수의 유효범위

//변수는 블록레벨의 유효범위를 갖는다 

function scope1(){
    if(true){
        const a = 'hi';
        console.log(a)
    }
}

function scope2(){
    if(true){
        console.log(a)
    }
    const a = 'hi';
}

function scope3(){
    if(true){
        const a = 'hi';
    }
    console.log(a)
}

function scope4(){
    if(true){
        console.log(a)
    }
    const a = 'hi';
}