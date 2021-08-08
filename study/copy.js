//깊은 복사를 위한 라이브러리
import _ from 'loadash'

//얕은 복사 , 깊은 복사 

const user =  {
    name : 'ugo',
    age : 40,
    emails:['ugo@test.com']
}

console.log('-----------얕은복사---------')
//얕은 복사

//Object.assign() 메서드를 사용해서 값을 복사해줬다
const copyUser = Object.assign({}, user) ;
//전개 연산자를 사용해서 아래와 같이 할 복사할 수 도 있다.
const copyUser2 = {...user}
console.log(copyUser === user);


user.age = 22 
console.log(user)
console.log(copyUser)

console.log('-----------깊은복사---------')


//깊은 복사 
//얕은 복사는 객체안에 저장된 참조형 데이터는 복사하지 않는다.

//const copyUserDeep = _.cloneDeep