<script lang="ts">
    export let buttonText: string;
    export let buttonFunction: any;
</script>

<button class=
    "bg-[#FF6000] p-3 rounded-xl w-[150px] my-5 font-bold text-white hover:bg-[#d15000] active:bg-[#bd4800] transition-all duration-250" on:click={buttonFunction}>
    {buttonText}
</button>