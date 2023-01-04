const productItem = document.querySelector(".product1Wrapper");
const productsList = document.querySelector(".productsList__product1");

for (let i = 0; i < 11; i++) {
    let clone = productItem.cloneNode(true);
    productsList.appendChild(clone);
}

const product2Item = document.querySelector(".product2Wrapper");
const products2List = document.querySelector(".productsList__product2");

for (let i = 0; i < 2; i++) {
    let clone = product2Item.cloneNode(true);
    products2List.appendChild(clone);
}

const product3Item = document.querySelector(".product3Wrapper");
const products3List = document.querySelector(".productsList__product3");

for (let i = 0; i < 4; i++) {
    let clone = product3Item.cloneNode(true);
    products3List.appendChild(clone);
}
