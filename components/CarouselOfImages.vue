<template>
  <div class="logos">
    <h2 class="logos__title">Nuestros Clientes</h2>
    <div class="logos-slide">
      <img v-for="(image, index) in allImages" :key="index" :src="image.filename" :alt="image.alt" class="logo-img">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CarouselImagesService from '~/api/CarouselImagesService';

interface Image {
  id: number;
  alt: string;
  filename: string;
}

const carouselImagesService = new CarouselImagesService();
const allImages = ref<Image[]>([]);

async function getAllImages(){
  const response = await carouselImagesService.getAllImages();
  if (response && response.length > 0) {
    allImages.value = response[0].content.images.concat(response[0].content.images);
  }
}

onMounted(async() => {
  await getAllImages();
  const copy = document.querySelector('.logos-slide')!.cloneNode(true);
  document.querySelector('.logos')!.appendChild(copy);
});
</script>

<style lang="scss" scoped>
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to{
    transform: translateX(-100%);
  }
}
.logos{
  width: 90vw;
  margin: 120px auto;
  overflow: hidden;
  background: $white;
  white-space: nowrap;
  position: relative;
}
.logos:before,
.logos:after{
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  content: '';
  z-index: 10;  
}
.logos:before{
  @media (min-width: 1024px){
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));    
  }
}
.logos:after{
  @media (min-width: 1024px){
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));    
  }
}
.logos:hover .logos-slide{
  animation-play-state: paused;
}
.logos-slide{
  display: inline-block;
  animation: slide 50s infinite linear;
}
.logo-img{
  height: 60px;
  margin: 0 40px;
}
.logos__title{
  font-size: 2rem;
  text-align: center;
  margin-bottom: 48px;
}
</style>
