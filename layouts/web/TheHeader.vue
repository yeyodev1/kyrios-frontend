<script setup lang="ts">
import { useUserStore } from '@/store/UserStore';

import CrushHeader from '@nabux-crush/crush-header';
import KyriosLogo from '@/assets/kyrios.png'


const userStore = useUserStore();

const isUserLoggedIn = computed(() => userStore.user !== null);

const allMenuItems = [
  {
    link: '/team', 
    name: 'Equipo'
  },
  {
    link: '/services',
    name: 'Servicios'
  },
  {
    link: '/boletines',
    name: 'Boletines'
  },
  {
    link: '/#contact',
    name: 'Contacto'
  },
  {
    link: '/userRegister',
    name: 'Registrarte'
  },
  {
    link: '/userlogin',
    name: 'Empezar diagnóstico'
  },  
]

const menuItems = computed(() => {
  const items = [ ...allMenuItems];
  if(isUserLoggedIn.value) {
    const diagnosticIndex = items.findIndex(item => item.name === 'Empezar diagnóstico');
    if(diagnosticIndex !== -1) {
      items[diagnosticIndex] = {
        ...items[diagnosticIndex],
        link: '/tests', 
        name: 'Realizar diagnóstico' 
      };
    }
    return items.filter((item, index) => item.name !== 'Registrarte');
  }
  return items;
});

async function handleLogout(Menu: any) {
  await userStore.logout();
  Menu();
}

onMounted(() => {
  console.log(userStore.user)
})

</script>

<template>
  <header class="container">
    <CrushHeader
      brandName="kyrios"
      :logoSrc="KyriosLogo">
      <template #menu-buttons="{ toggleMenu }">
        <RouterLink 
          v-for="(item, index) in menuItems" 
          :key="index" 
          :to="item.link"
          :style="{ color: 'black', textDecoration: 'none', }"
          class="header-buttons-button"
          @click="toggleMenu">
          {{item.name}}
        </RouterLink>
        <RouterLink 
          v-if="isUserLoggedIn"
          to="/"
          :style="{ color: 'black', textDecoration: 'none', }"
          class="header-buttons-button"
          @click="handleLogout(toggleMenu)">
          Cerrar Sesion
        </RouterLink>
      </template>
    </CrushHeader>
  </header>
</template>

<style lang="scss" scoped>
:deep(.header) {
  background-color: $white !important;
  gap: 12px;
  border-bottom: 1px solid $black;
  @media (min-width: 1024px){
    padding-left: 120px;
  }
}
:deep(.header-icon) {
  color: $black;
}
:deep(.header-figure-logo) {
  width: 140px;
  object-fit: contain;
}
:deep(.toggle-menu-header) {
  padding: 12px;
}
:deep(.header-buttons :nth-child(5)) {
  padding: 6px 12px;
  border: 2px solid $black;
  border-radius: 8px;
}
:deep(.header-buttons :nth-child(6)) {
  padding: 6px 12px;
  background-color: $red;
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