
//assign()
//Object 클래스의 static 메서드이다 . 
//target 객체(param1)에 sorce 객체(param2)의 속성을 덮어씌운다.
//source는 여러개 일 수 있다.
//리턴되는 객체는 target에 할당된다.
const target = {a:1 , b:2}
const source = {b:4 , c:6}

Object.assign(target,source);

console.log(target)

//예시 1

const userAge = {
    name: 'ugo',
    age:85
}
const userEmail = {
    name: 'ugo',
    email:'ugo@test.com'
}

const target2 = Object.assign(userAge,userEmail)

console.log(target2)
console.log(userAge)
console.log(target2 === userAge)


//새로운 객체를 만들어서 복사하고 싶다면 아래처럼 
//빈 배열을 첫번째 인자로 주면된다.
const target3 = Object.assign({},userAge,userEmail)
console.log(target3)
console.log(target3 === target2)


//Object.keys()
//객체 데이터 안의 키값을 배열의 형태로 리턴한다
const user = {
    name: 'ugo',
    age:90,
    email:'test@test.com'
}

const keys = Object.keys(user)
console.log(keys)

//오브젝트의 인덱싱은 배열과 다르게 키값으로 한다. 
const email = user['email']
console.log(email);

//벨류를 꺼내서 배열로 만든다.
const values = keys.map(key=> user[key])
console.log("value=",values)