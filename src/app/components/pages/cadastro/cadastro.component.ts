import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { CadastroService } from './cadastro.service';
import { Destination } from './destination.model';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  form: FormGroup;
  destinations: Destination[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService
  ) {
    this.form = this.formBuilder.group({
      name: [
        null,
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(128),
          Validators.required,
        ]),
      ],
      mail: [null, Validators.compose([Validators.required, Validators.email])],
      destination: [null, Validators.required],
      endereco: this.formBuilder.group({
        cep: [
          null,
          Validators.compose([Validators.required, Validators.minLength(8)]),
        ],
        UF: [null, Validators.required],
        cidade: [null, Validators.required],
      }),
    });
  }

  populaDadosForm(dados: any) {
    this.form.patchValue({
      endereco: {
        cep: dados.cep,
        cidade: dados.localidade,
        UF: dados.uf,
      },
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form);

      this.cadastroService
        .ServiceOnSubmit(this.form)
        .pipe(map((res): any => res))
        .subscribe((dados) => {
          console.log(dados);
        });
    } else {
      this.checkFormValidation(this.form);
    }
  }
  checkFormValidation(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((campoForm) => {
      console.log(campoForm);
      const control = formGroup.get(campoForm);
      control?.markAsTouched();
      if (control instanceof FormGroup) {
        this.checkFormValidation(control);
      }
    });
  }

  onReset(): void {
    this.form.reset();
  }

  isValidTouched(input: string) {
    return !this.form.get(input)?.valid && this.form.get(input)?.touched;
  }

  activeErrorStyle(input: string) {
    return {
      'has-error': this.isValidTouched(input),
    };
  }

  consultaCEP() {
    let zipCode: any = this.form.get('endereco.cep')?.value;

    if (zipCode != null && zipCode !== '') {
      this.cadastroService
        .consultaCEP(zipCode)
        .pipe(map((data: any) => data))
        .subscribe((data) => this.populaDadosForm(data));
    }

    console.log(this.destinations);
  }

  ngOnInit(): void {
    // this.destinations = [];

    this.cadastroService.ServiceGetDestinations().subscribe((response: any) => {
      this.destinations = response;
    });
  }
}
