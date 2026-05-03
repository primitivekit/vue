<script setup lang="ts">
import { computed } from 'vue';
import './Tag.css';

export type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type TagSize = 'small' | 'medium' | 'large';

export interface TagProps {
  variant?: TagVariant;
  size?: TagSize;
  closable?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<TagProps>(), {
  variant: 'default',
  size: 'medium',
  closable: false,
  class: ''
});

const emit = defineEmits<{
  close: [];
}>();

const tagClasses = computed(() => {
  return [
    'tag',
    `tag--${props.variant}`,
    `tag--${props.size}`,
    props.class
  ].filter(Boolean).join(' ');
});

const handleClose = () => {
  emit('close');
};
</script>

<template>
  <span :class="tagClasses">
    <span v-if="$slots.icon" class="tag__icon"><slot name="icon" /></span>
    <span class="tag__content"><slot /></span>
    <button
      v-if="closable"
      type="button"
      class="tag__close"
      @click="handleClose"
      aria-label="Close tag">
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </span>
</template>
