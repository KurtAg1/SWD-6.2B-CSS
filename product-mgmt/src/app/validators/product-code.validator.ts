import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function productCodeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;
    console.log('Value to be validated: ' + value);

    // checking for length
    const lengthValid: boolean = value.length == 7;

    // check for dash
    const dashValid: boolean = value[3] == '-';

    const isValueValid: boolean = lengthValid && dashValid;

    return !isValueValid ? { productCodeInvalid: true } : null;
  };
}
