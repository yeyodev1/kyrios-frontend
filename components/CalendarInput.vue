<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['input']);

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: 'Fecha',
  },
});

const selectedDate = ref(props.value)

function updateDate(): void {
  emit('input', new Date(selectedDate.value).toISOString());
}
</script>

<template>
  <div class="date-input">
    <label class="date-input-label">
      {{ label }}
    </label>
    <div class="date-input-container">
      <input
        class="input"
        type="date"
        v-model="selectedDate"
        @input="updateDate"
      />
      <i class="fa-regular fa-calendar icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.date-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  &-label {
    font-weight: bold;
    margin-bottom: 12px;
  }
  &-container {
    border: 1px solid $grey;
    border-radius: 8px;
    position: relative;
    .input {
      padding: 8px;
      width: 100%;
      font-size: 14px;
      border: none;
      outline: none;
      background-color: transparent;
      color: $black;
    }
    .icon {
      position: absolute;
      pointer-events: none;
      color: $black;
      top: 6px;
      right: 8px;
      z-index: 5;
      font-size: 20px;
    }
  }
}
</style>