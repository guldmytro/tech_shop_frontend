import { writable } from "svelte/store";
import { browser } from '$app/environment';
import { getCartCount } from "./utils.js";

const storedProducts = browser ? localStorage.getItem('products') : false;

let products = [];
if (storedProducts) {
    try {
        products = JSON.parse(storedProducts);
    } catch(e) {
        products = [];
    }
}

const count = getCartCount(products);

export const cart = writable({
    products: products,
    count: count
});

if (browser) {
    cart.subscribe(cart => {
        localStorage.setItem('products', JSON.stringify(cart.products));
    });
}
