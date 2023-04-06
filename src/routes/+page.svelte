<script lang="ts">
  import Button from "../lib/button.svelte";

    let counter: number = 0;
    $: doubleCounter = counter * 2;
    $: sum = counter + doubleCounter;

    function increaseCounter() {
        counter += 1;
    }
    function decreaseCounter() {
        counter != 0 ? counter -= 1 : counter = 0;
    }
</script>

<div class="min-h-screen">
    <h1 class="p-5 text-5xl font-light w-fit text-[#FF6000] block mx-auto">Svelte Testing</h1>

    <div class="mx-8 my-4 md:block md:w-1/2 md:mx-auto text-xl">
        <p class="leading-normal break-words text-center lg:text-left">
            Lorem ipsum <span class="highlight">dolor sit amet</span> consectetur adipisicing elit. 
            Aperiam porro, fugiat incidunt veniam labore modi tempore neque iure repellendus nemo illo 
            quis maxime id natus debitis dignissimos quas! Suscipit, provident.
        </p>
        
        <div class="flex justify-center gap-3 my-8 md:block">
            <Button buttonText="Increase" buttonFunction={increaseCounter}/>
            <Button buttonText="Decrease" buttonFunction={decreaseCounter}/>
        </div>

        <p>ButtonClickCounter: {counter}</p>
        <p>ButtonClickCounterDouble: {doubleCounter}</p>
        <p>Sum: {sum}</p>
    </div>
</div>