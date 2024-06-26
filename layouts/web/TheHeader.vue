<script setup lang="ts">
import { useUserStore } from '@/store/UserStore';

import KyriosLogo from '@/assets/kyrios.png'
import { allMenuItems } from '~/utils/HeaderItems';
import CrushHeader from '@nabux-crush/crush-header';

const userStore = useUserStore();

const isDropDownMenuOpen = ref(false);
const isUserLoggedIn = computed(() => userStore.user !== null);
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

function toggleDropDownMenu():void {
  isDropDownMenuOpen.value = !isDropDownMenuOpen.value;
}
async function handleLogout(Menu: any) {
  await userStore.logout();
  Menu();
}
</script>

<template>
  <header class="container">
    <CrushHeader
      :logoSrc="KyriosLogo"
      brandName="kyrios" >
      <template #menu-buttons="{ toggleMenu }">
          <template 
            v-for="item in menuItems" 
            :key="item.link">
              <template v-if="item.name !== 'Servicios'">
                <RouterLink 
                  :to="item.link"
                  :class="[
                    'nav-link',
                    { 'red': item.name === 'Empezar diagnóstico' || item.name === 'Realizar diagnóstico' },
                    { 'black': item.name === 'Registrarte' }
                  ]"
                  @click="toggleMenu" >
                    {{ item.name }}
                </RouterLink>
              </template>
              
              <div v-else class="dropdown">
                <div 
                  class="nav-link" 
                  @click="toggleDropDownMenu">
                    {{ item.name }}
                </div>
                <div class="dropdown-content" v-show="isDropDownMenuOpen">
                  <RouterLink 
                    v-for="subItem in item.subItems" 
                    :key="subItem.link"
                    :to="subItem.link"
                    class="dropdown-item"
                    @click="toggleMenu" >
                      {{ subItem.name }}
                  </RouterLink>
                </div>
              </div>
          </template>
          
          <RouterLink 
            v-if="isUserLoggedIn"
            to="/"
            class="nav-link black"
            @click="handleLogout(toggleMenu)" >
              Cerrar Sesión
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
:deep(.header-buttons .black) {
  padding: 6px 12px;
  border: 2px solid $black;
  border-radius: 8px;
}
:deep(.header-buttons .red) {
  padding: 6px 12px;
  background-color: $red;
  color: $white !important;
  border-radius: 8px;
  text-align: center;
}
.nav-link {
  color: $black;
  text-decoration: none;
}
.dropdown {
  display: inline-block;
  position: relative;
}
.dropdown-content {
  display: grid;
  grid-template-rows: 0fr;
  min-width: 160px;
  transition: .3s grid-template-rows;
  @media (min-width: 768px){
    display: none;
    background-color: $white;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    position: absolute;
  }
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {
      background-color: $white;
    }
  }
}
.dropdown:hover .dropdown-content {
  grid-template-rows: 1fr;
  @media (min-width: 768px){
    display: block;
  }
}
</style>