/*
USERS
  SHOPPINGCART
    PAYCAR
      SHIPPING ADDRESS

    ADD PRODUCTS
    DISMIS PRODUCTS
    CURRENT ADDED PRODUCTS

  ACCOUNT
    BALANCE
    ADD BALANCE
*/
/*
PRODUCT STOCK
    CATEGORIES
      PRODUCT
      PRIZES

BALANCE
  PAYTHMENT METHOD
    WHEN TO DELIVERY
*/
/*
DATABASE REGISTER
    USERS
      NAME
      EMAIL
      PASSWORD
*/

class Ecommerce {
    constructor(name) {
        //ecommerce name
        this.name = name;
        // products
        this.stock = {};
        //currentBalance
        this.balance = null;
        // current active Users
        this.users = [];
        //This Database of Accoutns
        this.database = new Set();
        // current orders to deliver
        this.orders = [];

    }

    register(obj) {
        if(!(obj instanceof User) || this.isRegistered(obj)) {
            return `Somethings Wrong!!! Try Again`
        }
        let currentId = this.users.length+1;
        this.database.add({id: obj.id = currentId,
            username: obj.username,
            email: obj.email,
            password: obj.password
        })
        this.users[this.users.length] = {
            id: obj.id,
            username: obj.username,
            balance: obj.balance,
            orders: obj.orders
        }

        return this.users[this.users.length-1];
    }

    isRegistered(newUser) {
        for (const item of this.database) {
            if(JSON.stringify(item.username) === JSON.stringify(newUser.username)) {
                console.log(`Username already Exists!`)
                return true;
            }
            if(JSON.stringify(item.email) === JSON.stringify(newUser.email)) {
                console.log(`Email already Exists!`)
                return true;
            }
        }
        return false;
    }

    addProducts(name, categorie, price) {
        (this.stock[categorie]) ? this.stock[categorie].push([name, price]) : this.stock[categorie] = [[name, price]]
    }

    removeProduct(name, categorie) {
        if(this.stock[categorie]) {
            let products = this.stock[categorie];
            for(let i = 0; i < products.length; i++) {

                if(products[i][0] === name) {
                    products = products.slice(0, i).concat(products.slice(i+1, products.length));
                    return this.stock[categorie] = products
                }
            }
        }
    }
}

class User {
    constructor(userName, email, password) {
        this.id = null;
        this.username = userName;
        this.email = email;
        this.password = password;
        this.balance = 0;
        this.orders = [];
    }

    addBalance(quantity, password) {
        if(password !== this.password) {
            return `Password isn't correct. Try Again.`
        }

        this.balance+=quantity;

        return this.balance;
    }

    getBalance(password) {
        if(password !== this.password) {
            return `Password isn't correct. Try Again.`
        }
        return `Your current Balance is ${this.balance}`;
    }
    /*
USERS
  ACCOUNT
    BALANCE
    ADD BALANCE
*/

}

class ShoppingCart {
    constructor(...products) {
        this.products  = [...products]
        // this.balance = this.calculateBalance(...products);
    }

    // calculateBalance(productObj) {

    // }
}
/*  SHOPPINGCART
    PAYCAR
      SHIPPING ADDRESS

    ADD PRODUCTS
    DISMIS PRODUCTS
    CURRENT ADDED PRODUCTS
 */

let cart = new ShoppingCart("Laptop", "Xbox", "Pc")
console.log(cart)
let cart2 = new ShoppingCart();
console.log(cart2);

const ecommerce = new Ecommerce("Ebay");
let user1 = new User("Alanbrown", "dvildmonpsy@gmail.com", "BMS123")
let user2 = new User("Alanbrown345", "dvildmonpsy@gmail.com", "BMS123")
user1.addBalance(1500, "BMS123")
ecommerce.register(user1);
ecommerce.addProducts("Keyboard", "technology", 2500);
ecommerce.addProducts("Mouse", "technology", 2500);
ecommerce.addProducts("Pc", "technology", 1500);
ecommerce.addProducts("Laptop", "technology", 2500);
console.log(ecommerce.users);
console.log(ecommerce.database)
console.log(ecommerce.stock)
console.log(ecommerce.removeProduct("Pc", "technology"))
console.log(ecommerce.stock)
console.log(ecommerce)
console.log(user1.getBalance("BMS123"))
// console.log(ecommerce.register("BBgiu", "bbgiu45@gmail.com", "BBGIU123"))
console.log(ecommerce.register(user2));
