<script setup lang="ts">
import { computed, ref } from 'vue';
import './Avatar.css';

export type AvatarSize = 'small' | 'medium' | 'large' | number;
export type AvatarShape = 'circle' | 'square';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  class?: string;
}

const props = withDefaults(defineProps<AvatarProps>(), {
  alt: 'Avatar',
  size: 'medium',
  shape: 'circle',
  class: ''
});

const emit = defineEmits<{
  click: [];
}>();

const imgError = ref(false);

const avatarClasses = computed(() => {
  return [
    'avatar',
    `avatar--${props.shape}`,
    typeof props.size === 'string' ? `avatar--${props.size}` : '',
    props.class
  ].filter(Boolean).join(' ');
});

const avatarStyles = computed(() => {
  if (typeof props.size === 'number') {
    return { '--avatar-size': `${props.size}px` };
  }
  return {};
});

const handleError = () => {
  imgError.value = true;
};

const handleClick = () => {
  emit('click');
};
</script>

<template>
  <div 
    :class="avatarClasses"
    :style="avatarStyles"
    @click="handleClick">
    <img
      v-if="src && !imgError"
      :src="src"
      :alt="alt"
      class="avatar__image"
      @error="handleError" />
    <span v-else-if="$slots.icon" class="avatar__icon"><slot name="icon" /></span>
    <span v-else class="avatar__text">
      <slot>{{ alt?.charAt(0).toUpperCase() }}</slot>
    </span>
  </div>
</template>
