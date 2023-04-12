<script>
    import cartImg from '$lib/assets/img/icon-cart.svg';
    import { cart } from '$lib/stores';
    $: count = $cart.count > 9 ? '9+' : $cart.count;
</script>

<div class="header-controls__group">
    <button type="button" class="header-controls__btn header-controls__btn_cart">
        <img src={cartImg} alt="корзина" width="150" height="150">
        {#if count != 0}
            <span class="cnt">{count}</span>    
        {/if}
    </button>
</div>