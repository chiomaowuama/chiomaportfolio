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
            <div class=" flex  flex-col lg:flex-row w-full self-end ">
              <div class=" lg:w-3/6  hidden  lg:flex justify-center  lg:justify-center items-center">
                <!-- chnage this to a new picture -->
                <!-- <img src="../assets/gele.enc" alt="" srcset="" class="w-28 md:w-48 lg:w-56 rounded-full  cursor-pointer border-2 border-dashed border-black p-2 dark:border-white" > -->
              </div>
              <!-- border-2 border-blue-800 lg:w-4/6 lg:h-full  dark:border-white   w-full md:w-full md:border-black space-y-3 font-semibold h-80 text-2xl overflow-y-scroll scrollbar-thin dark:text-white lg:flex lg:flex-col lg:justify-end -->
                <div class="lg:w-3/6   dark:border-white   w-full md:w-full md:border-black overflow-y-scroll scrollbar-thin h-80 md:h-3/6 lg:h-80 space-y-3 ">      
                     <p class="font-bold border-2 border-r-0 border-l-0 border-t-0 border-black dark:border-white dark:text-white text-2xl uppercase  text-extrabold " >About me</p>
                      <p class="flex text-justify md:text-2xl lg:text-xl  dark:text-white dark:border-white font-semibold">Good day, My name is Owuama Chioma Maureen and i prefer to be called Chioma. I am a front-end developer from Nigera.I possess a deep appreciation for innovative and creative endeavors, exemplified by my profound passion for design. I derive immense satisfaction from encountering intricate challenges in design and technology, relishing the opportunity to engage in the creation of elegantly simple yet intricately coded solutions. Witnessing the fusion of cutting-edge design concepts with advanced technologies is a source of continual inspiration and motivation for me. </p>
                      <div class="flex flex-row  " >
                        <div id="facebookicon9" class=" w-1/5 ">
                            <a href="https://drive.google.com/file/d/13RI9Mvqu7CAt2Cd_FgjGELO1Gpa6A6Cj/view?usp=sharing">
                              <p class="pr-3 arrow font-bold text-xl dark:text-white ">resume</p>
                            </a>
                        </div>
                        <div id="onhoverfb9" class=" w-3/5">
                            <font-awesome-icon icon="fa-solid fa-arrow-down" class="pr-3 arrow dark:text-white " />
                            <!-- <font-awesome-icon icon="fa-solid fa-arrow-down" /> -->
                        </div>  
                      </div>
                </div>
               
            
            </div>

          </div>
      </div>
        </div>
     </div>
</template>
