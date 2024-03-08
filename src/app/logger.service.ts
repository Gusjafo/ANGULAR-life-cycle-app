import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class Logger {
  nextId: number = 1;

  log(msg: any)   { console.log(`#${this.nextId++} ${msg}`); }
  error(msg: any) { console.error(`#${this.nextId++} ${msg}`); }
  warn(msg: any)  { console.warn(`#${this.nextId++} ${msg}`); }
}
