import { ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenLetterValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenLetter': {value: control.value}} : null;
  };
}
export function forbiddenEmailValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenEmail': {value: control.value}} : null;
  };
}
