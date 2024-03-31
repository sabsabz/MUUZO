// Extract category from the URL
const category = window.location.pathname.replace('/', '');

// Function to fetch products and update the UI
function fetchAndRenderProducts() {
    fetch("/api/products")
        .then(response => response.json())
        .then(data => {
            // Assuming 'data' is an array of products
            const filteredProducts = data.filter(product => product.category === category);
            renderProducts(filteredProducts);
        })
        .catch(error => console.error('Error fetching products:', error));
}

// Function to render products to the page
function renderProducts(products) {
    console.log(products);
    const container = document.getElementsByClassName("k")[0];
    // Clear existing content
    container.innerHTML = '';

    // Iterate through the products and append them to the container
    products.forEach(product => {
        const productHTML = `
          <div data-product-id=${product._id} class="k1">
            <p class="k5">${product.name}</p>
            <img src="${product.image}" alt="${product.name}" class="k2">
            <p>Price: <span class="k3">kes${product.price}</span></p>
          </div>
        `;
        // Append to container's innerHTML
        container.innerHTML += productHTML;
    });
}

// Run the function to fetch and render products
fetchAndRenderProducts();



document.addEventListener('DOMContentLoaded', (event) => {
  const cart = [];  // Array to hold cart items

  // Function to add a product to the cart
  function addToCart(productId, productName, productPrice) {
      const product = { id: productId, name: productName, price: productPrice, quantity: 1 };
      const existingProduct = cart.find(item => item.id === productId);
      
      if (existingProduct) {
          existingProduct.quantity += 1; // Increment quantity if product exists
      } else {
          cart.push(product); // Add new product to cart
      }

      updateCartUI(); // Update the cart UI
  }

  // Function to update the cart UI
  function updateCartUI() {
      const cartContainer = document.querySelector('.n'); // Container for cart items
      const summarySubtotal = document.querySelector('.q5 p:nth-child(1)'); // Subtotal element
      let total = 0;

      // Clear existing cart items
      const existingItems = cartContainer.querySelectorAll('.p');
      existingItems.forEach(item => item.remove());

      // Add each cart item to the UI
      cart.forEach(item => {
          const cartItemHTML = `
              <div class="p">
                  <div class="p1">
                      <p class="p2">${item.name}</p>
                      <div>
                          <button class="p3"><span class="p5">${item.quantity}</span></button>
                          <p class="p7">remove</p>
                      </div>
                  </div>
              </div>
          `;
          cartContainer.insertAdjacentHTML('beforeend', cartItemHTML); // Append new cart item

          total += item.price * item.quantity; // Calculate total
      });

      // Update the subtotal in the UI
      summarySubtotal.textContent = `Kes ${total}`;
  }

  // Add click event to each 'Add to Cart' button
  const addToCartButtons = document.querySelectorAll('.addToCart');
  addToCartButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          const productElement = button.closest('.k1');  // Get the parent product element
          const productId = productElement.getAttribute('data-product-id');
          const productName = productElement.querySelector('.k5').textContent;
          const productPrice = parseFloat(productElement.querySelector('.k3').textContent.replace('kes', ''));

          addToCart(productId, productName, productPrice); // Add product to cart
      });
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 73e9a241dc004a1e6bea770f4ebf4c31357f271a
