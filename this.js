//this는 인스턴스 내에서 자기 자신을 가리킨다  , 
//일반 함수는 호출 위치에 따라 this 가 정의되고
//화살표 함수는 자신이 선언된 함수 범위에서 this가 정의된다.

const ugo ={
    name:'ugo',
    normal: function(){
        console.log(this.name)
    },
    arrow: ()=>{
        console.log(this.name)
    }
}

ugo.normal();
ugo.arrow();


//hwang의 normal과 arrow는 ugo의 normal 과 arrow의 데이터를 참조하고 있다.
const hwang = {
    name: 'hwang',
    normal: ugo.normal,
    arrow: ugo.arrow
}

//일반함수는 호출위치에서 this가 정의되기 떄문에 hwang 이 출력된다
hwang.normal();
//화살표 함수는 자신이 선언된 함수 범위에서 this가 정의된다.
hwang.arrow();




//생성자 함수에서의 this

function User(name){
    this.name = name
}

User.prototype.normal = function(){
    console.log(this.name);
}

User.prototype.arrow = () =>{
    console.log(this.name);
}

const user = new User('ugo','hwang');

ugo.normal();
ugo.arrow();


//함수 내에서 this

const timer = {
    name: 'timer',
    time: 1,
    timeout : function(){
        // setInterval(()=>{
        //     console.log(this.time)
        //     this.time++
        // },1000)
    }
}
timer.timeout();
