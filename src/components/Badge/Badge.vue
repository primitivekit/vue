<script setup lang="ts">
import { computed } from 'vue';
import './Badge.css';

export type BadgeVariant = 'solid' | 'subtle' | 'outline';
export type BadgeColorScheme = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeSize = 'small' | 'medium' | 'large';

export interface BadgeProps {
  variant?: BadgeVariant;
  colorScheme?: BadgeColorScheme;
  size?: BadgeSize;
  class?: string;
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'solid',
  colorScheme: 'primary',
  size: 'medium',
  class: ''
});

const badgeClasses = computed(() => {
  return [
    'badge',
    `badge--${props.variant}`,
    `badge--${props.colorScheme}`,
    `badge--${props.size}`,
    props.class
  ].filter(Boolean).join(' ');
});
</script>

<template>
  <span :class="badgeClasses"><slot /></span>
</template>
