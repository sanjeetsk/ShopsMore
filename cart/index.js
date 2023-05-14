
const home = document.querySelector('.home');
const logout = document.querySelector('.logout');
const myCart = document.querySelector('.myCart');

logout.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = "../index.html";
})


home.addEventListener('click', () => {
    if(localStorage.getItem('currentUser')) {
        window.location.href = '../shop/index.html';
    }
    else {
        window.location.href = '../index.html';
    }
})


const cardWrapper = document.querySelector('.left');
const warning = document.querySelector('.warning');
const cartList = document.querySelector('.mainCart');
let cartItems = [];
localStorage.getItem('myCart') ? cartItems = JSON.parse(localStorage.getItem('myCart')) : [];
localStorage.getItem('myCart') ? warning.classList.add('hide') : warning.classList.remove('hide');
let cartID = 0;

let total = 0;
let count = 1;
cartItems.map(product => {
    cartList.classList.remove('hide')
    product.id = cartID++;
    total += product.price;
    (localStorage.getItem('myCart')) ?
        cardWrapper.innerHTML += `
        <div class="img">
            <img src="${product.img}" alt="images" width="100%" height="100%">
            <div class="img-title">
                <div id="des">${product.title}</div>
                <div id="price"> Price: &#36;${product.price}</div>
            </div>
            <button class='addCart'>Remove From Cart</button>
        </div>
    ` : "";
    (localStorage.getItem('myCart')) ?
        cartList.innerHTML += `
        <div class="cartlist">
            <div class="name-id">
                <div class="id">${count++}.</div>
                <div class="name">${product.title}</div>
            </div>
            <div class="price">&#36;${product.price}</div>
        </div>
    ` : "";
})
let myCount = 0;
let removeItem;
document.querySelectorAll('.addCart') ? removeItem = document.querySelectorAll('.addCart') : [];
removeItem.forEach((elem) => {
    elem.setAttribute('id', myCount++);
    elem.addEventListener('click', () => {
        cartItems.map(data => {
            if (elem.id == data.id) {
                cartItems.splice(elem.id, 1);
            }
            else if (cartItems.length == 1) {
                cartItems.pop();
            }
        })
        localStorage.setItem('myCart', JSON.stringify(cartItems));
        window.location.reload();
    })
})
if (cartItems.length == undefined || cartItems.length == 0) {
    localStorage.removeItem('myCart');
    warning.classList.remove('hide');
}
document.querySelector('.total-price').innerHTML = `&#36;${total}`;

var options = {
    key: "rzp_test_HndvDkSTHCu5Io",
    amount: total * 100,
    currency: "INR",
    name: "MeShop.",
    description: "This is your order",
    theme: {
        color: "#000",
    },
    image:
        "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
};

document.getElementById("checkout").onclick = function (e) {
    e.preventDefault();
    if(total>0){
        localStorage.removeItem('myCart');
        var razorPayGateway = new Razorpay(options);
        razorPayGateway.open();
    }
    else{
        alert('Add items in cart to proceed!!')
    }
}

