import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, of } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  constructor(private http: HttpClient) {}

  ServiceGetDestinations() {
    let js = this.http.get('assets/destino.json');
    console.log(js);

    return js;
  }

  consultaCEP(zipCode: string) {
    zipCode = zipCode.replace(/[^0-9]/g, '');
    console.log(zipCode);

    if (zipCode != null && zipCode !== '') {
      let validacep: RegExp = /^[0-9]{8}$/;

      if (validacep.test(zipCode)) {
        return this.http.get(`//viacep.com.br/ws/${zipCode}/json/`);
      }
    }
    return of({});
  }

  ServiceOnSubmit(form: FormGroup) {
    return this.http.post('https:httpbin.org/post', JSON.stringify(form.value));
  }
}
