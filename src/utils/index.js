//Function to calculate the total price in the cart
export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)
}