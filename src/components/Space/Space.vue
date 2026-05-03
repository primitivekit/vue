<script setup lang="ts">
import { computed } from 'vue';
import './Space.css';

export type SpaceSize = 'small' | 'medium' | 'large' | number;
export type SpaceDirection = 'horizontal' | 'vertical';
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';

export interface SpaceProps {
  size?: SpaceSize;
  direction?: SpaceDirection;
  align?: SpaceAlign;
  wrap?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<SpaceProps>(), {
  size: 'medium',
  direction: 'horizontal',
  wrap: false,
  class: ''
});

const spaceClasses = computed(() => {
  return [
    'space',
    `space--${props.direction}`,
    typeof props.size === 'string' ? `space--${props.size}` : '',
    props.align ? `space--align-${props.align}` : '',
    props.wrap ? 'space--wrap' : '',
    props.class
  ].filter(Boolean).join(' ');
});

const spaceStyles = computed(() => {
  if (typeof props.size === 'number') {
    return { '--space-gap': `${props.size}px` };
  }
  return {};
});
</script>

<template>
  <div :class="spaceClasses" :style="spaceStyles">
    <div v-for="(child, index) in $slots.default?.()" :key="index" class="space__item">
      <component :is="child" />
    </div>
  </div>
</template>
