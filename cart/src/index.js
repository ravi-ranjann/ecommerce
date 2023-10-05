import {faker} from '@faker-js/faker';

let cartString = '';

for(let i=0; i< 10; i++) {
    cartString += `<div>You have ${faker.datatype.number(20)} items in your cart.</div>`
}

document.querySelector("#cart-list").innerHTML = cartString;