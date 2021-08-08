//데이터 불변성 (immutability)

let a = {a:1 , b:2}

let b = {a:1 , b:2}

//같은 주소 값을 가리키게 된다

b = a;

console.log(a === b)

b.a = 10;

// 같은 주소 값을 가리키기 때문에 
// b의 값을 바꾸면 a값도 변한다.
console.log(a.a)