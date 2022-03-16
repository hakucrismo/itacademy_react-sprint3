// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            minimumProducts: 3,
            discount: 0.5
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            minimumProducts: 10,
            discount: [2, 3]
        } 
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    
    let product = {};

    for (var i = 0; i < products.length; i++) {
        product = products[i]; 
        if (product.id == id) {
            cartList.push(product);
        }
    }
} 

// Exercise 2
function cleanCart() {
    cartList = [];
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    let product = {};
    let productPrice = 0;
    let totalPrice = 0;

    for (var i = 0; i < cartList.length; i++) {
        product = cartList[i]; 
        
        productPrice = product.price;
        totalPrice += productPrice;
    }
    return totalPrice;
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    let product = {};
    let productCart = {};
    
    for (let i = 0; i < cartList.length; i++){
        product = cartList[i]; 

        //Si no hay elementos en Cart
        if (cart.length === 0) {
            // Añadir el Producto + quantity
            cart.push({
                ...product,
                quantity: 1
            })
        } else { // Si ya hay elementos, por cada Producto dentro de CartList
            
            for (let y = 0; y < cart.length; y++) { // Mirar si existe dentro de Cart
                productCart = cart[y];
                
                if (productCart.id === product.id) {
                    productCart.quantity++; // Solo aumentar quantity
                    productCart["subtotal"] = productCart.price * productCart.quantity;
                } 
            }    
                
            if (productCart.id != product.id) { // Si no existe
                // Añadir el Producto + quantity
                cart.push({
                    ...product,
                    quantity: 1
                })
                productCart["subtotal"] = productCart.price * productCart.quantity;
            } 
        }
    }
}   


// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    //Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros.
    //En comprar-se 10 o més mescles per a fer pastís, el seu preu es rebaixa a 2/3.
    for (let i = 0; i < cart.length; i++){
        let productCart = cart[i]; 
        let productName = productCart.name;
        let productQuantity = productCart.quantity;
        
        if (productName === 'cooking oil' && productQuantity >= productCart.offer.minimumProducts) {
            let priceWithDiscount = 0;

            productCart["subtotalWithDiscount"] = 0;
            priceWithDiscount = productCart.price - productCart.offer.discount;
            productCart.subtotalWithDiscount = priceWithDiscount * productQuantity;
        }
    
        if (productName === 'Instant cupcake mixture' && productQuantity >= productCart.offer.minimumProducts) {
            let priceWithDiscount = 0;

            productCart["subtotalWithDiscount"] = 0;
            priceWithDiscount = productCart.price - (productCart.price - dosTercios());
            productCart.subtotalWithDiscount = priceWithDiscount * productQuantity;

            function dosTercios() {
                return productCart.price / productCart.offer.discount[1] * productCart.offer.discount[0];
            }
        }
    }
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


function open_modal(){
	console.log("Open Modal");
}