<script setup>
import MarkdownIt from 'markdown-it'
import pdf from '@/assets/dataCompany/presentacionKyrios.pdf'

import TeamInfoService from '~/api/TeamInfoService';

const teamInfoService = new TeamInfoService();
const md = new MarkdownIt();

const allTeamInfo = ref([]);

async function getAllTeamInfo(){
  const response = await teamInfoService.getAllTeamInfo();
  const mapResponse = response.map((member) => {
    return {
      id: member.id,
      imageUrl: member.content.imagenPersonal.filename,
      name: member.content.nombre,
      role: member.content.rol,
      content: md.render(member.content.contenido),
      email: member.content.email,
      phone: member.content.numeroTelf,
      professionalDetails: member.content.tablaDeActividades
    }
  })
  console.log(mapResponse);
  allTeamInfo.value = mapResponse;
  return mapResponse;
}

onMounted(async() => {
  await getAllTeamInfo();
})

function downloadFile () {
  console.log(pdf);
  const link = document.createElement('a');
  link.href = pdf;
  link.setAttribute('download', 'kyrios.pdf');
  document.body.appendChild(link);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link)
}
</script>

<template>
  <div class="container">
    <h3 class="container-title">
      Equipo
    </h3>
    <div class="container-team-cards">
      <TeamCard 
        v-for="member in allTeamInfo" 
        :key="member.id" 
        :imageUrl="member.imageUrl" 
        :name="member.name" 
        :role="member.role" 
        :email="member.email" 
        :phone="member.phone" 
        :professionalDetails="member.content" />
    </div>
    <div class="container-data">
      <TeamBoards></TeamBoards>
    </div>
    <button @click="downloadFile" class="button">Solicita más información aquí</button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 24px;
  max-width: 1024px;
  margin: 0 auto;
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
    width: 90vw;
    @media (min-width: 768px) {
      max-width: 600px;      
    }
    display: flex;
    gap: 2rem;
    flex-direction: column;
  }
  &-data {
    width: 100%;
    display: flex;
    flex-direction: column;
     overflow-x: auto;
  }
  .button {
    background-color: $red;
    color: $white;
    margin: 64px 0;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 8px;
    border: none;
    padding: 16px;
  }
}
:deep(p){
  font-family: $font;
  margin: 20px auto;
  font-size: .9rem;
  @media (min-width: 768px){
    font-size: 1rem;
  }
}
:deep(h2){
  font-family: $font;
  font-size: 1.2rem;
  @media (min-width: 768px){
    font-size: 1.5rem;
  }
}
:deep(ul){
  font-family: $font;
  font-size: .9rem;
  margin: 20px 0;
  @media (min-width: 768px){
    font-size: 1rem;
  }
}
:deep(th){
  font-size: 1;
  @media (min-width: 768px){
    font-size: 1.1rem;
  }
}
:deep(td){
  font-size: .8rem;
  @media (min-width: 768px){
    font-size: .9rem;
  }
}
</style>
