import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  valueOnRoute1 = 'default value on route 1';
  valueOnRoute2 = 'default value on route 2';

  constructor() { }
}
