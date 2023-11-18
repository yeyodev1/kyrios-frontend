<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import empresarios from '@/assets/hero/empresarios.jpg';
import oficina from '@/assets/hero/oficina.jpg';
import reunion from '@/assets/hero/reunion.jpg';

const images = ref([
  empresarios,
  oficina,
  reunion,
]);
const currentImageIndex = ref(0);

let intervalId;

//functions to change image
const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value + images.value.length - 1) % images.value.length;
};
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
};
const setImage = index => {
  currentImageIndex.value = index;
};
const changeImageAutomatically = () => {
  nextImage();
};

onMounted(() => {
  intervalId = setInterval(changeImageAutomatically, 3000);
});


onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="carousel-container">
    <div class="carousel-slide">
      <div
        class="image"
        v-for="(image, index) in images"
        :key="index"
        :style="{ backgroundImage: `url(${image})` }"
        :class="{ active: currentImageIndex === index }"
      ></div>
    </div>
    <button class="carousel-control left" @click="prevImage">&#60;</button>
    <button class="carousel-control right" @click="nextImage">&#62;</button>
    <div class="carousel-indicators">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: currentImageIndex === index }"
        @click="setImage(index)"
      ></span>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 300px;

  .carousel-slide {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    .image {
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      transition: opacity 1s ease-in-out;
      opacity: 0;

      &.active {
        opacity: 1;
      }
    }
  }

  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }
  }

  .carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;

    span {
      display: block;
      width: 10px;
      height: 10px;
      margin: 0 5px;
      background-color: white;
      border-radius: 50%;
      cursor: pointer;

      &.active {
        background-color: $blue;
      }
    }
  }
}
</style>
