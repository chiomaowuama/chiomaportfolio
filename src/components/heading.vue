<script setup>
import{ useDark, useToggle} from "@vueuse/core";


const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<template>
    <div class=" mb-2 md:mb-5 h-1/6 md:h-2/6 ">
        <div class="flex justify-between items-center">
          <h1 class="text-black text-2xl md:text-6xl lg:text-7xl font-bold dark:text-white">Owuama Chioma</h1>
          <div class="lg:pr-5">
            <input type="checkbox" id="darkmode-toggle" @click="toggleDark()"  />
            <label for="darkmode-toggle" class="label  after:transition-all duration-700">
              <font-awesome-icon icon="fa-solid fa-moon" class="sun svg"/>
              <font-awesome-icon icon="fa-solid fa-sun" class="moon svg "/>
            </label>
          </div>
        </div>
        <p class="text-sm md:text-base   dark:text-white">Designer & Developer</p>
      </div>
</template>