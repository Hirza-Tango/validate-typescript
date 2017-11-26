export function validate<T>(schema: T, input: any, name?: string): T;

export function Email(): string;
export function ID(): number;
export function RegEx(regEx: RegExp): string;

export function Type<A, B>(ctor: ((() => A) | (new () => B))): B;
export function Options<T>(validators: T[]): T;
export function Optional<T>(validator: T): T | undefined;
export function Nullable<T>(validator: T): T | null;
export function Validator<T>(method: (input: any, prop: string) => T): T;