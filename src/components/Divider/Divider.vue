<script setup lang="ts">
import { computed } from 'vue';
import './Divider.css';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerVariant = 'solid' | 'dashed' | 'dotted';

export interface DividerProps {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  label?: string;
  class?: string;
}

const props = withDefaults(defineProps<DividerProps>(), {
  orientation: 'horizontal',
  variant: 'solid',
  class: ''
});

const dividerClasses = computed(() => {
  return [
    'divider',
    `divider--${props.orientation}`,
    `divider--${props.variant}`,
    props.label ? 'divider--with-label' : '',
    props.class
  ].filter(Boolean).join(' ');
});
</script>

<template>
  <div v-if="label && orientation === 'horizontal'" :class="dividerClasses" role="separator">
    <hr class="divider__line" />
    <span class="divider__label">{{ label }}</span>
    <hr class="divider__line" />
  </div>
  <hr v-else :class="dividerClasses" role="separator" :aria-orientation="orientation" />
</template>
