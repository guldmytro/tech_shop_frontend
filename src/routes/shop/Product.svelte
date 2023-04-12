<script>
    import iconAddToCart from '$lib/assets/img/icon-add-to-cart.svg';
    import iconView from '$lib/assets/img/icon-view.svg';
    import iconStar from '$lib/assets/img/icon-star.svg';

    export let product;
    import { formatPrice } from '$lib/utils.js';
    import ProductFlash from '$lib/components/ProductFlash.svelte';
    const href = `shop/${product.slug}`;
    const formatedPrice = formatPrice(product.price);
</script>
<li class="products-group__item product-item" class:product-item_out={!product.available}>
    <div class="product-item__thumb product-thumb">
        <ProductFlash {product} shadow={true} />
        <a {href} class="product-thumb__link">
            <img class="product-thumb__img" src={product.image} alt={product.name} loading="lazy" width="1000" height="1000">
        </a>
        <div class="product-quick-controls">
            <button type="button" class="btn btn_small">
                <img class="btn__img_small" src={iconAddToCart} alt="корзина" width="20" height="20" loading="lazy">
                <span>В корзину</span>
            </button>
            <button type="button" class="btn btn_small btn_invert">
                <img class="btn__img_small btn__img_invert" src={iconView} alt="переглянути" width="20" height="20" loading="lazy">
                <span>Переглянути</span>
            </button>
        </div>
    </div>
    <h2 class="product-item__title">
        <a {href}>{product.name}</a>
    </h2>
    <div class="product-item__controls archive-product-controls">
        <div class="product-price">
            <span class="product-price__s product-price__s_small">{formatedPrice} ₴</span>
        </div>
        <div class="product-controls__reviews">
            <img src={iconStar} alt="зірка" width="150" height="150">
            <span>4.9 (45 відгуків)</span>
        </div>
    </div>
</li>