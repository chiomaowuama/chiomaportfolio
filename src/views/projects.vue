<script setup>
import{  useDark, useToggle} from "@vueuse/core";
import heading from '@/components/heading.vue'
import navigation from '@/components/navigation.vue'
import { ref } from "vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
let hover = ref(false);
let hoverone = ref(false);
let hovertwo = ref(false);
let hoverthree = ref(false);
console.log(hoverone);
</script>
<template>
     <div class="fullscreen2 bg-bigscreenbg dark:bg-bgdark h-screen p-4 box-border ">
        <div class="fullscreen h-full px-2 pt-8 bg-ashbg dark:bg-bgdark border border-black dark:border-white flex flex-col">
            <heading />           
            <div class="flex flex-col lg:flex-row h-5/6 justify-between  "> 
                <navigation />    
                <!-- border-l-0 border-r-0 border-b-0  -->
                <div class=" w-full  lg:w-4/6   pb-1 pt-1 pr-6 flex  justify-end self-end  dark:border-white     ">
                <div class="  lg:justify-center   hidden  lg:block lg:w-5/6">
                <div class="slides">
                    <div  class="slide_one">
                        <img src="../assets/testrun.jfif" alt="" srcset="" class="smooth rounded-t-3xl w-full   h-full  " :class="{ 'smooth-hover': hover }">
                    </div>
                    <div  class="slide_two">
                        <img src="../assets/blackno-signal-tv.gif" alt="" srcset="" class="smooth1 rounded-t-3xl w-5/6 mx-auto h-full" :class="{ 'smooth-hover1': hoverone }">
                    </div>
                    <div  class="slide_three">
                        <img src="../assets/thrid.jfif" alt="" srcset="" class="smooth2 rounded-t-3xl w-5/6 mx-auto h-full" :class="{ 'smooth-hover2': hovertwo }">
                    </div>
                    <div  class="slide_four">
                        <img src="../assets/sectest.jfif" alt="" srcset="" class="smooth3 rounded-t-3xl w-5/6 mx-auto h-full" :class="{ 'smooth-hover3': hoverthree }">
                    </div>
                </div>
                </div>
                <div class=" lg:w-2/6  dark:border-white space-y-1 justify-end md:w-80 font-semibold h-72 md:h-fit ">
                <div class="pl-8 ">
                    <p class="text-3xl font-bold dark:text-white ">WORK</p>
                </div>
                <div class="border-2 border-black border-r-0 border-l-0 border-b-0 lg:w-full lg:h-64  dark:border-white   w-full md:w-full md:border-black space-y-3 font-semibold h-60  text-2xl overflow-y-scroll scrollbar-thin dark:text-white">      
               
               <div class="flex flex-row-reverse py-2 " @mouseenter="hover = true" @mouseleave="hover = false">
                    <div id="facebookicon" class=" w-5/6"  >
                        <p class="pr-3 arrow " >Pickt</p>
                    </div>
                    <div id="onhoverfb" class=" w-1/6">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="pr-3 arrow " />
                    </div>  
               </div>
              
               <div class="flex flex-row-reverse py-2 " @mouseenter="hoverone = true" @mouseleave="hoverone = false">
                    <div id="facebookicon1" class=" w-5/6">
                        <p class="pr-3 arrow " >tropic-soles</p>
                    </div>
                    <div id="onhoverfb1" class=" w-1/6">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="pr-3 arrow " />
                    </div>  
               </div>
               <div class="flex flex-row-reverse py-2 " @mouseenter="hovertwo = true" @mouseleave="hovertwo = false">
                    <div id="facebookicon2" class=" w-5/6">
                        <p class="pr-3 arrow " >dutiful</p>
                    </div>
                    <div id="onhoverfb2" class=" w-1/6">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="pr-3 arrow " />
                    </div>  
               </div>
               <div class="flex flex-row-reverse py-2 " @mouseenter="hoverthree = true" @mouseleave="hoverthree = false">
                    <div id="facebookicon3" class=" w-5/6">
                        <p class="pr-3 arrow " >Food-web</p>
                    </div>
                    <div id="onhoverfb3" class=" w-1/6">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="pr-3 arrow " />
                    </div>  
               </div>
               <div class="flex flex-row-reverse py-2 ">
                    <div id="facebookicon4" class=" w-5/6">
                        <p class="pr-3 arrow " >Mega-stop</p>
                    </div>
                    <div id="onhoverfb4" class="0 w-1/6">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="pr-3 arrow " />
                    </div>  
               </div>
               <div class="flex flex-row-reverse py-2 ">
                    <div id="facebookicon5" class=" w-5/6">
                        <p class="pr-3 arrow " >Decagon</p>
                    </div>
                    <div id="onhoverfb5" class=" w-1/6">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="pr-3 arrow " />
                    </div>  
               </div>
               <div class="flex flex-row-reverse py-2 ">
                    <div id="facebookicon6" class=" w-5/6">
                        <p class="pr-3 arrow text-2xl" >Summer-girl</p>
                    </div>
                    <div id="onhoverfb6" class=" w-1/6">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="pr-3 arrow " />
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
