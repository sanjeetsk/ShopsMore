
const logout = document.querySelector('.logout');

logout.addEventListener('click', () => {
  window.location.href = "../user/login.html";
  localStorage.removeItem('currentUser');
})

const home = document.querySelector('.home');

home.addEventListener('click', () => {
  if(localStorage.getItem('currentUser')) {
    window.location.href = '../shop/index.html'; 
  }
  else {
    window.location.href = '../index.html';
  }
})



let men = document.querySelector(".men");
let women = document.querySelector(".women");
let jewelery = document.querySelector(".jewelery");
let electronics = document.querySelector(".electronic");
let myRating = document.querySelector("#myRange");
let ratingValue = myRating.value;

let addCart = [];
let addCartArray = []
const myData = [];

localStorage.getItem('myCart') ? (addCartArray.push(JSON.parse(localStorage.getItem('myCart')))) : [];

fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((json) => {
      json.map((product) => {
        myData.push(product.title);
        if(product.category === "men's clothing"){
          men.innerHTML += `
            <div class="img">
                <img src="${product.image}" alt="images" width="100%" height="100%">
                <div class="img-title">
                    <div> <span id="des">${product.title}</span></div>
                    <div> Price: <span id="price">${product.price}</span></div>
                    <div id="star"> <span  id="rating">${product.rating.rate}</span> &#9733;</div>
                    <div>Stock: <span id="stock">${product.rating.count}</span></div>
                </div>
                <button class="btn-add">Add to cart</button>
            </div>
          `;
        }
        if(product.category === "women's clothing"){
          women.innerHTML += `
            <div class="img">
              <img src="${product.image}" alt="images" width="100%" height="100%">
              <div class="img-title">
                  <div> <span id="des">${product.title}</span></div>
                  <div> Price: <span id="price">${product.price}</span></div>
                  <div id="star"> <span  id="rating">${product.rating.rate}</span> &#9733;</div>
                  <div>Stock: <span id="stock">${product.rating.count}</span></div>
              </div>
              <button class="btn-add">Add to cart</button>
            </div>
          `;
        }
        if(product.category === "jewelery"){
          jewelery.innerHTML += `
            <div class="img">
              <img src="${product.image}" alt="images" width="100%" height="100%">
              <div class="img-title">
                  <div> <span id="des">${product.title}</span></div>
                  <div> Price: <span id="price">${product.price}</span></div>
                  <div id="star"> <span  id="rating">${product.rating.rate}</span> &#9733;</div>
                  <div>Stock: <span id="stock">${product.rating.count}</span></div>
              </div>
              <button class="btn-add">Add to cart</button>
            </div>
          `;
        }
        if(product.category === "electronics"){
          electronics.innerHTML += `
            <div class="img">
              <img src="${product.image}" alt="images" width="100%" height="100%">
              <div class="img-title">
                  <div> <span id="des">${product.title}</span></div>
                  <div> Price: <span id="price">${product.price}</span></div>
                  <div id="star"> <span  id="rating">${product.rating.rate}</span> &#9733;</div>
                  <div>Stock: <span id="stock">${product.rating.count}</span></div>
              </div>
              <button class="btn-add">Add to cart</button>
            </div>
          `;
        }
      })
    

      myRating.oninput = () => {
        ratingValue = myRating.value;
        let useImg = "";
        useImg = document.querySelectorAll('.img') ? (document.querySelectorAll('.img')) : "";
        useImg.forEach( (ele) => {
          let eachImgRating = parseInt(ele.querySelector('#rating').innerHTML);
          ele.classList.add('hide');
          if(eachImgRating == ratingValue){
            ele.classList.remove('hide');
          }
          if(ratingValue == 0){
            ele.classList.add('hide');
          }
        });
      }

      const zero = document.querySelector('#checkbox0');
      const twentyfive = document.querySelector('#checkbox25');
      const fifty = document.querySelector('#checkbox50');
      const hundred = document.querySelector('#checkbox100');

      zero.addEventListener('click', () => {
        if(zero.checked){
          zero.checked = true;
          let useImg = document.querySelectorAll('.img') ? (document.querySelectorAll('.img')) : "";
          useImg.forEach( (ele) => {
            let eachImgPrice = parseInt(ele.querySelector('#price').innerHTML);
            ele.classList.add('hide');
            if(eachImgPrice >= 0 && eachImgPrice < 25 ){
              ele.classList.remove('hide');
            }
          })

          twentyfive.checked = false;
          fifty.checked = false;
          hundred.checked = false;
        }
        else{
          zero.checked = false;
          let useImg = document.querySelectorAll('.img') ? (document.querySelectorAll('.img')) : "";
          useImg.forEach( (ele) => {
            ele.classList.remove('hide');
          })
        }
      })

      twentyfive.addEventListener('click', () => {
        if(twentyfive.checked){
          twentyfive.checked = true;
          let useImg = document.querySelectorAll('.img') ? (document.querySelectorAll('.img')) : "";

          useImg.forEach( (ele) => {
            let eachImgPrice = parseInt(ele.querySelector('#price').innerHTML);
            ele.classList.add('hide');
            if(eachImgPrice >= 25 && eachImgPrice < 50 ){
              ele.classList.remove('hide');
            }
          })

          zero.checked = false;
          fifty.checked = false;
          hundred.checked = false;
        }
        else{
          twentyfive.checked = false;
          let useImg = document.querySelectorAll('.img') ? (document.querySelectorAll('.img')) : "";
          useImg.forEach( (ele) => {
            ele.classList.remove('hide');
          })
        }
      })

      fifty.addEventListener('click', () => {
        if(fifty.checked){
          fifty.checked = true;
          let useImg = document.querySelectorAll('.img') ? (document.querySelectorAll('.img')) : "";
          useImg.forEach( (ele) => {
            let eachImgPrice = parseInt(ele.querySelector('#price').innerHTML);
            ele.classList.add('hide');
            if(eachImgPrice >= 50 && eachImgPrice < 100 ){
              ele.classList.remove('hide');
            }
          })

          zero.checked = false;
          twentyfive.checked = false;
          hundred.checked = false;
        }
        else{
          fifty.checked = false;
          let useImg = document.querySelectorAll('.img') ? (document.querySelectorAll('.img')) : "";
          useImg.forEach( (ele) => {
            ele.classList.remove('hide');
          })
        }
      })

      hundred.addEventListener('click', () => {
        if(hundred.checked){
          hundred.checked = true;
          let useImg = document.querySelectorAll('.img') ? (document.querySelectorAll('.img')) : "";
          useImg.forEach( (ele) => {
            let eachImgPrice = parseInt(ele.querySelector('#price').innerHTML);
            ele.classList.add('hide');
            if(eachImgPrice >= 100){
              ele.classList.remove('hide');
            }
          })

          zero.checked = false;
          twentyfive.checked = false;
          fifty.checked = false;
        }
        else{
          hundred.checked = false;
          let useImg = document.querySelectorAll('.img') ? (document.querySelectorAll('.img')) : "";
          useImg.forEach( (ele) => {
            ele.classList.remove('hide');
          })
        }
      })    

      const search = document.querySelector('.input-search');
      search.addEventListener('keypress', (event) => {
          if(event.key === "Enter" || event.keyCode === 13){
            let searchValue = search.value;
            let useImg = document.querySelectorAll('.img') ? (document.querySelectorAll('.img')) : "";
            useImg.forEach( (ele) => {
              ele.classList.add('hide');
              let eachImgTitle = ele.querySelector('#des').innerText;
              if(eachImgTitle.includes(searchValue)){
                ele.classList.remove('hide');
              }
            })
          }
      })

      const allPro = document.querySelector('#all');
      const menPro = document.querySelector('#mens');
      const womenPro = document.querySelector('#womens');
      const jeweleryPro = document.querySelector('#jewellery'); 
      const electronicPro = document.querySelector('#electronics'); 
      const allCateg = document.querySelectorAll('.selectCategories');
      const menImg = document.querySelector('.mens-clothing');
      const womenImg = document.querySelector('.womens-clothing');
      const jeweleryImg = document.querySelector('.jewellery');
      const electronicImg = document.querySelector('.electronics');
      const clothings = document.querySelectorAll('.clothings');

      allPro.addEventListener('click', () => {
        allCateg.forEach((ele) => {
          ele.style.backgroundColor = "bisque";
        })
        clothings.forEach((ele) => {
          ele.classList.remove('hide');
        })
        allPro.style.backgroundColor = "green";
      })

      menPro.addEventListener('click', () => {
        allCateg.forEach((ele) => {
          ele.style.backgroundColor = "bisque";
        })
        clothings.forEach((ele) => {
          ele.classList.add('hide');
        })
        menImg.classList.remove('hide');
        menPro.style.backgroundColor = "green";
      })
      
      womenPro.addEventListener('click', () => {
        allCateg.forEach((ele) => {
          ele.style.backgroundColor = "bisque";
        })
        clothings.forEach((ele) => {
          ele.classList.add('hide');
        })
        womenImg.classList.remove('hide');
        womenPro.style.backgroundColor = "green";
      })

      jeweleryPro.addEventListener('click', () => {
        allCateg.forEach((ele) => {
          ele.style.backgroundColor = "bisque";
        })
        clothings.forEach((ele) => {
          ele.classList.add('hide');
        })
        jeweleryImg.classList.remove('hide');
        jeweleryPro.style.backgroundColor = "green";
      })

      electronicPro.addEventListener('click', () => {
        allCateg.forEach((ele) => {
          ele.style.backgroundColor = "bisque";
        })
        clothings.forEach((ele) => {
          ele.classList.add('hide');
        })
        electronicImg.classList.remove('hide');
        electronicPro.style.backgroundColor = "green";
      })


      addCart = document.querySelectorAll('.btn-add');
      let count = 0;
      let idCount = 0;
      addCart.forEach((ele) => {

        ele.setAttribute('id', count++);
        ele.addEventListener('click', () => {
          let dis = document.getElementById('snackbar');
          dis.style.visibility = "visible";
          setTimeout(() => {dis.style.visibility = dis.style.visibility.replace("visible", "hidden")}, 1500);
          const myProd ={
            id: idCount++,
            img: json[ele.id].image,
            title: json[ele.id].title,
            price: json[ele.id].price,
          }
          addCartArray.push(myProd);
          localStorage.setItem('myCart', JSON.stringify(addCartArray));
        })
      })
    })




