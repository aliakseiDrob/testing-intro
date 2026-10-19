function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(curt, product, quantity) {
  if (quantity < 1 || product.stock < quantity) {
    throw RangeError(`Incorrect quantity: ${quantity}`);
  }

  const productInCart = curt.find((element) => element.id === product.id);
  if (productInCart) {
    return curt.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item,
    );
  }

  return [...curt, { ...product, quantity }];
}

function changeQuantity(cart, id, quantity) {
  const productInCart = cart.find((element) => element.id === id);

  if (!productInCart) {
    return cart;
  }

  if (quantity < 1 || productInCart.stock < quantity) {
    throw RangeError(`Incorrect quantity: ${quantity}`);
  }

  return cart.map((item) =>
    item.id === id ? { ...item, quantity: quantity } : item,
  );
}

function removeFromCart(cart, id) {
  return cart.filter((item) => item.id !== id);
}
function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
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
