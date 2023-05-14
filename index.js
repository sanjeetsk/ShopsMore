const login = document.querySelector('.login');
const signUp = document.querySelector('.signUp');
const card = document.querySelector('.product');

[...document.querySelectorAll('.cart')].forEach((item) => {
        item.addEventListener('click', () => alert('Please login to continue!!!'));
     });

login.addEventListener("click", () => {
    window.location.href = "./user/login.html";
})

signUp.addEventListener("click", () => {
    window.location.href = "./user/signUp.html";
})

if(window.localStorage.getItem('currentUser')){
    window.location.href = './shop/index.html';
}

fetch('https://fakestoreapi.com/products')
    .then(resolve => resolve.json())
    .then(data => {
        const idx = Math.abs(Math.floor(Math.random() * data.length-1));
        card.innerHTML = `
        <div class="container">
            <img id="tshirt" src=${data[idx].image} alt="${data[idx].title}">
            <div class="info">
                <h5>${data[idx].title}</h5>
                <p>&#36;${data[idx].price}</p>
                <p style="color: red;">Only ${data[idx].rating.count} items left!!!</p>
                <p>Ratings: ${data[idx].rating.rate} &#9733;</p>   
            </div>
            <button class="addCart addBtn">Add to cart</button>
        </div>`;
        const addCart = document.querySelector('.addCart');
        addCart.addEventListener("click", () => {
            alert("Please login to continue!!");
        })
    })



