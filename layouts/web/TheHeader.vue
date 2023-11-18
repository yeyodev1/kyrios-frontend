<script setup lang="ts">
import CrushHeader from '@nabux-crush/crush-header';
import KyriosLogo from '@/assets/kyrios.png'

const menuItems = [
  {
    link: '/',
    name: 'inicio'
  },
  {
    link: '/services',
    name: 'Servicios'
  },
  {
    link: '/',
    name: 'Boletines'
  },
  {
    link: '/contact',
    name: 'Contacto'
  },
  {
    link: '/',
    name: 'Registrarte'
  },
  {
    link: '/',
    name: 'Empezar diagnóstico'
  },
]
</script>

<template>
  <header class="container">
    <CrushHeader
      brandName="kyrios"
      :logoSrc="KyriosLogo">
      <template 
        #menu-buttons>
        <RouterLink 
          v-for="(item, index) in menuItems" 
          :key="index" 
          :to="item.link" 
          :style="{ color: 'black', textDecoration: 'none' }"
          class="container-buttons">
          {{item.name}}
        </RouterLink>
      </template>

    </CrushHeader>
  </header>
</template>

<style lang="scss" scoped>
:deep(.header) {
  background-color: $white;
  gap: 12px;
}
:deep(.header-icon) {
  color: $black;
}
:deep(.header-figure-logo) {
  width: 140px;
  object-fit: inherit;
}
:deep(.toggle-menu-header) {
  padding: 12px;
}
:deep(.header-buttons :nth-child(5)) {
  padding: 6px 12px;
  border: 2px solid $blue;
  border-radius: 8px;
}
:deep(.header-buttons :nth-child(6)) {
  padding: 6px 12px;
  background-color: $blue;
  color: $white !important;
  border-radius: 8px;
  text-align: center;
}
.container {
  &-buttons {
    font-weight: 700;
    color: $black !important;
  }
}
</style>