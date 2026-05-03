<template>
  <div class="pk-input-wrapper">
    <label v-if="label" :for="inputId" class="pk-input__label">
      {{ label }}
      <span v-if="required" class="pk-input__required">*</span>
    </label>
    <input
      :id="inputId"
      :class="inputClasses"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :aria-label="ariaLabel || label"
      :aria-invalid="error ? 'true' : undefined"
      :style="customStyles"
      :value="modelValue"
      @input="onInput"
      @blur="onBlur"
    />
    <span v-if="error" class="pk-input__error">{{ error }}</span>
    <span v-if="helperText && !error" class="pk-input__helper">{{ helperText }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { InputProps } from './types';

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  size: 'medium',
  disabled: false,
  required: false,
  modelValue: '',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  blur: [];
}>();

const inputId = computed(() => props.inputId || `pk-input-${Math.random().toString(36).substr(2, 9)}`);

const inputClasses = computed(() => {
  let classes = `pk-input pk-input--${props.size}`;
  if (props.error) classes += ' pk-input--error';
  if (props.disabled) classes += ' pk-input--disabled';
  return classes;
});

const customStyles = computed(() => {
  if (!props.cssVariables) return {};
  return props.cssVariables;
});

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const onBlur = () => {
  emit('blur');
};
</script>

<style scoped>
.pk-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--input-wrapper-gap, 0.5rem);
  width: var(--input-wrapper-width, 100%);
}

.pk-input__label {
  font-size: var(--input-label-font-size, 0.875rem);
  font-weight: var(--input-label-font-weight, 500);
  color: var(--input-label-color, #374151);
  margin-bottom: var(--input-label-margin-bottom, 0.25rem);
}

.pk-input__required {
  color: var(--input-required-color, #dc2626);
  margin-left: var(--input-required-margin-left, 0.125rem);
}

.pk-input {
  width: 100%;
  padding: var(--input-padding-y, 0.5rem) var(--input-padding-x, 0.75rem);
  font-family: var(--input-font-family, inherit);
  font-size: var(--input-font-size, 1rem);
  font-weight: var(--input-font-weight, 400);
  line-height: var(--input-line-height, 1.5);
  color: var(--input-color, #1f2937);
  background-color: var(--input-background, #ffffff);
  border: var(--input-border-width, 1px) solid var(--input-border-color, #d1d5db);
  border-radius: var(--input-border-radius, 0.375rem);
  outline: none;
  transition: var(--input-transition, all 0.2s ease-in-out);
}

.pk-input::placeholder {
  color: var(--input-placeholder-color, #9ca3af);
}

.pk-input:hover:not(:disabled) {
  border-color: var(--input-hover-border-color, #9ca3af);
}

.pk-input:focus {
  border-color: var(--input-focus-border-color, #3b82f6);
  box-shadow: var(--input-focus-box-shadow, 0 0 0 3px rgba(59, 130, 246, 0.1));
}

.pk-input:disabled {
  background-color: var(--input-disabled-background, #f3f4f6);
  color: var(--input-disabled-color, #9ca3af);
  cursor: not-allowed;
  opacity: var(--input-disabled-opacity, 0.6);
}

.pk-input--error {
  border-color: var(--input-error-border-color, #dc2626);
}

.pk-input--error:focus {
  border-color: var(--input-error-focus-border-color, #dc2626);
  box-shadow: var(--input-error-focus-box-shadow, 0 0 0 3px rgba(220, 38, 38, 0.1));
}

.pk-input--small {
  padding: var(--input-small-padding-y, 0.375rem) var(--input-small-padding-x, 0.625rem);
  font-size: var(--input-small-font-size, 0.875rem);
}

.pk-input--medium {
  padding: var(--input-medium-padding-y, 0.5rem) var(--input-medium-padding-x, 0.75rem);
  font-size: var(--input-medium-font-size, 1rem);
}

.pk-input--large {
  padding: var(--input-large-padding-y, 0.625rem) var(--input-large-padding-x, 1rem);
  font-size: var(--input-large-font-size, 1.125rem);
}

.pk-input__error {
  font-size: var(--input-error-font-size, 0.875rem);
  color: var(--input-error-color, #dc2626);
  margin-top: var(--input-error-margin-top, 0.25rem);
}

.pk-input__helper {
  font-size: var(--input-helper-font-size, 0.875rem);
  color: var(--input-helper-color, #6b7280);
  margin-top: var(--input-helper-margin-top, 0.25rem);
}
</style>
