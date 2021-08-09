//구조 분해 할당 (Destructuring assignment)
//비구조화 할당 

const user = {
    name:'ugo',
    age:'85',
    email:'test@test.com',
    address:'japan'
}

//user 라는 객체를 분해해서 변수에 할당하고 있다 
//만약 객체내에 존재하지 않는 필드일 수 있다면 
//default 값을 줄 수 있다
//원하는 변수명으로 바꿀 수도 있다.(name : nome)

const { name:nome , age , email , address = 'KOREA' } = user;

console.log(nome)
console.log(`${age}`)
console.log(`${email}`)

//존재하지 않아서 undifined 가 출력된다
console.log(`${address}`)


//배여도 구조분해 할당이 가능하다 . 
//구조 분해 할당 변수 안에 순서대로 들어간다
const nums = [1,2,3,4]
//const [a,b,c,d] = nums
//console.log(a,b,c,d)

//특정 아이템만 받아오고 싶다면
//아이템 이전에 존재하는 아이템들의 갯수만큼 , 을 찍어준다
const [,b] = nums
console.log(b);