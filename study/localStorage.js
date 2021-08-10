
const { default: axios } = require("axios");

const user = {
    name:'ugo',
    age:10,
    emails:[
        'test@gmail.com',
        'test@naver.com'
    ]
}    
const user1 = JSON.stringify(user);

localStorage.setItem('user' , user1);

const str = localStorage.getItem('user')

const obj = JSON.parse(str);

obj.age = 22

const user2 = JSON.stringify(obj);

localStorage.setItem('user' , user2);

// const localUser = localStorage.getItem('user');
// console.log(JSON.parse(localUser));

// localStorage.removeItem('user');



