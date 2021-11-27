import {Component, OnInit} from '@angular/core'
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "./my.validators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  appState = 'off';

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get address() {
    return this.form.get('address');
  }

  get country() {
    return this.form.get('address')?.get('country');
  }

  get city() {
    return this.form.get('address')?.get('city');
  }

  get skills() {
    return this.form.get('skills');
  }

  get skillsControls() { return <FormArray>this.form.get('skills'); }

  setCapital() {
    const cityMap: any = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск'
    }

    const city: string = cityMap?.[this.country?.value]
    this.form.patchValue({
      address: {city}
    })
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // первый способ
    // <FormArray>this.skills?.push(control)
    //  второй способ
    (this.skills as FormArray).push(control)
    console.log(this.skillsControls?.controls)
  }

  removeSkill(idx: number) {
    // Удаление элемента
    (this.skills as FormArray).removeAt(idx)
  }

  submit() {
    if (this.form.valid) {
      console.log('Form: ', this.form)
      const formData = {...this.form.value}

      console.log('firmData', formData)

      this.form.reset();
      this.skillsControls.clear()
    }
  }

  handleChange() {
    console.log(this.appState)
  }
}

