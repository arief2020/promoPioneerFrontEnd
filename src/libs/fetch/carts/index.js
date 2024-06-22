const fetchCarts = async (setIsLoading, token) => {
  try {
    const res = await fetch(
      "https://api.promo-pioneer.msyaifullahalarief.my.id/api/carts",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }
    );
    const data = await res.json();
    return data.carts.cartItem;
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

const updateCartItem = async (itemId, newQuantity, token) => {
  try {
    const res = await fetch(
      `https://api.promo-pioneer.msyaifullahalarief.my.id/api/carts/cart-items/${itemId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({ quantity: newQuantity }),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteCartItem = async (itemId, token) => {
  try {
    const res = await fetch(
      `https://api.promo-pioneer.msyaifullahalarief.my.id/api/carts/cart-items/${itemId}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = { fetchCarts, updateCartItem, deleteCartItem };
