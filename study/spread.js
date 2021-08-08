//전개 연산자 (Spread)

const fruits  = ['apple' , 'banana', 'orange']

//아래 주석 코드와 같이 동작한다 .
//배열의 아이템을 ,로 구분하여 전개한다.
//console.log('apple' , 'banana', 'orange')
console.log(...fruits);

//속성의 이름과 변수의 이름이 같다면
//아래와 같이 사용할 수 있다       
//화살표 함수에서 object 를 리턴한다면 () 로 감싼다.
const toObject = (a,b,c)=>({a,b,c})

 
//만약 파라미터로 넘어오는 값이 3개 이상이라면
//첫번째로 a , 두번쨰로 b 나머지는 c에 담긴다
//이를 rest parameter 라고 한다 .
const toObject2 = (a,b,...c)=>({a,b,c})

//배열의 데이터를 전개 연산자를 사용해 파라미터로 제공하고 있다.
console.log(toObject(...fruits))

