<script lang="ts">
    import { onMount } from "svelte";
    import Button from "../../lib/button.svelte";
//   import type { PageData } from "../$types";
  
//   export let data: PageData;

    let todoList: string[] = [];
    let inputValue = '';
    $: disableStatus = inputValue.length < 2;

    function addTask() {
        if(inputValue.length > 2) {
            todoList = [...todoList, inputValue];
            localStorage.setItem("todoList", JSON.stringify(todoList));
            inputValue = '';
        }
    }

    onMount(() => {
        todoList = JSON.parse(localStorage.getItem('todoList') || '[]');
    })
  </script>
  
<div class="min-h-screen">
    <h1 class="p-5 text-5xl font-light w-fit text-[#FF6000] block mx-auto">Taskmanager</h1>

    <div class="mx-8 my-4 md:block md:w-1/2 md:mx-auto text-xl">
        <p class="leading-normal break-words text-center lg:text-left">
            Tasks are saved in your <span class="highlight">local storage!</span> If you want to remove the tasks you have to clear your local storage. 
            Feel free to commit changes to the project. I created this svelte-project for <span class="highlight">testing purposes</span> only.
        </p>
        
        <div class="flex justify-center md:block mt-5">
            <input type="text" id="todoInput" 
            class="border border-[#FF6000] focus:(outline-none ring-2 ring-[#e65800]) rounded-lg p-1 text-lg block mb-2 w-[300px]" 
            maxlength="25" bind:value={inputValue} autocomplete="off">

        <Button on:click={addTask} width="300px" disabled={disableStatus}>
            <div class="text-3xl i-ic:baseline-add mr-2"/> Add Task to your List 
        </Button>
        </div>

        <table class="mt-13 w-full">
        <thead class="border-2 border-black">
            <th class="p-3 text-left">Tasks:</th>
        </thead>
        <tbody>
            {#each todoList as todo}
                <tr class="odd:bg-gray-3 even:bg-gray-3/70 border-2 border-black">
                    <td class="p-3">
                        {todo}
                    </td>
                </tr>
            {/each}
        </tbody>
        </table>

    </div>
  </div>