<script setup>
import useTestStore from '@/store/TestStore';

const testStore = useTestStore();

const responseOptions = testStore.responseOptions;

const props = defineProps({
  process: {
    type: String,
    required: true,
  },
  clause: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <div class="container-content">
      <div class="container-content-header">
        <h3 v-if="process" class="container-content-header-process">Proceso: <span class="container-content-header-process-word">{{ process }}</span></h3>
        <p v-if="clause" class="container-content-header-control">Control: <span  class="container-content-header-process-word">{{clause}}</span></p>
      </div>
      <p class="container-content-description">
        Las pruebas de auditoría y otras actividades de aseguramiento que impliquen la evaluación de los sistemas operativos se planificarán y acordarán entre el evaluador y la dirección apropiada.
      </p>
      <div class="container-content-table">
        <div class="table-row table-header">
          <div class="table-cell">Niveles</div>
          <div class="table-cell">Criterio</div>
        </div>
        <div class="table-row" v-for="(option, index) in responseOptions" :key="index">
          <div class="table-cell">{{ index + 1 }}</div>
          <div class="table-cell">{{ option.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: $crush-container-max-width;
  padding: 20px;
  border-radius: 8px;
  &-content {
    &-header {
      margin-bottom: 16px;
      &-control {
        margin: 0;
        color: $black;
        font-size: $body-font-size;
        font-weight: 800;
      }
      &-process {
        font-weight: 800;
        font-size: $body-font-size;
        &-word {
          font-weight: 400;
        }
      }

      &-control {
        margin-top: 8px;
      }
    }

    &-description {
      margin-bottom: 24px;
      line-height: 1.6;
      color: $grey;
    }

    &-table {
      width: 100%;

      .table-row {
        display: flex;
        align-items: center;

        &.table-header {
          background-color: #eee;
          font-weight: bold;
        }
      }

      .table-cell {
        flex: 1;
        padding: 12px;
        border: 1px solid #ddd;

        &:first-child {
          flex-basis: 100px;
          flex-grow: 0;
          flex-shrink: 0;
        }
      }
    }
  }
}
</style>
