<script>
    import Product from "./Product.svelte";
    import MetaTags from "../MetaTags.svelte";
    export let data;
    const products = data.products;
</script>
<MetaTags title="Магазин"/>
<main class="products">
    <div class="container">
        <div class="section-header">
            <h1 class="section-header__title">Каталог товарів</h1>
        </div>
        <div class="products-row">
            <aside class="products-filter">
                <div class="filter-box">
                    <div class="filter-box__header">
                        <h3 class="filter-box__title">Сортування</h3>
                    </div>
                    <ul class="filter-group">
                        <li class="filter-group__item filter-item">
                            <label class="filter-item__label">
                                <input type="radio" name="order" checked>
                                <span class="pseudo-radio_primary"></span>
                                <span class="input-label">Новинки</span>
                            </label>
                        </li>
                        <li class="filter-group__item filter-item">
                            <label class="filter-item__label">
                                <input type="radio" name="order">
                                <span class="pseudo-radio_primary"></span>
                                <span class="input-label">Від дешевих до дорогих</span>
                            </label>
                        </li>
                        <li class="filter-group__item filter-item">
                            <label class="filter-item__label">
                                <input type="radio" name="order">
                                <span class="pseudo-radio_primary"></span>
                                <span class="input-label">Від дорогих до дешевих</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="filter-box filter-box_secondary">
                    <div class="filter-box__header">
                        <h3 class="filter-box__title filter-box__title_secondary">Наявність</h3>
                        <p class="filter-box__subtitle">Лише товари, що в наявності</p>
                    </div>
                    <div class="filter-box__switcher">
                        <label>
                            <input type="checkbox" name="in-stock" value="in-stock">
                            <span class="pseudo-checkbox_secondary">
                    <span class="baloon"></span>
                            </span>
                        </label>
                    </div>
                </div>
                <div class="filter-box">
                    <div class="filter-box__header">
                        <h3 class="filter-box__title">Фільтр по ціні</h3>
                    </div>
                    <div class="filter-price">
                        <div class="filters-item__price"></div>
                        <div class="filter-form__prices">
                            <div class="filter-price__item filter-price-from">
                                <strong>Ціна від</strong>
                                <span class="price-value price-value_0"></span>
                            </div>
                            <div class="filter-price__item filter-price-to">
                                <strong>Ціна до</strong>
                                <span class="price-value price-value_1"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="filter-box">
                    <div class="filter-box__header">
                        <h3 class="filter-box__title">Обсяг пам'яті</h3>
                    </div>
                    <ul class="filter-group">
                        <li class="filter-group__item filter-item">
                            <label class="filter-item__label">
                                <input type="checkbox">
                                <span class="pseudo-checkbox_primary"></span>
                                <span class="input-label">1 ГБ</span>
                            </label>
                        </li>
                        <li class="filter-group__item filter-item">
                            <label class="filter-item__label">
                                <input type="checkbox">
                                <span class="pseudo-checkbox_primary"></span>
                                <span class="input-label">2 ГБ</span>
                            </label>
                        </li>
                        <li class="filter-group__item filter-item">
                            <label class="filter-item__label">
                                <input type="checkbox">
                                <span class="pseudo-checkbox_primary"></span>
                                <span class="input-label">4 ГБ</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </aside>
            <div class="products-wrapper">
                <ul class="products-group">
                    {#each products as product, i (product.id)}
                        <Product product={product} />
                    {/each}
                </ul>
                <div class="pagination">
                    <ul class="pagination-group">
                        <li class="pagination-group__item">
                            <a href="archive-product.html">←</a>
                        </li>
                        <li class="pagination-group__item">
                            <span>2</span>
                        </li>
                        <li class="pagination-group__item">
                            <a href="archive-product.html">→</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</main>