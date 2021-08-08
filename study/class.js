const hello = {
	firshName: 'ugo',
    lastName: 'hwang',
    getFullName: function(){
    	return `${this.firstName} ${this.lastName}`
    }
	
}
console.log(hello);

//클래스는 파스칼 케이스를 활용한다.
function User(first,last){
    this.firstName = first
    this.lastName = last
}

//프로토 타입을 통해 반복되는 코드를 줄이고 메모리를 효율적으로 관리할 수 있다.
//클래스에서 사용되는 메서드들을 protorype에 넣어둔다
User.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

//생성자 함수를 통해 객체를 생성한다.
//ugo , kim , lee 는 인스턴스라고 부른다.
const ugo = new User('ugo','hwang')
const kim = new User('oh','kim')
const lee = new User('rok','lee')

console.log(ugo.getFullName());
console.log(kim.getFullName());
console.log(lee.getFullName());


