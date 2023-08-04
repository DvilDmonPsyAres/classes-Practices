import { User, Ecommerce, ShoppingCart } from './eccomerceClass.js';


const ec  = new Ecommerce("myEccomerce")

let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
let submit = document.getElementById('submit');

submit.addEventListener('click', function(){

    let newUser = new User(username.value, email.value, password.value)

    if(password.value !== password2.value) {
        password.value = "";
        password2.value = "";
        return alert('Passwords are not the same')
    }
    if(ec.isRegistered(newUser)) {
        username.value = "";
        email.value = "";
        return alert(ec.isRegistered(newUser))
    } else {
        username.value = "";
        email.value = "";
        password.value = "";
        password2.value = "";
        alert('Welcome to my Online Shop!');
        return window.location.href = "welcome.html";
    }

})
