<script>
    import iconAddToCart from '$lib/assets/img/icon-add-to-cart.svg';
    import iconStar from '$lib/assets/img/icon-star.svg';
    import iconSend from '$lib/assets/img/icon-send.svg';
    
    import ProductFlash from '$lib/components/ProductFlash.svelte';
    import MetaTags from '../../MetaTags.svelte';
    import ProductQuantity from '../../ProductQuantity.svelte';
    import Description from './Description.svelte';
    import { cart } from '$lib/stores.js';
    import { updateCart, getCartCount } from '$lib/utils.js';

    export let data;
    const product = data.product;
    
    
    let cnt = 1;

    function setQuantity(event) {
        cnt = event.detail;
    }

    $: productToCart = {
        id: product.id,
        count: cnt
    }

    function addToCart() {
        cart.update((cartValue) => {
            const cartProducts = updateCart(cartValue.products, productToCart);
            const cartTotalCount = getCartCount(cartProducts);
            return {
                products: cartProducts,
                count: cartTotalCount
            };
        })
    }
</script>

<MetaTags title={product.fullname}/>

<main class="product">
    <div class="container">
        <div class="product-row">
            <div class="product-galleries">
                <div class="product-gallery slider">
                    <ProductFlash {product} shadow={true} />
                    <div class="slider-row">
                        <div class="product-gallery__item slide">
                            <img src={product.image} alt={product.fullname} class="product-gallery__img" loading="lazy" width="1000" height="1000">
                        </div>
                    </div>
                </div>
                <div class="product-thumbs slider-thumbs">
                    <div class="product-thumbs__item slider-thumbs__item" data-index="0">
                        <img src={product.image} alt={product.fullname} class="product-thumbs__img" loading="lazy" width="1000" height="1000">
                    </div>
                </div>
            </div>
            <div class="product-info">
                <h1 class="product-info__title">{product.fullname}</h1>
                <p class="product-info__price product-price">
                    <span class="product-price__s">{product.formatedPrice}₴</span>
                    <span class="product-info__reviews">
                        <img src={iconStar} alt="зірка" loading="lazy">
                        <a href="#reviews" class="rate">4.7</a>
                        <span class="sep">·</span>
                        <a href="#reviews" class="cnt">
                            <strong>142 відгука</strong>
                        </a>
                        <span class="sep">·</span>
                        <ProductFlash {product} />
                    </span>
                </p>
                {#if product.available }
                    <div class="product-info__controls product-controls">
                        <div class="product-controls__qnt">
                            <ProductQuantity {cnt} on:change={setQuantity} />
                        </div>
                        <div class="product-controls__add-to-cart">
                            <button type="button" class="btn" on:click={addToCart}>
                                <img src={iconAddToCart} alt="корзина" class="btn__img">
                                <span class="btn__text">Додати в корзину</span>
                            </button>
                        </div>
                    </div>
                {/if}
               <Description description={product.description}/>
            </div>
        </div>
        <div class="product-tabs">
            <nav class="tabs-nav">
                <button type="button" data-anchor="#options" class="tabs-nav__button active">Характеристики</button>
                <button type="button" data-anchor="#video" class="tabs-nav__button">Відео</button>
                <button type="button" data-anchor="#analog" class="tabs-nav__button">Аналоги</button>
                <button type="button" data-anchor="#reviews" class="tabs-nav__button">Відгуки</button>
            </nav>
            <div class="tabs-content">
                <div class="tabs-content__item active" id="options">
                    <table class="product__props">
                        <tbody>
                            <tr>
                                <th>Дисплей</th>
                                <td>720×540, 0.2&quot;, LCOS</td>
                            </tr>
                            <tr>
                                <th>Палітра</th>
                                <td>Горячий чорний, гарячий білий, гарячий червоний, фьюжн</td>
                            </tr>
                            <tr>
                                <th>Локальна пам&#39;ять</th>
                                <td>8 Гб</td>
                            </tr>
                            <tr>
                                <th>Wi-Fi</th>
                                <td>Підтримує hotspot</td>
                            </tr>
                            <tr>
                                <th>Живлення</th>
                                <td>5 В DC/2 A, 1.5 Вт</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tabs-content__item" id="video">
                    <div class="iframe-wrapper">
                        <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/Be-mu0mDPiI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
                    </div>
                </div>
                <div class="tabs-content__item" id="analog">
                    <table class="product__props">
                        <tbody>
                            <tr>
                                <td>
                                    <a href="./single-product.html">AGM Asp-Micro TM160Y. ТЕПЛОВІЗІЙНИЙ МОНОКУЛЯР</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="./single-product.html">AEcoFlow RIVER 2 Портативне джерело живлення</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tabs-content__item" id="reviews">
                    <h2 class="add-review-header">Залишити відгук</h2>
                    <form class="form form-review">
                        <fieldset class="form-review__fieldset">
                            <label for="comment">Відгук *</label>
                            <textarea name="comment" id="comment" cols="30" rows="6"></textarea>
                        </fieldset>
                        <fieldset class="form-review__fieldset">
                            <label for="name">Ім'я *</label>
                            <input type="text" name="name" id="name" required>
                        </fieldset>
                        <fieldset class="form-review__fieldset">
                            <label for="email">Email *</label>
                            <input type="email" name="email" id="email" required>
                        </fieldset>
                        <fieldset class="form-review__fieldset">
                            <button type="submit" class="btn">
                                <img class="btn__img" src={iconSend} alt="конверт" width="800" height="800" loading="lazy">
                                <span>Надіслати</span>
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>