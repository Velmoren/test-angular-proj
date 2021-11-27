import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LogService {

  str = 'Hello'

  log(text: string) {
    console.log(`Log ${text}`)
  }

}
