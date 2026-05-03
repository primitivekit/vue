export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps {
  label?: string;
  type?: InputType;
  size?: InputSize;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  helperText?: string;
  ariaLabel?: string;
  cssVariables?: Record<string, string>;
  modelValue?: string;
  inputId?: string;
}
