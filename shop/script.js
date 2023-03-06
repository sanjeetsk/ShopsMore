// const produtc = {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: { rate: 3.9, count: 120 },
//   };

const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', event => {
  const query = event.target.value.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );

  displayProducts(filteredProducts);
});

let myDiv = document.getElementById("flex-container");
fetch('https://fakestoreapi.com/products')
  .then((res) => res.json())
  .then((json) => {
    const newHtml = json.map((product) => {
      return `
        <div id="container">
            <div id="image">
            <img src="${product.image}" alt="images" width="100%" height="100%">
            
            </div>
            <div id="info">
                <div id="des">
                    <span>Title: ${product.title}</span>
                </div>
                <div id="price">
                    <span>Price: ${product.price}</span>
                    <span>${product.category}</span>
                </div>
                <div>Rating: ${product.rating.rate}</div>
                <div>Stock: ${product.rating.count}</div>
            </div>
        </div>
        `;
    })

    myDiv.innerHTML = newHtml.join("");
  })