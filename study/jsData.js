//String

console.log('-----------String-----------')

console.log("hi there".indexOf('there'));

const str = 'test@gmail.com'

console.log(str.length)
console.log(str.indexOf('2') !== -1)
console.log(str.slice(0,3))
console.log(str.replace('0','9'))
console.log(str.replace('0',''))
console.log(str.match(/.+(?=@)/)[0])



console.log('-------------number------------------')
//Math

const pi = 3.14159265358979
const str2 = pi.toFixed(2);

const integer = parseInt(str2);
const float = parseFloat(str2);

console.log(integer);
console.log(float);
console.log(typeof integer, typeof float)


console.log('-----------Array-----------')

const numbers = [1,2,3,4,5]
const fruits = ['apple','banana', 'cherry']

//predicate 를 넘겨서 찾는다
console.log(fruits.find(e=>e.startsWith('a')))

//
//console.log(fruits.concat(nembers))

//concat은 원본이 수정되지 않는다.
console.log(numbers.concat(fruits))

//forEach 의 파라미터는 element , index  순이다
fruits.forEach((fruit,i)=>{
    console.log(fruit,i)
})

//map()
//배열에서 데이터 추출하여 새로운 배열을 만들어냄
const b = fruits.map((fruit,i)=>(
    {
        id:i,
        name:fruit
    }
))

console.log(b)

//filter()
//콜백의 반환값이 true 일 때만 값을 반환하여 배열로 만든다
const nums2 = numbers.filter(num => num < 4)
console.log(nums2)


//.find() 
// 첫번째로 찾아지는 것만 리턴한다.
const f = fruits.find(fruit => fruit.includes('a'))
console.log(f);

//findIndex()
//첫번째로 찾아지는 것의 인덱스를 반환한다
const g = fruits.findIndex(fruit => fruit.includes('a'))
console.log(g);

//push()
//배열 맨 뒤에 특정 아이템을 추가한다 (원본이 수정된다 )
numbers.push(6)
console.log(numbers)

//unshift()
//맨앞에 특정 아이템을 추가한다 (원본이 수정된다 )
numbers.unshift(0)
console.log(numbers)

//reverse()
// 배열의 순서를 뒤집는다 (원본이 수정된다)
numbers.reverse();
console.log(numbers)

//splice()
//지정한 인덱스 값을 포함하여 (첫번째 파라미터) , 그 뒤 몇개의 아이템을 지운다(두번째 파라미터)
numbers.splice(2,2);
console.log(numbers)

//특정 인덱스에 데이터를 끼워 놓는 용도로도 사용된다 
numbers.splice(2,0,100)
console.log(numbers)

//특정 위치의 데이터를 갈아 끼우는 용도로도 사용된다
numbers.splice(2,1,88)
console.log(numbers)