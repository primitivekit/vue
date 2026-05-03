<script setup lang="ts">
import { computed } from 'vue';
import './Card.css';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

export interface CardProps {
  variant?: CardVariant;
  hoverable?: boolean;
  clickable?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'elevated',
  hoverable: false,
  clickable: false,
  class: ''
});

const cardClasses = computed(() => {
  return [
    'card',
    `card--${props.variant}`,
    props.hoverable ? 'card--hoverable' : '',
    props.clickable ? 'card--clickable' : '',
    props.class
  ].filter(Boolean).join(' ');
});
</script>

<template>
  <div 
    :class="cardClasses"
    :role="clickable ? 'button' : undefined"
    :tabindex="clickable ? 0 : undefined">
    <slot />
  </div>
</template>
