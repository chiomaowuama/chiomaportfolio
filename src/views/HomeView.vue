<script setup>
import{ useDark, useToggle} from "@vueuse/core";
import heading from '@/components/heading.vue'
import navigation from '@/components/navigation.vue'

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="fullscreen2 bg-bigscreenbg dark:bg-bgdark h-screen p-4  ">
    <div class="fullscreen h-full px-2 pt-8 bg-ashbg dark:bg-bgdark border border-black dark:border-white flex flex-col">
      <heading />
      <div class="flex flex-col lg:flex-row h-5/6 justify-between "> 
        <navigation />
          <div class=" w-full lg:w-4/6  py-8 pr-6 flex justify-end   ">
            <p class="w-32 md:w-52 lg:w-28 text-left  text-xl  md:text-3xl lg:text-base font-semibold md:font-semibold">i belive that consistency is key and with the right ammount of consistency stired with hardwork anything is possible</p>
          </div>
      </div>
    </div>

  </div>
</template>

