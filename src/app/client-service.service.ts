import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

type product = {
  id: number,
  name: string,
  price: number,
  number: number
}

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor() { }

  public postClient(): string {
    return "postClient";
  }

  public getClient(): string {
    return "getClient";
  }

  public postLogin(): string {
    return "postLogin";
  }

  public getCatalogue(): Observable<Array<product>> {
    return of([
      {id: 0, name: "Banane", price: 3.90, number: 5},
      {id: 1, name: "Pomme", price: 2.70, number: 8},
      {id: 2, name: "Poire", price: 2.35, number: 3},
      {id: 3, name: "Cerise", price: 4.80, number: 12},
    ]);
  }
}

