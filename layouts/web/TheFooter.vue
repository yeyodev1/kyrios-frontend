<script setup lang="ts">
import CrushFooter from '@nabux-crush/crush-footer';
import KyriosLogo from '@/assets/kyrios-footer.png';

const services = [
  {
    service: 'Auditorias',
  },
  {
    service: 'Capacitaciones',
  },
  {
    service: 'Evaluación y desarrollo de proveedores',
  },
  {
    service: 'Asesoría en implementación de sistemas y gestión',
  },
]

const socialIcons = [
  {
    link: 'https://t.me/+tovWKux6aU85NDlh',
    iconClass: '<i class="fa-regular fa-envelope" />',
  }, {
    link: 'https://t.me/+tovWKux6aU85NDlh',
    iconClass: '<i class="fa-brands fa-whatsapp" />'
  }, {
    link: 'https://t.me/+tovWKux6aU85NDlh',
    iconClass: '<i class="fa-brands fa-facebook" />'
  }
]
</script>

<template>
  <div class="container">
    <div class="width">
      <CrushFooter
        :logoSrc="KyriosLogo">
        <template #social-icons>
          <a
            v-for="(icon, index) in socialIcons" :key="index" :href="icon.link" target="_blank">
            <span
              :style="{ color: 'white' }"
              v-html="icon.iconClass" />      
          </a>
        </template>
        <template #footer-links>
          <p
            v-for="(service, index) in services" 
            :key="index" 
            target="_blank"
            class="service">
            {{ service.service }}
          </p>
        </template>
      </CrushFooter>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.footer-options) {
  flex-wrap: wrap;
}
.container {
  background-color: $black;
  display: flex;
  justify-content: center;
  align-items: center;
  .width {
    max-width: $desktop-lower-breakpoint;
  }
  .service {
    color: $white;
    font-size: 14px;
  }
}
</style>