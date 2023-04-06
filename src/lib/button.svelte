<script lang="ts">
    export let width: any;
</script>

<button 
    class="bg-[#FF6000] py-3 px-5 rounded-xl font-bold text-white hover:bg-[#d15000] active:bg-[#bd4800] 
    transition-all duration-250 inline-flex justify-center items-center" on:click style="width: {width}" {...$$restProps}> 
    <slot/>
</button>