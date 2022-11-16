import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  public static empty(c: AbstractControl): ValidationErrors {
    if (c.value === '') {
      return {}; // oder null
    }
    return { empty: true };
  }

  public static maxValue(max: number): ValidatorFn {
    return (c: AbstractControl) => {
      if (c.value > max) {
        return {
          maxValue: {
            currentVal: c.value,
            max: max,
          },
        };
      }
      return null;
    };
  }

  public static between(min: number, max: number): ValidatorFn {
    return (c: AbstractControl) => {
      if (c.value < min || c.value > max) {
        return {
          between: {
            currentVal: c.value,
            min: c.value < min ? min : undefined,
            max: c.value > max ? max : undefined,
          },
        };
      }
      return null;
    };
  }
}
