<script setup>
import yulyImage from '@/assets/yuly.png'

const team = [
  {
    id: 1,
    imageUrl: yulyImage,
    name: 'Yuly Alexandra Mendoza Bailón',
    role: `SISTEMA DE GESTIÓN DE LA CALIDAD CERTIFICADO ISO 9001:2015 ALCANCE: SERVICIOS DE CAPACITACIÓN, ASESORÍA EN SISTEMAS DE GESTIÓN Y MEJORA CONTINUA. CERTIFICADO SGS EC19/81841649`,
    email: 'yulymendoza@hotmail.com',
    phone: '0989752092'
  }
]
</script>

<template>
  <div class="container">
    <h3 class="container-title">Equipo</h3>
    <div class="container-team-cards">
      <teamCard v-for="member in team" :key="member.id" :imageUrl="member.imageUrl" :name="member.name" :role="member.role" :email="member.email" :phone="member.phone" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  &-title {
    font-size: 2rem;
  }
  &-team-cards {
    max-width: 600px;
    display: flex;
    gap: 2rem;
  }
}
</style>
