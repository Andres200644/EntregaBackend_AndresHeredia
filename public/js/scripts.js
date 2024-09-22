document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada y lista');

    // Funcionalidad para agregar productos al carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.querySelector('#cart-items');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span class="cart-item-name">${productName}</span>
                <span class="cart-item-price">${productPrice}</span>
                <button class="remove-from-cart">Eliminar</button>
            `;

            cartItemsContainer.appendChild(cartItem);

            // Actualizar el total del carrito
            updateCartTotal();
        });
    });

    // Funcionalidad para eliminar productos del carrito
    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            const cartItem = event.target.closest('.cart-item');
            cartItem.remove();

            // Actualizar el total del carrito
            updateCartTotal();
        }
    });

    // Función para actualizar el total del carrito
    function updateCartTotal() {
        const cartItems = document.querySelectorAll('.cart-item');
        let total = 0;

        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.cart-item-price').textContent.replace('$', ''));
            total += price;
        });

        document.querySelector('#cart-total').textContent = `Total: $${total.toFixed(2)}`;
    }
});