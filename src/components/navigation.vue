<script setup>
</script>
<template>
    <div class=" w-full  h-2/6 lg:w-2/6 lg:h-full">
        <ul class=" space-y-3 md:space-y-4 text-xl md:text-3xl lg:text-2xl font-bold px-4 dark:text-white">
            <router-link to="/" custom v-slot="{ href, navigate, isActive }">
              <li :class="{ 'dark:text-white': isActive }" class="">
                <a v-if="!isActive" :href="href" @click="navigate">Home</a>
                <span v-else>●</span>
              </li>
            </router-link>
            <router-link to="/projects" custom v-slot="{ href, navigate, isActive }">
              <li :class="{ 'dark:text-white': isActive }" class="">
                <a v-if="!isActive" :href="href" @click="navigate">Projects</a>
                <span v-else>●</span>
              </li>
            </router-link>
            <router-link to="/infomation" custom v-slot="{ href, navigate, isActive }">
              <li :class="{ 'dark:text-white': isActive }" class="">
                <a v-if="!isActive" :href="href" @click="navigate">Info</a>
                <span v-else>●</span>
              </li>
            </router-link>
            <li>Contact</li>
          </ul>
    </div>
</template>