import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceWithPromiseService {

  constructor() { }

  methodReturningPromise(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 300);
    });
  }
}
