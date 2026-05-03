/**
 * @primitivekit/vue
 * Version: 0.0.2
 * 
 * Primitive Vue 3 components with zero hardcoded values.
 * Fully customizable via CSS variables.
 */

export { default as Button } from './components/Button/Button.vue';
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button/types';

export { default as Input } from './components/Input/Input.vue';
export type { InputProps, InputType, InputSize } from './components/Input/types';

export const version = '0.0.2';
