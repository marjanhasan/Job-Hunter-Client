// use local storage to manage cart data
const addToDb = (id) => {
  let shoppingCart = getFromDb();
  // add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    Toastify({
      text: "This is a toast",
      duration: 3000,
    }).showToast();
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getFromDb = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

export { addToDb, getFromDb };
