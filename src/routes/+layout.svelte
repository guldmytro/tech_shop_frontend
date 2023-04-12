<script>
    import '$lib/assets/css/main.css';
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
</script>

<div class="content">
    <Header/>
    <slot></slot>
</div>
<!-- /.content -->
<Footer/>
