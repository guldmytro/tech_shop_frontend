export function formatPrice(price) {
    let priceStr = String(price).split('').reverse().join('');
    let formatedPrice = '';
    for (let i = 0; i < priceStr.length; i++) {
        if (i % 3 === 0) {
            formatedPrice += ' ';
        }
        formatedPrice += `${priceStr[i]}`;
    }
    return formatedPrice.split('').reverse().join('');
}

export function updateCart(list, product) {
    let found = false;
    const updatedList = list.map((item) => {
        if (item.id == product.id) {
            item.count += product.count;
            found = true;
        }
        return item;
    });
    if (found) {
        return updatedList;
    }
    return [...list, {id: product.id, count: product.count}];
}

export function getCartCount(products) {
    return products.reduce((total, item) => total + item.count, 0);
}