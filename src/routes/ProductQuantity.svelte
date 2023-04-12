<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import iconMinus from '$lib/assets/img/icon-minus.svg';
    import iconPlus from '$lib/assets/img/icon-plus.svg';
    export let cnt;
    
    function increment() {
        cnt++;
        dispatch('change', cnt);
    }
    function decrement() {
        cnt > 1 ? cnt-- : null;
        dispatch('change', cnt);
    }
</script>

<button type="button" on:click={decrement} aria-label="зменшити кількість">
    <img src={iconMinus} alt="мінус">
</button>
<input type="text" disabled bind:value={cnt}>
<button type="button" on:click={increment} aria-label="збільшити кількість кількість">
    <img src={iconPlus} alt="плюс">
</button>