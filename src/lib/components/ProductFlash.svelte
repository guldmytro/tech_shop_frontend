<script>
    import iconOutOfStock from '$lib/assets/img/icon-out-of-stock.svg';
    import iconNew from '$lib/assets/img/icon-new.svg';
    export let product;
    export let shadow = false;
</script>

{#if !product.available}
    <div class="sticker" class:sticker_shadow={shadow}>
        <img src={iconOutOfStock} alt="зірки" width="14" height="14" loading="lazy">
        <span>Немає в наявності</span>
    </div>
{:else if product.is_new}
    <div class="sticker" class:sticker_shadow={shadow}>
        <img src={iconNew} alt="зірки" width="14" height="14" loading="lazy">
        <span>Новинка</span>
    </div>
{/if}