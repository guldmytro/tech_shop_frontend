<script>
    import iconMinus from '$lib/assets/img/icon-minus.svg';
    import iconPlus from '$lib/assets/img/icon-plus.svg';
    export let description;
    let isOff = false;
    
</script>

{#if description }
<hr class="product-info__hr">
<div class="product-info__group">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p class="product-info__subtitle" class:off={isOff} on:click={() => {isOff = !isOff}}>
        <span>Опис</span>
        <img class="minus" src={iconMinus} alt="мінус" width="16" height="16">
        <img class="plus" src={iconPlus} alt="плюс" width="16" height="16">
    </p>
    <p class="product-info__description">{description}</p>
</div>
{/if}