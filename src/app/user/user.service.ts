import { Injectable, Optional } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export class User {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public email: string,
  ) { }
}

const Users: User[] = [
  new User(1, 'Ana Lucia', 'Carhuaz', 'acarhuaz@gmail.com'),
  new User(2, 'Romina', 'Salazar', 'romina.salazar@gmail.co'),
  new User(3, 'Romulo', 'Rios', 'romulo.rios@gmail.com')
];

const FETCH_LATENCY = 500;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userName = '';

  constructor(@Optional() config: User) {
    if (config) {
      this._userName = config.name;
    }
  }

  getUsers(): Observable<User[]>  {
    return of(Users).pipe(delay(FETCH_LATENCY));
  }

}
