import { createSignal, createResource } from "solid-js";
import { createMutable } from "solid-js/store ";

export const cart = createMutable({
  products: JSON.parse(window.localStorage.getItem("cart") || "[]"),

  get total() {
    return this.products.reduce((total, product) => total + product.price, 0);
  },

  addToCart(product) {
    this.products.push(product);
    window.localStorage.setItem("cart", JSON.stringify(this.products));
  },

  clearCart() {
    this.products = [];
  },
});

export const [search, setSearch] = createSignal("");
export const onSetSearch = (str) => setSearch(str);

export const [products] = createResource(
  () => fetch("http://fakestoreapi.com/products").then((res) => res.json()),
  { initialValue: [] }
);
