import '@testing-library/jest-dom'
import type { Assertion as BaseAssertion } from 'vitest'

declare module 'vitest' {
  export interface Assertion extends BaseAssertion {
    toBeInTheDocument(): void;
    toHaveTextContent(text: string | RegExp): void;
    toBeVisible(): void;
    toBeInvalid(): void;
    toBeValid(): void;
    toBeRequired(): void;
    toBeDisabled(): void;
    toBeEnabled(): void;
    toHaveClass(className: string): void;
    toHaveValue(value: string | string[] | number): void;
    toHaveAttribute(attr: string, value?: string): void;
  }
} 