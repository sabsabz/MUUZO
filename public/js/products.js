
let products = [];

fetch("/js/products.json")
  .then(response => response.json())
  .then(data => {
    products = data.products;
    console.log(data);
    // Call the function to render products inside the fetch.then()
    renderProducts(products);
  });

function renderProducts(products) {
  console.log(products);
  // Note: getElementsByClassName returns an HTMLCollection, so you need to specify which item you want, typically the first one.
  const container = document.getElementsByClassName("k")[0]; // Get the first element with class "k"
  container.innerHTML = ''; // Clear existing content

  products.forEach(product => {
    console.log(product);
    const productHTML = `
      <div class="k1">
        <p class="k5">${product.name}</p>
        <img src="${product.image}" alt="${product.name}" class="k2">
        <p>Price: <span class="k3">kes${product.price}</span></p>
      </div>
    `;
    // append to container's innerHTML
    container.innerHTML += productHTML;
  });
}
