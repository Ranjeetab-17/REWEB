import { AbstractControl } from '@angular/forms'


export const emailMatcher = (control: AbstractControl) => {
    debugger
    const email = control.get('email');
    const confirEmail = control.get('confirmEmail');
    if (!email || !confirEmail)
        return null;

    return email.value === confirEmail.valid ? null : false;
}