<script setup lang="ts">
import useUserStore from './store/UserStore';

const config = useRuntimeConfig();

const router = useRouter();
const route = useRoute();

const userStore = useUserStore();

onMounted(async() => {
  try {
    userStore.getSession();
  } catch (error) {
    console.error('Error during login: ', error)
  }
})

watch(
  () => userStore.user,
  (newValue, oldValue) => {
    if (!newValue) {
      router.push('/');
      return;
    }
    if (localStorage.getItem('paymentprocess')) {
      router.push( {path: '/pages/tests/[test]/[testFinished]/testOptions/[testgrade]'})
    }
  }
)
</script>

<template>
  <div class="app-container">
    <NuxtLayout>
      <div class="app-container-view">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: $white;
  &-view{
    flex: 1;
  }
}
</style>
