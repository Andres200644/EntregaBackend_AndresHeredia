const ShoppingCart = (cart) => {
    return `
        <div>
            <h3>${cart.name}</h3>
            <p>${cart.price}</p>
        </div>
    `;
};

module.exports = ShoppingCart;