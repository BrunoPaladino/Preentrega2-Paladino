let id, name, price, category;
let selection, selection2, selection3;
let item;
let more;
let total;
//let creditcart;
let creditpay;

// Para el carrito de compras usamos un array, donde guardamos los productos que el comprador selecciona
const cart = [];

//funcion constructora para objetos personalizados
function product(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = Number(price);
    this.category = category;
}

//objetos, los diferencio por categoria
const product1 = new product(1, "Pikachu T-shirt", 8000, "Pokemon");
const product2 = new product(2, "Charmander T-shirt", 8000, "Pokemon");
const product3 = new product(3, "Bulbasaur T-shirt", 7300, "Pokemon");
const product4 = new product(4, "Squirtle T-shirt", 7800, "Pokemon");
const product5 = new product(5, "Batman T-shirt", 8300, "Heroes");
const product6 = new product(6, "Superman T-shirt", 7800, "Heroes");
const product7 = new product(7, "Flash T-shirt", 7500, "Heroes");
const product8 = new product(8, "Pokeball Hoodie", 11000, "Pokemon");
const product9 = new product(9, "Pikachu Hoodie", 12000, "Pokemon");
const product10 = new product(10, "Batman Hoodie", 12000, "Heroes");
const product11 = new product(11, "Robin Hoodie", 10000, "Heroes");
const product12 = new product(12, "Superman Hoodie", 11000, "Heroes");
const product13 = new product(13, "Flash Hoodie", 11500, "Heroes");

//pusheo los productos a distintos array, divididos por categoria
const pokemonTshirt = [];
pokemonTshirt.push(product1, product2, product3, product4);

const pokemonHoodie = [];
pokemonHoodie.push(product8, product9);

const heroesTshirt = [];
heroesTshirt.push(product5, product6, product7);

const heroesHoodie = [];
heroesHoodie.push(product10, product11, product12, product13);

//inicio del codigo de funciones
alert("Welcome to Paradox Clothes, where the time doesn't run while you buy");
introduction(selection, selection2);


function introduction(selection, selection2) {
    selection = prompt("What are you looking for?:\n 1- T-shirts \n 2- Hoodies");

    while (selection != 1 && selection != 2) {
        selection = prompt("You must choose a valid option:\n 1- T-shirts \n 2- Hoodies");
    }

    if (selection == 1) {
        selection2 = prompt("We can offer you at this moment:\n 1- Pokemon's T-shirts \n 2- Heroe's T-shirts");
        while (selection2 != 1 && selection2 != 2) {
            selection2 = prompt("You must choose a valid option:\n 1- Pokemon's T-shirts \n 2- Heroe's T-shirts");
        }
        productType(selection, selection2);
    } else {
        selection2 = prompt("We can offer you at this moment:\n 1- Pokemon's Hoodies \n 2- Heroe's Hoodies");
        while (selection2 != 1 && selection2 != 2) {
            selection2 = prompt("You must choose a valid option:\n 1- Pokemon's Hoodies \n 2- Heroe's Hoodies");
        }
        productType(selection, selection2);
    }
}


function productType(selection, selection2) {
    if (selection == 1 && selection2 == 1) {
        for (const element of pokemonTshirt) {
            console.log("ID: " + element.id);
            console.log("Name: " + element.name);
            console.log("Price: " + element.price);
        }
        item = prompt("Choose the ID number of the product that you wish to add to your shooping cart");
        const result = pokemonTshirt.find((element) => element.id == `${item}`);
        cart.push(result);
    }
    else if (selection == 1 && selection2 == 2) {
        for (const element of heroesTshirt) {
            console.log("ID: " + element.id);
            console.log("Name: " + element.name);
            console.log("Price: " + element.price);
        }
        item = prompt("Choose the ID number of the product that you wish to add to your shooping cart");
        const result = heroesTshirt.find((element) => element.id == `${item}`);
        cart.push(result);
    }
    else if (selection == 2 && selection2 == 1) {
        for (const element of pokemonHoodie) {
            console.log("ID: " + element.id);
            console.log("Name: " + element.name);
            console.log("Price: " + element.price);
        }
        item = prompt("Choose the ID number of the product that you wish to add to your shooping cart");
        const result = pokemonHoodie.find((element) => element.id == `${item}`);
        cart.push(result);
    }
    else if (selection == 2 && selection2 == 2) {
        for (const element of heroesHoodie) {
            console.log("ID: " + element.id);
            console.log("Name: " + element.name);
            console.log("Price: " + element.price);
        }
        item = prompt("Choose the ID number of the product that you wish to add to your shooping cart");
        const result = heroesHoodie.find((element) => element.id == `${item}`);
        cart.push(result);
    }
    question(cart);
}

function question(cart) {
    more = prompt("Do you want to continue shooping?:\n 1- Yes \n 2- No");

    while (more != 2) {
        introduction(selection, selection2);
    }
    taxes(cart);
}


function taxes(cart) {
    console.log("Actually, your cart contains: ");
    console.log(cart);
    let quantity = (cart.length);
    total = cart.reduce((acumulador, element) => { return acumulador + element.price }, 0);
    console.log(`You have ${quantity} product/s in the shooping cart`);
    console.log(`The amount of your shooping is: $ ${total} \nThank you for your purchase`);
//    selection3 = prompt("Do you want to pay with a credit card? (The final amount it is going to include taxes):\n 1-Yes \n 2-No");

/*     if (selection3 == 1) {
        const creditcart = cart.map((element) => {
            return {
                id= element.id;
                name = element.name;
                price = element.price * 1.21;
            }
        })
        console.log("The final amount, including taxes it is:")
        console.log(creditcart);
        //final(cart, total);
    } */
}

/* function final(cart, total) {
    creditpay =
        console.log("")
} */
