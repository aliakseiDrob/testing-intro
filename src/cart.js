function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(curt, product, quantity) {
  if (quantity < 1 || product.stock < quantity) {
    throw RangeError(`Incorrect quantity: ${quantity}`);
  }

  const productInCart = curt.find((element) => element.id === product.id);
  if (productInCart) {
    productInCart.quantity = productInCart.quantity + quantity;
  } else {
    curt.push({ ...product, quantity });
  }
  return curt;
}

function changeQuantity() {
  return notImplemented();
}
function removeFromCart(cart, id) {
  return cart.filter((item) => item.id !== id);
}
function calculateCartSubtotal() {
  return notImplemented();
}
function calculateOrderTotal() {
  return notImplemented();
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
