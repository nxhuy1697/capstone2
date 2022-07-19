function getProduct() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "get",
    ResponseType: JSON,
  });

  promise.then(function (result) {
    // console.log(result.data.content);
    renderProduct(result.data.content, productList);
  });
}

function renderProduct(arrPro, idBody) {
  let html = "";
  for (let i = 0; i < arrPro.length; i++) {
    html += `
    
    <div class="col">
    <div class="col-img"><img src="${arrPro[i].image}" alt="" /></div>
    <div class="col-info">
      <h4 class="brand">${arrPro[i].name}</h4>
      <p class="descript">${arrPro[i].shortDescription}</p>
    </div>
    <div class="col-button">
      <button class="btn-buy">Buy now</button>
      <button class="btn-price">${arrPro[i].price}$</button>
    </div>
  </div>
    `;
  }
  // let test = document.getElementById(idBody)
  idBody.innerHTML = html;
}
// renderProduct();

window.onload = function () {
  getProduct();
};

