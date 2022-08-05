// import { getProduct, renderProduct } from "./Index.js";

window.onload = function () {
  const urlParam = new URLSearchParams(window.location.search);
  const myParam = urlParam.get("productid");
  // console.log(myParam);

  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + myParam,
    method: "get",
    ResponseType: JSON,
  });

  promise.then(function (result) {
    // console.log(result.data.content);
    renderProductDetail(result.data.content, detail);
    renderProductRelate(result.data.content.relatedProducts, productList);
    findSize(result.data.content.size, size);
  });

  // findSize();
  function renderProductDetail(Product, idBody) {
    let product = { ...Product };
    // for (let i = 0;i<product.length)
    let html = `
    <div class="container">
    <div class="main">
      <div class="img">
        <img src="${product.image}" alt="..." />
      </div>
      <div class="product-info">
        <h3 class="produc-name">${product.name}</h3>
        <span class="description">
          ${product.shortDescription}
        </span>
        <div id="size" class="size">
          <h5>Available size</h5>
        

        </div>
        <div class="price">${product.price}$</div>
        <div class="amount">
          <button class="plus">+</button>
          <p>1</p>
          <button class="minus">-</button>
        </div>
        <div class="add-cart">
          <a href="#">Add to cart</a>
        </div>
      </div>
    </div>
  </div>    
    `;
    idBody.innerHTML = html;
  }
  function renderProductRelate(ProductRelate, idBody) {
    // debugger
    // console.log(ProductRelate.length);

    // console.log(productRelate[3]);

    let htmlRelate = "";
    for (let i = 0; i < ProductRelate.length; i++) {
      htmlRelate += `
    <div class="col-3">
  <div class="col-img"><img src="${ProductRelate[i].image}" alt=""  /></div>
  <div class="col-info">
    <h4 class="brand">${ProductRelate[i].name}</h4>
    <p class="descript">${ProductRelate[i].shortDescription}</p>
  </div>
  <div class="col-button">
    <button class="btn-buy"> <a href="./Detail.html?productid=${ProductRelate[i].id}">Buy now</a></button>
    <button class="btn-price">${ProductRelate[i].price}$</button>
  </div>
</div>
       
  `;
    }
    idBody.innerHTML = htmlRelate;
  }
};

function findSize(size, idBody) {
  // debugger;
  let test = size;
  console.log(test);
  let htmlSize = "";
  let htmlTest = "";
  for (let i = 0; i < test.length; i++) {
    htmlSize += `
    <button>${test[i]}</button>
    
    `;
  }
  console.log(idBody);
  idBody.innerHTML += htmlSize;
}
