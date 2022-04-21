import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableNavService {

  page: Subject<string> = new Subject()
  planet: Subject<string> = new Subject()
  crew: Subject<string> = new Subject()
  technology: Subject<string> = new Subject()

  // Observable page functions
  setPage(newValue: any) {
    this.page.next(newValue)
  }
  getPage(): Observable<any> {
    return this.page.asObservable()
  }


  // Observable planet functions
  setPlanet(newValue: any) {
    this.planet.next(newValue)
  }
  getPlanet(): Observable<any> {
    return this.planet.asObservable()
  }

  // Observable crew functions
  setCrew(newValue: any) {
    this.crew.next(newValue)
  }
  getCrew(): Observable<any> {
    return this.crew.asObservable()
  }

  // Observable technology functions
  setTechnology(newValue: any) {
    this.technology.next(newValue)
  }
  getTechnology(): Observable<any> {
    return this.technology.asObservable()
  }




  constructor() { }
}
