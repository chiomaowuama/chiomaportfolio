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
          <div class=" w-full lg:w-4/6 lg:h-full h-4/6 flex  object-contain  ">
            <div class=" flex  flex-col lg:flex-row w-full   ">
              <div class=" lg:w-2/6    flex justify-center  lg:justify-end items-center ">
                <img src="../assets/gele.enc" alt="" srcset="" class="w-28 md:w-48 lg:w-56 rounded-full spinimg cursor-pointer border-2 border-blue-500 p-2">
              </div>
              <!-- <div class="">   -->
                <div class=" lg:w-full lg:h-full  dark:border-white   w-full md:w-full md:border-black space-y-3 font-semibold h-80 text-2xl overflow-y-scroll scrollbar-thin dark:text-white lg:flex lg:flex-col lg:justify-end">      
                     <p class="font-bold border-2 border-r-0 border-l-0 border-t-0 border-black dark:border-white dark:text-white " >About me</p>
                      <p class="md:text-2xl lg:text-xl border-2 border-r-0 border-l-0 border-b-0 border-black  dark:border-white">Good day, My name is Owuama Chioma Maureen and i prefer to be called Chioma. I am a front-end developer from Nigera.I possess a deep appreciation for innovative and creative endeavors, exemplified by my profound passion for design. I derive immense satisfaction from encountering intricate challenges in design and technology, relishing the opportunity to engage in the creation of elegantly simple yet intricately coded solutions. Witnessing the fusion of cutting-edge design concepts with advanced technologies is a source of continual inspiration and motivation for me. </p>
                      <p>resume</p>
                </div>
                <!-- <div class="   border-yellow-300 border-2 flex justif-center items-end font-semibold font-inter text-base dark:text-white  h-full "> 
                <p class="border-2 border-yellow-200 md:text-2xl lg:text-xl ">Good day, My name is Owuama Chioma Maureen and i prefer to be called Chioma. I am a front-end developer from Nigera.I possess a deep appreciation for innovative and creative endeavors, exemplified by my profound passion for design. I derive immense satisfaction from encountering intricate challenges in design and technology, relishing the opportunity to engage in the creation of elegantly simple yet intricately coded solutions. Witnessing the fusion of cutting-edge design concepts with advanced technologies is a source of continual inspiration and motivation for me. </p>
                </div> -->

              <!-- </div> -->
            
            </div>

          </div>
      </div>
        </div>
     </div>
</template>
