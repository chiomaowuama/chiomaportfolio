<script setup>
import { useDark, useToggle } from "@vueuse/core";
import heading from "@/components/heading.vue";
import navigation from "@/components/navigation.vue";
import { ref } from "vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
let hover = ref(false);
let hoverone = ref(false);
let hovertwo = ref(false);
let hoverthree = ref(false);
let hoverfour = ref(false);
let hoverfive = ref(false);
console.log(hoverone);
</script>
<template>
  <div
    class="fullscreen2 bg-bigscreenbg dark:bg-bgdark h-screen p-4 box-border"
  >
    <div
      class="fullscreen h-full px-2 pt-8 bg-ashbg dark:bg-bgdark border border-black dark:border-white flex flex-col"
    >
      <heading />
      <div class="flex flex-col lg:flex-row h-5/6 justify-between">
        <navigation />
        <!-- border-l-0 border-r-0 border-b-0  -->
        <div
          class="w-full lg:w-4/6 pb-1 pt-1 pr-6 flex justify-end self-end dark:border-white border-2 border-green-900"
        >
          <div class="lg:justify-center hidden lg:block lg:w-5/6">
            <div class="slides p-5">
              <div class="slide_one px-2 xl:px-5">
                <img
                  src="../assets/pick.png"
                  alt=""
                  srcset=""
                  class="smooth rounded-t-3xl w-full h-full"
                  :class="{ 'smooth-hover': hover }"
                />
              </div>
              <div class="slide_two px-2 xl:px-5">
                <img
                  src="../assets/shoestore.png"
                  alt=""
                  srcset=""
                  class="smooth1 rounded-t-3xl mx-auto h-full"
                  :class="{ 'smooth-hover1': hoverone }"
                />
              </div>
              <div class="slide_three px-2 xl:px-5">
                <img
                  src="../assets/dutiful.png"
                  alt=""
                  srcset=""
                  class="smooth2 rounded-t-3xl mx-auto h-full"
                  :class="{ 'smooth-hover2': hovertwo }"
                />
              </div>
              <div class="slide_four px-2 xl:px-5">
                <img
                  src="../assets/workit.png"
                  alt=""
                  srcset=""
                  class="smooth3 rounded-t-3xl mx-auto h-full"
                  :class="{ 'smooth-hover3': hoverthree }"
                />
              </div>
              <div class="slide_five px-2 xl:px-5">
                <img
                  src="../assets/summergirl.png"
                  alt=""
                  srcset=""
                  class="smooth4 rounded-t-3xl mx-auto h-full"
                  :class="{ 'smooth-hover4': hoverfour }"
                />
              </div>
              <div class="slide_six px-2 xl:px-5">
                <img
                  src="../assets/megastop.png"
                  alt=""
                  srcset=""
                  class="smooth5 rounded-t-3xl partialpics mx-auto h-full"
                  :class="{ 'smooth-hover5': hoverfive }"
                />
              </div>
            </div>
          </div>
          <div
            class="lg:w-2/6 dark:border-white space-y-1 justify-end md:w-80 font-semibold h-72 md:h-fit border-2 border-green-900"
          >
            <div class="pl-8">
              <p class="text-3xl font-bold dark:text-white">WORK</p>
            </div>
            <div
              class="border-2 border-black border-r-0 border-l-0 border-b-0 lg:w-full lg:h-64 cursor-pointer dark:border-white w-full md:w-full md:border-black space-y-3 font-semibold h-60 text-2xl overflow-y-scroll scrollbar-none lg:scrollbar-none dark:text-white"
            >
              <div
                class="flex flex-row-reverse py-2"
                @mouseenter="hover = true"
                @mouseleave="hover = false"
              >
                <div id="facebookicon" class="w-5/6">
                  <a href="https://pickto.netlify.app">
                    <p class="pr-3 arrow">Pickt</p>
                  </a>
                </div>
                <div id="onhoverfb" class="w-1/6">
                  <font-awesome-icon
                    icon="fa-solid fa-arrow-right"
                    class="pr-3 arrow"
                  />
                </div>
              </div>

              <div
                class="flex flex-row-reverse py-2"
                @mouseenter="hoverone = true"
                @mouseleave="hoverone = false"
              >
                <div id="facebookicon1" class="w-5/6">
                  <a href="https://shoesoles.netlify.app">
                    <p class="pr-3 arrow">tropic-soles</p>
                  </a>
                </div>
                <div id="onhoverfb1" class="w-1/6">
                  <font-awesome-icon
                    icon="fa-solid fa-arrow-right"
                    class="pr-3 arrow"
                  />
                </div>
              </div>
              <div
                class="flex flex-row-reverse py-2"
                @mouseenter="hovertwo = true"
                @mouseleave="hovertwo = false"
              >
                <div id="facebookicon2" class="w-5/6">
                  <a href="https://dutiful-replica.netlify.app">
                    <p class="pr-3 arrow">dutiful</p>
                  </a>
                </div>
                <div id="onhoverfb2" class="w-1/6">
                  <font-awesome-icon
                    icon="fa-solid fa-arrow-right"
                    class="pr-3 arrow"
                  />
                </div>
              </div>
              <div
                class="flex flex-row-reverse py-2"
                @mouseenter="hoverthree = true"
                @mouseleave="hoverthree = false"
              >
                <div id="facebookicon3" class="w-5/6">
                  <a href="https://workitapp.netlify.app">
                    <p class="pr-3 arrow">Work-It</p>
                  </a>
                </div>
                <div id="onhoverfb3" class="w-1/6">
                  <font-awesome-icon
                    icon="fa-solid fa-arrow-right"
                    class="pr-3 arrow"
                  />
                </div>
              </div>
              <div
                class="flex flex-row-reverse py-2"
                @mouseenter="hoverfour = true"
                @mouseleave="hoverthree = false"
              >
                <div id="facebookicon6" class="w-5/6">
                  <a href="https://summergirl.netlify.app">
                    <p class="pr-3 arrow text-2xl">Summer-girl</p>
                  </a>
                </div>
                <div id="onhoverfb6" class="w-1/6">
                  <font-awesome-icon
                    icon="fa-solid fa-arrow-right"
                    class="pr-3 arrow"
                  />
                </div>
              </div>
              <div
                class="flex flex-row-reverse py-2"
                @mouseenter="hoverfive = true"
                @mouseleave="hoverthree = false"
              >
                <div id="facebookicon4" class="w-5/6">
                  <a href="https://megastop.netlify.app">
                    <p class="pr-3 arrow">Mega-stop</p>
                  </a>
                </div>
                <div id="onhoverfb4" class="0 w-1/6">
                  <font-awesome-icon
                    icon="fa-solid fa-arrow-right"
                    class="pr-3 arrow"
                  />
                </div>
              </div>
              <div class="flex flex-row-reverse py-2">
                <div id="facebookicon5" class="w-5/6">
                  <p class="pr-3 arrow">Decagon</p>
                </div>
                <div id="onhoverfb5" class="w-1/6">
                  <font-awesome-icon
                    icon="fa-solid fa-arrow-right"
                    class="pr-3 arrow"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- <p class="w-32 md:w-52 lg:w-28 text-left  text-xl  md:text-3xl lg:text-base font-semibold md:font-semibold">i belive that consistency is key and with the right ammount of consistency stired with hardwork anything is possible</p> -->
        </div>
      </div>
    </div>
  </div>
</template>
